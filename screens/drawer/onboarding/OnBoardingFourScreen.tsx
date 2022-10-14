import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import RadioButtons from "../../../helpers/RadioButton";
import style from "../../../components/OnBoarding.module";

const OnBoardingFourScreen: React.FC = ({ route, navigation }: any) => {
  const [gender, setGender] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = gender ? 1 : 0.4;

  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;
  const { age: age } = route.params;

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingFive", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>
            Vilket kön identifierar du dig som?
          </Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <FontAwesome name="transgender-alt" size={24} color="black" />

            <View
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Man", id: "Man" },
                { label: "Kvinna", id: "Kvinna" },
                { label: "Annat", id: "Annat" },
                { label: "Vill ej ange", id: "Vill ej ange" },
              ].map((item, i) => {
                return (
                  <RadioButtons
                    key={i}
                    item={item}
                    checked={gender}
                    setChecked={setGender}
                  />
                );
              })}
            </View>
          </View>

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!gender || inProcess}
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

export default OnBoardingFourScreen;
