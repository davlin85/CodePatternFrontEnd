import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import RadioButtons from "../../../helpers/RadioButton";
import style from "../../../components/OnBoarding.module";

const OnBoardingEightScreen: React.FC = ({ route, navigation }: any) => {
  const [income, setIncome] = useState("");
  const [inProcess, setInProcess] = useState(false);

  const opacityStyle = income ? 1 : 0.4;

  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;
  const { age: age } = route.params;
  const { gender: gender } = route.params;
  const { civilstatus: civilstatus } = route.params;
  const { employment: employment } = route.params;
  const { accommodation: accommodation } = route.params;

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("OnBoardingSuccess", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        civilstatus: civilstatus,
        employment: employment,
        accommodation: accommodation,
        income: income,
      });
      setInProcess(false);
    }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Vad är din inkomst?</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <View style={style.action}>
            <FontAwesome5 name="money-bill-wave" size={24} color="black" />
            <View
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "0 kr - 99.000 kr", id: "0 kr - 99.000 kr" },
                {
                  label: "100.000 kr - 199.000 kr",
                  id: "100.000 kr - 199.000 kr",
                },
                {
                  label: "200.000 kr - 299.000 kr",
                  id: "200.000 kr - 299.000 kr",
                },
                {
                  label: "300.000 kr - 399.000 kr",
                  id: "300.000 kr - 399.000 kr",
                },
                {
                  label: "400.000 kr - 499.000 kr",
                  id: "400.000 kr - 499.000 kr",
                },
                { label: "500.000 kr +", id: "500.000 kr +" },
              ].map((item, i) => {
                return (
                  <RadioButtons
                    key={i}
                    item={item}
                    checked={income}
                    setChecked={setIncome}
                  />
                );
              })}
            </View>
          </View>

          <View style={style.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[{ opacity: opacityStyle }, style.buttonContainer]}
              disabled={!income || inProcess}
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

export default OnBoardingEightScreen;
