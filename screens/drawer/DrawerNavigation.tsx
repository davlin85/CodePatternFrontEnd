import React from "react";
import HomeScreen from "./home/HomeScreen";
import ProfileScreen from "./profile/ProfileScreen";
import SavingsAmountScreen from "./savings/SavingsAmountScreen";
import OnBoardingOneScreen from "./onboarding/OnBoardingOneScreen";
import OnBoardingTwoScreen from "./onboarding/OnBoardingTwoScreen";
import OnBoardingThreeScreen from "./onboarding/OnBoardingThreeScreen";
import OnBoardingFourScreen from "./onboarding/OnBoardingFourScreen";
import OnBoardingFiveScreen from "./onboarding/OnBoardingFiveScreen";
import OnBoardingSixScreen from "./onboarding/OnBoardingSixScreen";
import OnBoardingSevenScreen from "./onboarding/OnBoardingSevenScreen";
import OnBoardingEightScreen from "./onboarding/OnBoardingEightScreen";
import OnBoardingSuccessScreen from "./onboarding/OnBoardingSuccessScreen";
import SavingsTimeScreen from "./savings/SavingsTimeScreen";
import SavingsAllScreen from "./savings/SavingsAllScreen";
import SavingsDetailsScreen from "./savings/SavingsDetailsScreen";
import SavingsCanceledScreen from "./savings/SavingsCanceledScreen";

import { DrawerContent } from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} options={{ unmountOnBlur: true }} />}
    backBehavior="history"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: "#ececec",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      drawerActiveBackgroundColor: "white",
    }}
  >
    <Drawer.Screen
      name="Pengavakten"
      component={HomeScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="Profil"
      component={ProfileScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="Hur mycket vill du spara?"
      component={SavingsAmountScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="Hur länge vill du spara?"
      component={SavingsTimeScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="Dina sparmål"
      component={SavingsAllScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="Sparmål"
      component={SavingsDetailsScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="Borttagna Sparmål"
      component={SavingsCanceledScreen}
      options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
      name="OnBoardingOne"
      component={OnBoardingOneScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingTwo"
      component={OnBoardingTwoScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingThree"
      component={OnBoardingThreeScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingFour"
      component={OnBoardingFourScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingFive"
      component={OnBoardingFiveScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingSix"
      component={OnBoardingSixScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingSeven"
      component={OnBoardingSevenScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingEight"
      component={OnBoardingEightScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
    <Drawer.Screen
      name="OnBoardingSuccess"
      component={OnBoardingSuccessScreen}
      options={{ headerShown: false, swipeEnabled: false }}
    />
  </Drawer.Navigator>
);


export default DrawerNavigation;
