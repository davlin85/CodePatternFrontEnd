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
import { Slider, Box, Stack } from "native-base";
import style from "../../../components/App.module.";
import { DragonImage } from "../../../components/Dragon.module";
import { GetMessages } from "../../../helpers/Functions";

const SavingsScreen: React.FC = ({ navigation }: any) => {
  const [amount, setAmount] = useState(5000);
  const [inProcess, setInProcess] = useState(false);
  const [inProcess2, setInProcess2] = useState(false);
  const [dataMessages, setDataMessages] = useState<any>([]);

  function thousands_separators(num: any) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(".");
  }

  const number = thousands_separators(amount);

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
    getMessages();
  }, []);

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.goBack();
      setInProcess(false);
    }, 500);
  };

  const onSubmit2 = () => {
    setInProcess2(true);
    setTimeout(() => {
      navigation.navigate("Hur länge vill du spara?", { amount: amount });
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
            <Text style={style.title}>Sparmål!</Text>
          </View>

          <View>
            <Text style={style.text}>
              Dra i slidern för att bestämma ditt sparmål!
            </Text>
          </View>

          <Box alignItems="center" w="100%">
            <Stack
              space={4}
              alignItems="center"
              w="90%"
              maxW="300"
              marginBottom={12}
              marginTop={5}
            >
              <Text style={styles.savings_text}>{number} kr</Text>
              <Slider
                size="lg"
                step={100}
                maxValue={10000}
                colorScheme="coolGray"
                minValue={100}
                defaultValue={5000}
                onChange={(v) => {
                  setAmount(Math.floor(v));
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            </Stack>
          </Box>

          <View style={style.action} />
          <View style={styles.savings_button}>
            <TouchableOpacity onPress={onSubmit} style={{ ...style.buttonContainerThree, width: "30%" }}>
              {inProcess ? (
    
                  <ActivityIndicator
                    size="small"
                    color="white"
                  />

              ) : (
       
                  <Text style={style.buttonText}>Avbryt</Text>
       
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit2} style={{ ...style.buttonContainerOne, width: "60%" }}>
              {inProcess2 ? (

                  <ActivityIndicator
                    size="small"
                    color="white"
                  />

              ) : (

                  <Text style={style.buttonText}>Hur länge vill du spara?</Text>

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
  savings_text: {
    fontSize: 35,
    fontWeight: "800",
    marginBottom: 20,
    color: "#006e65",
  },
  savings_button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
