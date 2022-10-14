import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Title, Drawer } from "react-native-paper";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AuthContext } from "../../auth/Account";
import {
  GetUserById,
  GetAllSavingsById,
  GetAllCompletedSavingsById,
} from "../../helpers/Functions";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import style from "../../components/DrawerContent.module";

export function DrawerContent(props: any) {
  const [data, setData] = useState<any>([]);
  const [data2, setData2] = useState<any>([]);
  const [data3, setData3] = useState<any>([]);

  const { logout } = useContext(AuthContext);

  const getUsers = async () => {
    try {
      const json = await GetUserById();
      setData({ ...json });
      if (json.firstname === undefined) {
        props.navigation.navigate("OnBoardingOne");
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getSavingsActive = async () => {
    try {
      const json = await GetAllSavingsById();
      setData2({ ...json });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const getSavingsCompleted = async () => {
    try {
      const json = await GetAllCompletedSavingsById();
      setData3({ ...json });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getUsers();
    getSavingsActive();
    getSavingsCompleted();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getSavingsActive();
      getSavingsCompleted();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#009387" }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <View style={style.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <DrawerItem
                style={{ marginTop: 5 }}
                onPress={() => {
                  props.navigation.navigate("Pengavakten");
                }}
                icon={() => (
                  <Animatable.Image
                    animation="swing"
                    duration={4000}
                    iterationCount={"infinite"}
                    source={require("../../assets/dragon2.png")}
                    style={style.logo}
                    resizeMode="stretch"
                  />
                )}
                label=""
              />

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "column",
                  position: "relative",
                  top: 3,
                  left: -70,
                }}
              >
                <Title style={style.title}>Pengavakten</Title>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <View>
                  <Text style={styles.paragraph2}>
                    {Object.keys(data3).length}
                  </Text>
                </View>
                <View>
                  <Text style={styles.paragraph}>Avklarade Sparmål</Text>
                </View>
              </View>
              <View style={styles.section}>
                <View>
                  <Text style={styles.paragraph2}>
                    {Object.keys(data2).length}
                  </Text>
                </View>
                <View>
                  <Text style={styles.paragraph}>Aktiva Sparmål</Text>
                </View>
              </View>
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            style={style.drawerItem}
            onPress={() => {
              props.navigation.navigate("Pengavakten");
            }}
            icon={() => (
              <MaterialIcons
                name="home"
                size={25}
                color="#005851"
                style={{
                  marginRight: 0,
                  marginLeft: 5,
                  padding: 0,
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
              />
            )}
            label=""
          />
          <DrawerItem
            style={style.drawerItem}
            onPress={() => {
              props.navigation.navigate("Profil");
            }}
            icon={() => (
              <FontAwesome
                name="user"
                style={{
                  marginRight: 0,
                  marginLeft: 9,
                  padding: 0,
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
                size={25}
                color="#005851"
              />
            )}
            label=""
          />
          <DrawerItem
            style={style.drawerItem}
            onPress={() => {
              props.navigation.navigate("Hur mycket vill du spara?");
            }}
            icon={() => (
              <FontAwesome
                name="money"
                style={{
                  marginRight: 0,
                  marginLeft: 6,
                  padding: 0,
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
                size={25}
                color="#005851"
              />
            )}
            label=""
          />
          <DrawerItem
            style={style.drawerItem}
            onPress={() => {
              props.navigation.navigate("Dina sparmål");
            }}
            icon={() => (
              <MaterialCommunityIcons
                name="account-cash"
                size={25}
                style={{
                  marginRight: 0,
                  marginLeft: 7,
                  padding: 0,
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}
                color="#005851"
              />
            )}
            label=""
          />
        </Drawer.Section>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Pengavakten");
          }}
        >
          <Text style={style.menu1}>Hem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Profil");
          }}
        >
          <Text style={style.menu2}>Din Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Hur mycket vill du spara?");
          }}
        >
          <Text style={style.menu3}>Skapa Sparmål</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Dina sparmål");
          }}
        >
          <Text style={style.menu4}>Dina Sparmål</Text>
        </TouchableOpacity>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            style={style.drawerItem2}
            onPress={() => {
              logout();
            }}
            icon={() => (
              <MaterialIcons
                name="logout"
                size={25}
                color="white"
                style={{
                  marginRight: 2,
                  marginLeft: 5,
                  padding: 0,
                  shadowOpacity: 0.6,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 2,
                    width: 2,
                  },
                }}
              />
            )}
            label=""
          />
        </Drawer.Section>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <Text style={style.menu5}>Logga ut</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  paragraph: {
    fontWeight: "600",
    marginTop: 5,
    fontSize: 12,
    color: "#d4d2d2",
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  paragraph2: {
    fontWeight: "700",
    fontSize: 23,
    color: "#ececec",
    marginRight: 9,
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  paragraphemail: {
    fontWeight: "600",
    marginRight: 3,
    marginTop: -4,
  },
  drawerSection: {
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  bottomDrawerSection: {
    marginBottom: 20,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    backgroundColor: "#009387",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
