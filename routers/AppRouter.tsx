import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native-animatable";
import { AuthContext } from "../auth/Account";
import RootStack from "../screens/stack/RootStack";
import { ActivityIndicator } from "react-native-paper";
import DrawerNavigation from "../screens/drawer/DrawerNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAssets } from "expo-asset";

export default function AppRouter() {
  const [isloading, setIsLoading] = useState(false);
  const { tokens, setTokens } = useContext(AuthContext);
  const [assets, error] = useAssets([require("../assets/dragon.png")]);

  const appStart = async () => {
    if (tokens.accessToken === undefined) {
      tokens.accessToken = await AsyncStorage.getItem("accessToken");
      tokens.idToken = await AsyncStorage.getItem("idToken");
      tokens.refreshToken = await AsyncStorage.getItem("refreshToken");

      setTokens({ ...tokens });
    }
  };

  appStart();

  useEffect(() => {}, [tokens]);

  if (isloading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#009387",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!tokens.accessToken && <RootStack />}
      {tokens.accessToken && <DrawerNavigation />}
    </NavigationContainer>
  );
}
