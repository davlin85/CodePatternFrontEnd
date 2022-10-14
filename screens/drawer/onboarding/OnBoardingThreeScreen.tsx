import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Octicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import style from "../../../components/OnBoarding.module";

const OnBoardingThreeScreen: React.FC = ({ route, navigation }: any) => {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = age ? 1 : 0.4;

  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;

  const handleAge = (age: string) => {
    if (age.length === 0 && age.length > 10) {
      setError("Fyll i din ålder med formatet ÅÅÅÅ-MM-DD!");
    } else if (age.length > 11) {
      setError("Fyll i din ålder med formatet ÅÅÅÅ-MM-DD!");
    } else if (age.length < 10) {
      setError("Fyll i din ålder med formatet ÅÅÅÅ-MM-DD!");
    } else if (age.length === 10) {
      setError("");
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingFour", {
        firstname: firstname,
        lastname: lastname,
        age: age,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>När är du född?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <Octicons name="number" size={24} color="black" />
            <TextInputMask
              style={style.textInput}
              value={age}
              placeholder={"Födelsedatum"}
              onChangeText={(value) => {
                setAge(value);
                handleAge(value);
              }}
              type={"datetime"}
              options={{
                format: "YYYY-MM-DD HH:mm:ss",
              }}
            />
          </View>

          {error ? <Text style={style.errorText}>{error}</Text> : null}

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!age || inProcess}
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

export default OnBoardingThreeScreen;
