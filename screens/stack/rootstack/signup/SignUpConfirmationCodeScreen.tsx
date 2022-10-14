import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Octicons } from "@expo/vector-icons";
import UserPool from "../../../../auth/UserPool";
import { IConfirmRegistrationStatus } from "../../../../types/Types";
import { CognitoUser } from "amazon-cognito-identity-js";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import style from "../../../../components/Splash.module";

const SignUpScreen: React.FC = ({ route, navigation }: any) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = code ? 1 : 0.4;

  const { email: email } = route.params;

  const handleConfirmationCode = (code: string) => {
    if (code.length === 0) {
      setError("Du måste fylla i din kod!");
    } else if (code.length > 6 && code.length <= 7) {
      setError("Du måste fylla in en korrekt kod!");
    } else if (code.length === 6) {
      setError("");
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    const userData = {
      Username: email,
      Pool: UserPool,
    };
    const cognitoUser = new CognitoUser(userData);
    const authTokens = new Promise<IConfirmRegistrationStatus>(
      (resolve, reject) => {
        cognitoUser.confirmRegistration(code, true, async (error, result) => {
          if (error) {
            reject(error);
            console.log(error);
          }
          setInProcess(false);
          resolve({
            confirmed: result === null || result === "SUCCESS",
          } as IConfirmRegistrationStatus);
          if (result === "SUCCESS") {
            navigation.navigate("SignIn");
          }
        });
      }
    );
    return authTokens;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Bekräfta din email!</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <Octicons name="number" size={24} color="black" />
            <TextInput
              value={code}
              placeholder="Kod"
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={(value) => {
                setCode(value);
                handleConfirmationCode(value);
              }}
              style={style.textInput}
            />
          </View>

          {error ? <Text style={style.errorText}>{error}</Text> : null}

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!code || inProcess}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Skapa ett konto!</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={style.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={style.alreadyMemberContainer}
            >
              <Text style={style.alreadyMemberText}>Är du redan medlem?</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
