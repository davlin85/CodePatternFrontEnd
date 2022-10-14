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
import {
  Get3SavingsById,
  GetUserById,
  GetMessages,
} from "../../../helpers/Functions";
import dayjs from "dayjs";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);
  const [inProcess3, setInProcess3] = useState(false);
  const [dataSavings, setDataSavings] = useState<any>([]);
  const [dataMessages, setDataMessages] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  require("dayjs/locale/sv");

  const getUsers = async () => {
    try {
      const json = await GetUserById();
      setData({ ...json });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getSavings = async () => { 
    try {
      const json = await Get3SavingsById();
      setDataSavings(json);
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

  useEffect(() => {
    getUsers();
    getSavings();
    getMessages();
  }, []);

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("Hur mycket vill du spara?");
      setInProcess(false);
    }, 500);
  };

  const onSubmit2 = () => {
    setInProcess2(true);
    setTimeout(() => {
      navigation.navigate("Dina sparmål");
      setInProcess2(false);
    }, 500);
  };

  const onSubmit3 = () => {
    setInProcess3(true);
    setTimeout(() => {
      navigation.navigate("Profil");
      setInProcess3(false);
    }, 500);
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.header} />

        <Animatable.View
          style={{ ...style.footer, minHeight: 372 }}
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

          <View>
            {DragonImage()}
          </View>

          <View style={style.action}>
            <Text style={style.title}>Hej {data.firstname}!</Text>
          </View>

          <View>
            <Text style={style.text}>
              Här ser du dina 3 mest aktuella sparmål!
            </Text>
          </View>

          <View style={{ marginBottom: 10 }}>{display()}</View>

          <View style={style.action} />
          <View style={styles.savings_button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={{ ...style.buttonContainerOne, width: "45%" }}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Nytt Sparmål</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onSubmit2}
              style={{ ...style.buttonContainerTwo, width: "45%" }}
            >
              {inProcess2 ? (
                <ActivityIndicator size="small" color="#009387" />
              ) : (
                <Text style={style.buttonText2}>Alla Sparmål</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="zoomIn"
          duration={1100}
          style={styles.footer_profile}
        >
          <View style={style.action}>
            <Text style={styles.profile_text}>Inloggad som:</Text>
            <Text style={styles.profile_title}>{data.email}</Text>
          </View>
          <View style={styles.savings_button_profile}>
            <TouchableOpacity
              onPress={onSubmit3}
              style={{ ...style.buttonContainerOne, width: "45%" }}
            >
              {inProcess3 ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={style.buttonText}>Din Profil</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  savings_button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  savings_button_profile: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  footer_profile: {
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#ececec",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 25,
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  profile_title: {
    color: "#05375a",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    lineHeight: 40,
  },
  profile_text: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0b9497",
    marginBottom: -5,
  },
});
