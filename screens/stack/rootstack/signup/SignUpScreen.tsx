import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import UserPool from "../../../../auth/UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { ISignUpStatus } from "../../../../types/Types";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import style from "../../../../components/Splash.module";

const SignUpScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValidError, setEmailValidError] = useState("");
  const [passwordValidError, setPasswordValidError] = useState("");
  const [confirmPasswordValidError, setConfirmPasswordValidError] = useState("");

  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);

  const opacityStyle = email && password && confirmPassword ? 1 : 0.4;

  const handleEmailChange = (email: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email.length === 0) {
      setEmailValidError("Du måste fylla i din email!");
    } else if (reg.test(email) === false) {
      setEmailValidError("Du måste ange en godkänd email!");
    } else if (reg.test(email) === true) {
      setEmailValidError("");
    }
  };

  const handlePasswordChange = (password: string) => {
    let reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.length === 0) {
      setPasswordValidError("Du måste fylla i ditt lösenord!");
    } else if (reg.test(password) === false) {
      setPasswordValidError(
        "Lösenordet ska vara minst 8 tecken och innehålla siffror, gemener, versaler och specialtecken."
      );
    } else if (reg.test(password) === true && password) {
      setPasswordValidError("");
    }
  };

  const handleConfirmPassword = (confirmPassword: string) => {
    if (confirmPassword != password) {
      setConfirmPasswordValidError("Lösenorden matchar inte!");
    } else if (confirmPassword.length === 0) {
      setConfirmPasswordValidError("Du måste bekräfta lösenordet!");
    } else if (confirmPassword === password) {
      setConfirmPasswordValidError("");
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    const signUpStatus = new Promise<ISignUpStatus>((resolve, reject) => {
      UserPool.signUp(
        email,
        password,
        [] as CognitoUserAttribute[],
        [] as CognitoUserAttribute[],
        (error, result) => {
          if (error) {
            setEmailValidError(
              "Användaren finns redan eller felaktigt lösenord!"
            );
            setInProcess(false);
            reject(error);
          } else {
            setInProcess(false);
            resolve({
              email: email,
              password: password,
              userConfirmed: result?.userConfirmed,
            } as ISignUpStatus);
            setTimeout(() => {
              navigation.navigate("SignUpConfirmationCode", {
                email: email,
                password: password,
              });
              setInProcess(false);
            }, 500);
          }
        }
      );
    });
    return signUpStatus;
  };

  const onSubmit2 = () => {
    setInProcess2(true);
    setTimeout(() => {
      navigation.navigate("SignIn");
      setInProcess2(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Bli Medlem!</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <FontAwesome name="user-o" color="#05375a" size={30} />
            <TextInput
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(value) => {
                setEmail(value);
                handleEmailChange(value);
              }}
              style={style.textInput}
            />
          </View>

          {emailValidError ? (
            <Text style={style.errorText}>{emailValidError}</Text>
          ) : null}

          <View style={style.action}>
            <FontAwesome name="lock" color="#05375a" size={36} />
            <TextInput
              placeholder="Lösenord"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                handlePasswordChange(value);
              }}
              style={style.textInput}
            />
          </View>
          {passwordValidError ? (
            <Text style={style.errorText}>{passwordValidError}</Text>
          ) : null}

          <View style={style.action}>
            <FontAwesome name="lock" color="#05375a" size={36} />
            <TextInput
              placeholder="Bekräfta lösenordet"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(value) => {
                setConfirmPassword(value);
                handleConfirmPassword(value);
              }}
              style={style.textInput}
            />
          </View>
          {confirmPasswordValidError ? (
            <Text style={style.errorText}>{confirmPasswordValidError}</Text>
          ) : null}
          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!email || !password || !confirmPassword || inProcess}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Bli Medlem!</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit2}
              style={style.alreadyMemberContainer}
            >
              {inProcess2 ? (
                <ActivityIndicator size="small" color="#02B9AA" />
              ) : (
                <Text style={style.alreadyMemberText}>Är du redan medlem?</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
