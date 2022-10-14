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
  GetAllCanceledSavingsById,
  GetMessages,
} from "../../../helpers/Functions";
import dayjs from "dayjs";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";

const SavingsCanceledScreen: React.FC = ({ navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);
  const [dataSavingsCanceled, setDataSavingsCanceled] = useState<any>([]);
  const [dataMessages, setDataMessages] = useState<any>([]);

  require("dayjs/locale/sv");

  const getSavingsCanceled = async () => {
    try {
      const json = await GetAllCanceledSavingsById();
      setDataSavingsCanceled(json);
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

  function display2() {
    return dataSavingsCanceled.map((item: any) => {
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
          style={style.savings_canceled}
          animation="zoomIn"
          duration={1800}
        >
          <Text style={styles.savings_amount}>{number} kr</Text>

          <Text style={styles.savings_enddate_canceled}>{newDate2}</Text>
        </Animatable.View>
        </View>
      );
    });
  }

  useEffect(() => {
    getSavingsCanceled();
    getMessages();
  }, []);

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("Dina sparmål");
      setInProcess(false);
    }, 500);
  };

  return (
    <View style={style.container}>
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
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
            <Text style={style.title}>Sparmål</Text>
          </View>

          <View>
            <Text style={style.text}>Borttagna Sparmål:</Text>
          </View>

          <View style={{ marginBottom: 10 }}>{display2()}</View>

          <View style={style.action} />

          <View style={styles.savings_button}>
            <TouchableOpacity onPress={onSubmit} style={{ ...style.buttonContainerTwo, width: "45%" }}>
              {inProcess ? (
                  <ActivityIndicator
                    size="small"
                    color="#009387"
                  />
  
              ) : (

                  <Text style={style.buttonText2}>Tillbaka</Text>
      
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SavingsCanceledScreen;

const styles = StyleSheet.create({
  savings: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    padding: 10,
    paddingTop: 15,
    marginVertical: 0,
  },
  shadow: {
    shadowOpacity: 0.15,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  savings_amount: {
    fontSize: 17,
    fontWeight: "700",
    color: "#3e4459",
    marginRight: 0,
  },
  savings_enddate_canceled: {
    fontSize: 13,
    fontWeight: "700",
    color: "#a11d31",
  },
  savings_button: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});
