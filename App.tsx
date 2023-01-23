import React from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { AuthContextProvider } from "./auth/Account";
import AppRouter from "./routers/AppRouter";
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    //TEst RTtetetetettete
    <AuthContextProvider>
      <NativeBaseProvider>
      <AppRouter />
      </NativeBaseProvider>
    </AuthContextProvider>
  );
}
