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
  GetUserById,
  GetMessages,
  GetAllCompletedSavingsById,
  GetAllCanceledSavingsById,
  GetAllSavingsById,
} from "../../../helpers/Functions";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";

const ProfileScreen: React.FC = ({ navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);
  const [data, setData] = useState<any>([]);
  const [data2, setData2] = useState<any>([]);
  const [data3, setData3] = useState<any>([]);
  const [data4, setData4] = useState<any>([]);
  const [dataMessages, setDataMessages] = useState<any>([]);

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

  const getSavingsCompleted = async () => {
    try {
      const json = await GetAllCompletedSavingsById();
      setData2({ ...json });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getSavings = async () => {
    try {
      const json = await GetAllSavingsById();
      setData4({ ...json });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getSavingsCanceled = async () => {
    try {
      const json = await GetAllCanceledSavingsById();
      setData3({ ...json });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getUsers();
    getMessages();
    getSavings();
    getSavingsCompleted();
    getSavingsCanceled();
  }, []);

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("Pengavakten");
      setInProcess(false);
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
            <Text style={style.title}>
              {data.firstname} {data.lastname}
            </Text>
          </View>

          <View style={styles.profile}>
            <View style={styles.savings}>
              <Text style={styles.profile_text}>Avklarade Sparmål:</Text>
              <Text style={styles.profile_savings}>
                {Object.keys(data2).length}
              </Text>
            </View>

            <View style={styles.savings}>
              <Text style={styles.profile_text}>Aktiva Sparmål:</Text>
              <Text style={styles.profile_savings}>
                {Object.keys(data4).length}
              </Text>
            </View>

            <View style={styles.savings}>
              <Text style={styles.profile_text}>Borttagna Sparmål:</Text>
              <Text style={styles.profile_savings}>
                {Object.keys(data3).length}
              </Text>
            </View>

            <View style={styles.savings2}>
              <Text style={styles.profile_text3}>
                Du är inloggad med konto:
              </Text>
              <Text style={styles.profile_text2}>{data.email}</Text>
            </View>
          </View>

          <View style={style.action} />
          <View style={styles.savings_button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={{ ...style.buttonContainerTwo, width: "45%" }}
            >
              {inProcess ? (
                <ActivityIndicator size="small" color="#009387" />
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

export default ProfileScreen;

const styles = StyleSheet.create({
  savings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginVertical: 7,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  savings2: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#bedbd9",
    padding: 12,
    borderRadius: 10,
    marginVertical: 7,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  savings_amount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3e4459",
    marginRight: 0,
  },
  savings_enddate: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0b9497",
  },
  savings_button: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  profile_savings: {
    fontSize: 19,
    fontWeight: "bold",
  },
  profile_text: {
    color: "#05375a",
    fontSize: 14,
    fontWeight: "400",
  },
  profile_text2: {
    color: "#0b9497",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 3,
  },
  profile_text3: {
    color: "#3e4459",
    fontSize: 14,
    fontWeight: "400",
  },
  profile: {
    marginBottom: 15,
  },
});
