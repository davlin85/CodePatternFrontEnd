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

const OnBoardingOneScreen: React.FC = ({ navigation }: any) => {
  const [firstname, setFirstName] = useState("");
  const [error, setError] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = firstname ? 1 : 0.4;

  const handleFirstName = (firstName: string) => {
    if (firstName.length === 0 && firstName.length < 2) {
      setError("Du måste fylla i ditt förnamn!");
    } else if (firstName.length > 2) {
      setError("");
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingTwo", { firstname: firstname });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Vad heter du i förnamn?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <FontAwesome name="user-o" color="#05375a" size={30} />
            <TextInput
              value={firstname}
              placeholder="Förnamn"
              onChangeText={(value) => {
                setFirstName(value);
                handleFirstName(value);
              }}
              style={style.textInput}
            />
          </View>

          {error ? <Text style={style.errorText}>{error}</Text> : null}

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!firstname || inProcess}
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

export default OnBoardingOneScreen;
