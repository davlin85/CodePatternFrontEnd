import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Entypo } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import RadioButtons from "../../../helpers/RadioButton";
import style from "../../../components/OnBoarding.module";

const OnBoardingSixScreen: React.FC = ({ route, navigation }: any) => {
  const [employment, setEmployment] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = employment ? 1 : 0.4;

  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;
  const { age: age } = route.params;
  const { gender: gender } = route.params;
  const { civilstatus: civilstatus } = route.params;

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingSeven", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        civilstatus: civilstatus,
        employment: employment,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Vad är din sysselsättning?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <Entypo name="tools" size={24} color="black" />
            <View
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Heltidsanställd", id: "Heltidsanställd" },
                { label: "Deltidsanställd", id: "Deltidsanställd" },
                { label: "Timanställd", id: "Timanställd" },
                { label: "Arbetslös", id: "Arbetslös" },
                { label: "Student", id: "Student" },
                { label: "Sjukskriven", id: "Sjukskriven" },
                { label: "Pensionär", id: "Pensionär" },
                { label: "Vill ej ange", id: "Vill ej ange" },
              ].map((item, i) => {
                return (
                  <RadioButtons
                    key={i}
                    item={item}
                    checked={employment}
                    setChecked={setEmployment}
                  />
                );
              })}
            </View>
          </View>

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!employment || inProcess}
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

export default OnBoardingSixScreen;
