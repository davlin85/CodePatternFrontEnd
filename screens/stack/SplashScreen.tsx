import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import style from "../../components/Splash.module";
import { SplashDragonImage } from "../../components/Dragon.module";

const SplashScreen: React.FC = ({ navigation }: any) => {
  const [inProcess, setInProcess] = useState(false);

  const onSubmit = () => {
    setInProcess(true);
    setTimeout(() => {
      navigation.navigate("SignIn");
      setInProcess(false);
    }, 500);
  };

  return (
    <View style={style.container}>
      <View style={styles.header}>{SplashDragonImage()}</View>
      <Animatable.View
        animation="bounceInUp"
        duration={2500}
        style={styles.footer}
      >
        <Text style={styles.title}>Välkommen till Pengavakten!</Text>
        <Text style={styles.header}>Spara pengar till din drömresa!</Text>

        <View style={{ ...style.button, width: "45%", marginLeft: 160 }}>
          <TouchableOpacity onPress={onSubmit} style={style.buttonContainer}>
            {inProcess ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={style.buttonText}>Logga in!</Text>
            )}
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ececec",
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 35,
    shadowOpacity: 0.45,
    shadowRadius: 15,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  buttonContainer: {
    backgroundColor: "#009387",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#009387",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
    marginBottom: 0,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    color: "#05375a",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 15,
    lineHeight: 39,
  },
  button: {
    alignItems: "flex-end",
    marginTop: -10,
  },
});
