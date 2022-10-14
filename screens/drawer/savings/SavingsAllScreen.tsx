import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GetAllSavingsById,
  GetAllCompletedSavingsById,
  GetMessages,
} from "../../../helpers/Functions";
import dayjs from "dayjs";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";
import { Entypo } from "@expo/vector-icons";

const SavingsAllScreen: React.FC = ({ navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);
  const [inProcess3, setInProcess3] = useState(false);
  const [dataSavings, setDataSavings] = useState<any>([]);
  const [dataSavingsCompleted, setDataSavingsCompleted] = useState<any>([]);
  const [dataMessages, setDataMessages] = useState<any>([]);

  require("dayjs/locale/sv");

  const getSavings = async () => {
    try {
      const json = await GetAllSavingsById();
      setDataSavings(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getSavingsCompleted = async () => {
    try {
      const json = await GetAllCompletedSavingsById();
      setDataSavingsCompleted(json);
    } catch (error) {
      console.error(error);
    } finally {
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

  function display() {
    return dataSavings.map((item: any) => {
      function thousands_separators(item: any) {
        var num_parts = item.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return num_parts.join(".");
      }

      const number = thousands_separators(item.amount);
      const date = item.enddate.substring(1, item.enddate.length - 1);

      const newDateSV = dayjs(date).locale("sv").format("dddd DD MMMM YYYY");
      const newDate = newDateSV.charAt(0).toUpperCase() + newDateSV.slice(1);

      const onSubmit4 = () => {
        setTimeout(() => {
          navigation.navigate("Sparmål", {
            number: number,
            newDate: newDate,
            id: item.id,
          });
        }, 300);
      };

      return (
        <TouchableOpacity key={item.id} onPress={onSubmit4}>
          <Animatable.View
            style={style.savings}
            animation="zoomIn"
            duration={1800}
          >
            <Text style={style.savings_amount}>{number} kr</Text>
            <Text style={style.savings_enddate}>{newDate}</Text>
          </Animatable.View>
        </TouchableOpacity>
      );
    });
  }

  function display3() {
    return dataSavingsCompleted.map((item: any) => {
      function thousands_separators(item: any) {
        var num_parts = item.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return num_parts.join(".");
      }

      const number = thousands_separators(item.amount);
      const date = item.enddate.substring(1, item.enddate.length - 1);

      const newDate = dayjs(date).locale("sv").format("dddd DD MMMM YYYY");
      const newDate2 = newDate.charAt(0).toUpperCase() + newDate.slice(1);

      return (
        <View key={item.id}>
        <Animatable.View
          style={style.savings_completed}
          animation="zoomIn"
          duration={1800}
        >
          <Entypo
            name="trophy"
            size={40}
            style={{
              marginBottom: 10,
              shadowOpacity: 0.15,
              shadowRadius: 2,
              shadowOffset: {
                height: 2,
                width: 1,
              },
            }}
            color="#f0c80e"
          />
          <Text style={style.savings_amount_completed}>{number} kr</Text>

          <Text style={style.savings_enddate_completed}>{newDate2}</Text>
        </Animatable.View>
        </View>
      );
    });
  }

  useEffect(() => {
    getSavings();
    getSavingsCompleted();
    getMessages();
  }, []);

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("Borttagna Sparmål");
      setInProcess(false);
    }, 500);
  };

  const onSubmit2 = () => {
    setInProcess2(true);
    setTimeout(() => {
      navigation.navigate("Pengavakten");
      setInProcess(false);
    }, 500);
  };

  const onSubmit3 = () => {
    setInProcess3(true);
    setTimeout(() => {
      navigation.navigate("Hur mycket vill du spara?");
      setInProcess3(false);
    }, 500);
  };

  return (
    <View style={style.container}>
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
        <View style={style.header} />

        <Animatable.View
          style={{...style.footer, minHeight: 560}}
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

          <View style={{...style.action,     flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",}}>
            <View><Text style={{...style.title, marginTop: 3, marginRight: 15}}>Sparmål</Text></View>
            <View><TouchableOpacity onPress={onSubmit3} style={{ ...style.buttonContainerOne, marginBottom: 3, padding: 5 }}>
              {inProcess3 ? (
                  <ActivityIndicator
                    size="small"
                    color="white"
                  />
              ) : (
                  <Text style={style.buttonText}>Nytt Sparmål</Text>
              )}
            </TouchableOpacity></View>
          </View>

          <View>
            <Text style={style.text}>Avklarade Sparmål:</Text>
          </View>

          <View style={{ marginBottom: 10 }}>{display3()}</View>

          <View style={style.action} />

          <View>
            <Text style={style.text}>Aktuella Sparmål:</Text>
          </View>

          <View style={{ marginBottom: 10 }}>{display()}</View>

          <View style={style.action} />

          <View style={styles.savings_button}>
            <TouchableOpacity onPress={onSubmit} style={{ ...style.buttonContainerOne, width: "40%" }}>
              {inProcess ? (
                  <ActivityIndicator
                    size="small"
                    color="white"
                  />
              ) : (
                  <Text style={style.buttonText}>Historik</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit2} style={{ ...style.buttonContainerTwo, width: "50%" }}>
              {inProcess2 ? (
                  <ActivityIndicator
                    size="small"
                    color="#009387"
                  />
              ) : (
                  <Text style={style.buttonText2}>Till Startsidan</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SavingsAllScreen;

const styles = StyleSheet.create({
  savings_button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
