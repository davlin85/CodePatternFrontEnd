import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./rootstack/signin/SignInScreen";
import SignUpScreen from "./rootstack/signup/SignUpScreen";
import SignUpConfirmationCodeScreen from "./rootstack/signup/SignUpConfirmationCodeScreen";

const Root = createNativeStackNavigator();

const RootStack: React.FC = () => (
  <Root.Navigator screenOptions={{ headerShown: false }}>
    <Root.Screen name="Splash" component={SplashScreen} />
    <Root.Screen name="SignIn" component={SignInScreen} />
    <Root.Screen name="SignUp" component={SignUpScreen} />
    <Root.Screen
      name="SignUpConfirmationCode"
      component={SignUpConfirmationCodeScreen}
    />
  </Root.Navigator>
);

export default RootStack;
