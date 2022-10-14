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
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import style from "../../../components/OnBoarding.module";

const OnBoardingTwoScreen: React.FC = ({ route, navigation }: any) => {
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = lastname ? 1 : 0.4;

  const { firstname: firstname } = route.params;

  const handleLastName = (lastName: string) => {
    if (lastName.length === 0 && lastName.length < 2) {
      setError("Du måste fylla i ditt efternamn!");
    } else if (lastName.length > 2) {
      setError("");
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingThree", {
        firstname: firstname,
        lastname: lastname,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Vad heter du i efternamn?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <FontAwesome name="user-o" color="#05375a" size={30} />
            <TextInput
              value={lastname}
              placeholder="Efternamn"
              onChangeText={(value) => {
                setLastName(value);
                handleLastName(value);
              }}
              style={style.textInput}
            />
          </View>

          {error ? <Text style={style.errorText}>{error}</Text> : null}

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!lastname || inProcess}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Fortsätt till nästa fråga!</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OnBoardingTwoScreen;
