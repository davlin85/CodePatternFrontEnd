import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetIdToken } from "../../../helpers/Functions";
import style from "../../../components/OnBoarding.module";

const OnBoardingSuccessScreen: React.FC = ({ route, navigation }: any) => {
  const { firstname: firstname } = route.params;
  const { lastname: lastname } = route.params;
  const { age: age } = route.params;
  const { gender: gender } = route.params;
  const { civilstatus: civilstatus } = route.params;
  const { employment: employment } = route.params;
  const { accommodation: accommodation } = route.params;
  const { income: income } = route.params;

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      if (value !== null) {
        return value;
      }
      return "";
    } catch (error) {
    }
  };

  const postUser = async () => {
    let id = await retrieveData();
    const post = {
      id,
      firstname,
      lastname,
      age,
      gender,
      civilstatus,
      employment,
      accommodation,
      income,
    };
    let accessToken = await GetIdToken();
    fetch(
      `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/user/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(post),
      }
    ).then(() => {
      navigation.navigate("Pengavakten");
    });
  };

  useEffect(() => {
    setTimeout(() => {
      postUser();
    }, 1500);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Tack för dina svar!</Text>
        </View>
        <Animatable.View
          style={style.footer}
          animation="bounceInUp"
          duration={1700}
        >
          <Text style={style.title}>Kom igång med ett sparmål!</Text>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OnBoardingSuccessScreen;
