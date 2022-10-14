import UserPool from "./UserPool";
import {
  CognitoUser,
  CognitoRefreshToken,
  ICognitoUserData,
} from "amazon-cognito-identity-js";
import { IAuthTokens, IAuthError, ErrorCodes } from "../types/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const refreshToken = async (rT: string, id: string): Promise<string> => {
  try {
    const userData: ICognitoUserData = {
      Username: id,
      Pool: UserPool,
    };

    let refreshToken = new CognitoRefreshToken({ RefreshToken: rT });
    const cognitoUser = new CognitoUser(userData);

    const authTokens = await new Promise<IAuthTokens>((resolve, reject) => {
      cognitoUser.refreshSession(refreshToken, (error, result) => {
        if (error) {
          reject(error);
        }

        const accessToken = result.accessToken.jwtToken;
        const idToken = result.idToken.jwtToken;
        const refreshToken = result.refreshToken.token;

        AsyncStorage.setItem("accessToken", accessToken);
        AsyncStorage.setItem("idToken", idToken);
        AsyncStorage.setItem("refreshToken", refreshToken);

        resolve({
          accessToken: accessToken,
          idToken: idToken,
          refreshToken: refreshToken,
        });
      });
    });

    return authTokens.idToken;
  } catch (reason) {

    switch (String(reason)) {
      case "InvalidParameterException: Missing required parameter REFRESH_TOKEN":
        throw {
          code: ErrorCodes.invalidToken,
          message: "auth.refresh.errors.missingRefreshToken",
        } as IAuthError;
      case "NotAuthorizedException: Invalid Refresh Token":
        throw {
          code: ErrorCodes.invalidToken,
          message: "auth.refresh.errors.invalidRefreshToken",
        } as IAuthError;
      default:
        throw {
          code: ErrorCodes.tokenExpired,
          message: "auth.refresh.errors.generic",
        } as IAuthError;
    }
  }
};

export default refreshToken;
