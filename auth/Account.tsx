import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import React, { createContext, useState, useContext, useEffect } from "react";
import Pool from "../auth/UserPool";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IAuthTokens, Props } from "../types/Types";

const AuthContext = createContext<any>(undefined);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider: React.FC<Props> = (props) => {
  const [tokens, setTokens] = useState<IAuthTokens>({} as IAuthTokens);

  const init = async () => {
    const id = await AsyncStorage.getItem("id");

    if (!id) return;

    const tokensFromAsyncStorage = await Promise.all([
      AsyncStorage.getItem("accessToken"),
      AsyncStorage.getItem("idToken"),
      AsyncStorage.getItem("refreshToken"),
    ]);

    if (tokensFromAsyncStorage.some((x) => x === null)) return;

    const [accessToken, idToken, refreshToken] = tokensFromAsyncStorage as [
      string,
      string,
      string
    ];

    setTokens({
      accessToken,
      idToken,
      refreshToken,
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [tokens]);

  const logout = async () => {
    await AsyncStorage.multiRemove([
      "id",
      "accessToken",
      "idToken",
      "refreshToken",
    ]);

    const clearTokens = {
      accessToken: "",
      idToken: "",
      refreshToken: "",
    };

    setTokens({ ...clearTokens });
  };

  const getSession = async () => {
    try {
      await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();
        if (user) {
          user.getSession((err: any, session: CognitoUserSession) => {
            if (err) {
              reject();
            } else {
              resolve(session);
            }
          });
        } else {
          reject();
        }
      });
    } catch (reject) {}
  };

  const authenticate = async (Username: string, Password: string) => {
    try {
      await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool });
        const authDetails = new AuthenticationDetails({ Username, Password });

        user.authenticateUser(authDetails, {
          onSuccess: async (data) => {
            let id = data.getAccessToken().payload.sub;

            const newTokens = {
              accessToken: data.getAccessToken().getJwtToken(),
              idToken: data.getIdToken().getJwtToken(),
              refreshToken: data.getRefreshToken().getToken(),
            };

            const tokensExpire = {
              accessTokenExpire: data.getAccessToken().getExpiration(),
              idTokenExpire: data.getIdToken().getExpiration(),
            };
            await AsyncStorage.setItem(
              "idTokenExpire",
              JSON.stringify(tokensExpire.idTokenExpire)
            );

            setTokens({ ...newTokens });

            await AsyncStorage.multiSet([
              ["id", id],
              ["accessToken", newTokens.accessToken],
              ["idToken", newTokens.idToken],
              ["refreshToken", newTokens.refreshToken],
            ]);

            resolve(data);
          },

          onFailure: (err) => {
            console.error("onFailure:", err);
            reject(err);
          },

          newPasswordRequired: (data) => {
            resolve(data);
          },
        });
      });
    } catch (reject) {}
  };

  return (
    <AuthContext.Provider
      value={{ authenticate, getSession, logout, tokens, setTokens }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
