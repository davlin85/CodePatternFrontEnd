import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.08;

export default StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 0,
    backgroundColor: "#009387",
    marginBottom: -5,
  },
  logo: {
    marginLeft: 5,
    width: height_logo,
    height: height_logo,
    shadowOpacity: 1.2,
    shadowRadius: 1.5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    fontSize: 25,
    marginTop: 0,
    left: -20,
    fontWeight: "700",
    color: "#f5f5f5",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    padding: 20,
  },
  drawerItem: {
    marginTop: 10,
    padding: 1,
    marginBottom: 10,
    backgroundColor: "#ececec",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  drawerItem2: {
    backgroundColor: "#005851",
    marginLeft: 20,
    marginRight: 20,
    padding: 1,
    marginTop: 175,
    marginBottom: 10,
    borderRadius: 10,
  },
  menu1: {
    color: "#005851",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 0,
    flexDirection: "column",
    position: "relative",
    top: -237,
    left: 85,
    shadowOpacity: 0.15,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  menu2: {
    color: "#005851",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 0,
    flexDirection: "column",
    position: "relative",
    top: -189,
    left: 85,
    shadowOpacity: 0.15,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  menu3: {
    color: "#005851",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 0,
    flexDirection: "column",
    position: "relative",
    top: -142,
    left: 85,
    shadowOpacity: 0.15,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  menu4: {
    color: "#005851",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 0,
    flexDirection: "column",
    position: "relative",
    top: -95,
    left: 85,
    shadowOpacity: 0.15,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  menu5: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 0,
    flexDirection: "column",
    position: "relative",
    top: -48,
    left: 85,
    shadowOpacity: 0.15,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
