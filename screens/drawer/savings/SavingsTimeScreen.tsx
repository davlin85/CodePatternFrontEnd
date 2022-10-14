import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { GetIdToken, GetMessages } from "../../../helpers/Functions";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";

const SavingsScreen: React.FC = ({ route, navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);
  const [dataMessages, setDataMessages] = useState<any>([]);
  const [mydate, setDate] = useState(new Date());
  const changeSelectedDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };

  const { amount: amount } = route.params;

  let minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      if (value !== null) {
        return value;
      }
      return "";
    } catch (error) {
      console.log(error);
    }
  };

  const getMessages = async () => {
    try {
      const json = await GetMessages();
      setDataMessages(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("Pengavakten");
      setInProcess(false);
    }, 500);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const onSubmit2 = async () => {
    let userid = await retrieveData();

    const post = {
      userid,
      amount,
      enddate: dayjs(mydate).format("YYYY-MM-DD"),
    };
    let accessToken = await GetIdToken();
    fetch(
      `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savings/add`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(post),
      }
    ).then(() => {
      setInProcess2(true);
      setTimeout(() => {
        navigation.navigate("Pengavakten");
        setInProcess2(false);
      }, 500);
    });
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.header} />

        <Animatable.View
          style={style.footer}
          animation="zoomIn"
          duration={1100}
        >
          <Animatable.View
            animation="slideInLeft"
            duration={1800}
            style={style.message}
          >
            <Text style={style.text_message}>{dataMessages.message}</Text>

            <View style={style.rightArrow}></View>

            <View style={style.rightArrowOverlap}></View>
          </Animatable.View>

          <View>{DragonImage()}</View>

          <View style={style.action}>
            <Text style={style.title}>Hur länge vill du spara?</Text>
          </View>

          <View style={styles.calender}>
            <DateTimePicker
              value={mydate}
              style={{ width: 300, height: 265 }}
              mode={"date"}
              themeVariant="light"
              accentColor="#009387"
              display="inline"
              minimumDate={minDate}
              locale={"sv"}
              onChange={changeSelectedDate}
            />
          </View>

          <View style={style.action} />
          <View style={styles.savings_button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={{ ...style.buttonContainerThree, width: "30%" }}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Avbryt</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSubmit2}
              style={{ ...style.buttonContainerOne, width: "60%" }}
            >
              {inProcess2 ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Då kör vi igång!</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SavingsScreen;

const styles = StyleSheet.create({
  calender: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: -8,
  },
  savings_button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
