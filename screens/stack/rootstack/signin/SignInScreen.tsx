import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useContext } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../../../../auth/Account";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import style from "../../../../components/Splash.module";

const SignInScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidError, setEmailValidError] = useState("");
  const [passwordValidError, setPasswordValidError] = useState("");
  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const opacityStyle = email && password ? 1 : 0.4;

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
    } else if (reg.test(password) === true) {
      setPasswordValidError("");
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    authenticate(email, password)
      .then((data: any) => {
        setTimeout(() => {
          setInProcess(false);
        }, 500);
      })
      .catch((err: any) => {
        console.log("Det gick inte att logga in!", err);
        setEmailValidError(
          "Användaren är inte registrerad eller felaktigt lösenord!"
        );
      });
  };

  const onSubmit2 = () => {
    setInProcess2(true);
    setTimeout(() => {
      navigation.navigate("SignUp");
      setInProcess2(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Välkommen!</Text>
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
          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!email || !password || inProcess}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Logga in!</Text>
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
                <Text style={style.alreadyMemberText}>Har du inget konto?</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
