import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import RadioButtons from "../../../helpers/RadioButton";
import style from "../../../components/OnBoarding.module";

const OnBoardingSevenScreen: React.FC = ({ route, navigation }: any) => {
  const [accommodation, setAccommodation] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = accommodation ? 1 : 0.4;

  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;
  const { age: age } = route.params;
  const { gender: gender } = route.params;
  const { civilstatus: civilstatus } = route.params;
  const { employment: employment } = route.params;

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingEight", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        civilstatus: civilstatus,
        employment: employment,
        accommodation: accommodation,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Vilken är din boendeform?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <FontAwesome5 name="house-user" size={24} color="black" />
            <View
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  label: "Tillsammans med minst 1 i hus",
                  id: "Tillsammans med minst 1 i hus",
                },
                {
                  label: "Tillsammans med minst 1 i lägenhet",
                  id: "Tillsammans med minst 1 i lägenhet",
                },
                { label: "Själv i hus", id: "Själv i hus" },
                { label: "Själv i lägenhet", id: "Själv i lägenhet" },
                { label: "Hos föräldrar", id: "Hos föräldrar" },
                { label: "Vill ej ange", id: "Vill ej ange" },
              ].map((item, i) => {
                return (
                  <RadioButtons
                    key={i}
                    item={item}
                    checked={accommodation}
                    setChecked={setAccommodation}
                  />
                );
              })}
            </View>
          </View>

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!accommodation || inProcess}
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

export default OnBoardingSevenScreen;
