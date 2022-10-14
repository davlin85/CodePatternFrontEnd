import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingOneScreen from "../drawer/onboarding/OnBoardingOneScreen";
import OnBoardingTwoScreen from "../drawer/onboarding/OnBoardingTwoScreen";
import OnBoardingThreeScreen from "../drawer/onboarding/OnBoardingThreeScreen";
import OnBoardingFourScreen from "../drawer/onboarding/OnBoardingFourScreen";
import OnBoardingFiveScreen from "../drawer/onboarding/OnBoardingFiveScreen";
import OnBoardingSixScreen from "../drawer/onboarding/OnBoardingSixScreen";
import OnBoardingSevenScreen from "../drawer/onboarding/OnBoardingSevenScreen";
import OnBoardingEightScreen from "../drawer/onboarding/OnBoardingEightScreen";
import OnBoardingSuccessScreen from "../drawer/onboarding/OnBoardingSuccessScreen";

const OnBoarding = createNativeStackNavigator();

const OnBoardingStack: React.FC = () => (
  <OnBoarding.Navigator screenOptions={{ headerShown: false }}>
    <OnBoarding.Screen name="OnBoardingOne" component={OnBoardingOneScreen} />
    <OnBoarding.Screen name="OnBoardingTwo" component={OnBoardingTwoScreen} />
    <OnBoarding.Screen
      name="OnBoardingThree"
      component={OnBoardingThreeScreen}
    />
    <OnBoarding.Screen name="OnBoardingFour" component={OnBoardingFourScreen} />
    <OnBoarding.Screen name="OnBoardingFive" component={OnBoardingFiveScreen} />
    <OnBoarding.Screen name="OnBoardingSix" component={OnBoardingSixScreen} />
    <OnBoarding.Screen
      name="OnBoardingSeven"
      component={OnBoardingSevenScreen}
    />
    <OnBoarding.Screen
      name="OnBoardingEight"
      component={OnBoardingEightScreen}
    />
    <OnBoarding.Screen
      name="OnBoardingSuccess"
      component={OnBoardingSuccessScreen}
    />
  </OnBoarding.Navigator>
);

export default OnBoardingStack;
