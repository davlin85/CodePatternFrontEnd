import * as Animatable from "react-native-animatable";
import style from "../components/App.module.";
import styles from "../components/Splash.module";
import React from "react";

export function DragonImage() {
  return (
    <Animatable.Image
      animation="bounce"
      duration={4000}
      iterationCount={"infinite"}
      source={require("../assets/dragon.png")}
      style={style.logo}
      resizeMode="stretch"
    />
  );
}

export function SplashDragonImage() {
  return (
    <Animatable.Image
      animation="zoomIn"
      duration={3000}
      source={require("../assets/dragon.png")}
      style={styles.logo}
      resizeMode="stretch"
    />
  );
}
