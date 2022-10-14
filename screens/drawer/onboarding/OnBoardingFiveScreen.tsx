import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import RadioButtons from "../../../helpers/RadioButton";
import style from "../../../components/OnBoarding.module";

const OnBoardingFiveScreen: React.FC = ({ route, navigation }: any) => {
  const [civilstatus, setCivilStatus] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = civilstatus ? 1 : 0.4;

  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;
  const { age: age } = route.params;
  const { gender: gender } = route.params;

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingSix", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        civilstatus: civilstatus,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Vilket är ditt civiltillstånd?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <Ionicons name="people" size={24} color="black" />
            <View
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Gift", id: "Gift" },
                { label: "Ogift", id: "Ogift" },
                { label: "Skild", id: "Skild" },
                { label: "Änka/Änkling", id: "Änka/Änkling" },
                { label: "Vill ej ange", id: "Vill ej ange" },
              ].map((item, i) => {
                return (
                  <RadioButtons
                    key={i}
                    item={item}
                    checked={civilstatus}
                    setChecked={setCivilStatus}
                  />
                );
              })}
            </View>
          </View>

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!civilstatus || inProcess}
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

export default OnBoardingFiveScreen;
