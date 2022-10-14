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
  GetIdToken,
  GetUserById,
  GetMessages,
} from "../../../helpers/Functions";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";

const SavingsDetailsScreen: React.FC = ({ route, navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);
  const [data, setData] = useState<any>([]);
  const [dataMessages, setDataMessages] = useState<any>([]);

  const { number } = route.params;
  const { newDate } = route.params;
  const { id } = route.params;

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

  const getUsers = async () => {
    try {
      const json = await GetUserById();
      setData({ ...json });
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

  useEffect(() => {
    getUsers();
    getMessages();
  }, []);

  const onSubmit = async () => {
    let userid = await retrieveData();

    const post = {
      userid,
      id,
    };
    let accessToken = await GetIdToken();
    fetch(
      `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savings/cancel`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(post),
      }
    ).then(() => {
      setInProcess(true);
      setTimeout(() => {
        navigation.navigate("Pengavakten");
        setInProcess(false);
      }, 500);
    });
  };

  const onSubmit2 = () => {
    setInProcess2(true);
    setTimeout(() => {
      navigation.goBack();
      setInProcess2(false);
    }, 500);
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
            <Text style={style.title}>Du sparar {number} kr</Text>
          </View>

          <View>
            <Text style={style.text}>Ditt sparmål är satt till:</Text>
            <Text style={styles.savings_enddate}>{newDate}</Text>
          </View>

          <View style={style.action} />
          <View style={styles.savings_button}>
          <TouchableOpacity onPress={onSubmit2} style={{ ...style.buttonContainerTwo, width: "45%" }}>
              {inProcess2 ? (
                  <ActivityIndicator
                    size="small"
                    color="#009387"
                  />
              ) : (
    
                  <Text style={style.buttonText2}>Tillbaka</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit} style={{ ...style.buttonContainerThree, width: "45%" }}>
              {inProcess ? (
                  <ActivityIndicator
                    size="small"
                    color="white"
                  />
              ) : (

                  <Text style={style.buttonText}>Ta bort Sparmål</Text>

              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SavingsDetailsScreen;

const styles = StyleSheet.create({
  savings_enddate: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0b9497",
    marginBottom: 15,
    marginTop: 0,
  },
  savings_button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
