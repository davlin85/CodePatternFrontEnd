import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.17;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    paddingTop: 65,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  footer: {
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 20,
    backgroundColor: "#ececec",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 25,
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  logo: {
    width: height_logo,
    height: height_logo,
    position: "absolute",
    top: -100,
    left: 195,
    shadowOpacity: 1.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  message: {
    position: "absolute",
    top: -130,
    left: -110,
    backgroundColor: "#eddc8c",
    padding: 10,
    marginLeft: 120,
    borderRadius: 20,
    marginTop: 5,
    marginRight: 0,
    width: 210,
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#eddc8c",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#009387",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,

  },
  text_message: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    padding: 2,
  },
  action: {
    borderBottomWidth: 1,
    borderBottomColor: "#cfcbca",
    marginBottom: 15,
  },
  title: {
    color: "#05375a",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    lineHeight: 40,
  },
  text: {
    color: "#05375a",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10,
  },
  buttonContainerOne: {
    backgroundColor: "#02B9AA",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#02B9AA",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 0,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  buttonContainerTwo: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#009387",
    paddingHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 0,
  },
  buttonContainerThree: {
    backgroundColor: "#e36580",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#e36580",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 0,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  buttonText: {
    fontWeight: "600",
    color: "white",
    fontSize: 13,
  },
  buttonText2: {
    fontWeight: "600",
    color: "#009387",
    fontSize: 13,
  },
  savings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#bedbd9",
    padding: 12,
    borderRadius: 10,
    marginVertical: 7,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  savings_amount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3e4459",
    marginRight: 0,
  },
  savings_enddate: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0b9497",
  },
  savings_completed: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#a1b8c7",
    padding: 12,
    borderRadius: 10,
    marginVertical: 7,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  savings_amount_completed: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3e4459",
    marginRight: 0,
  },
  savings_enddate_completed: {
    fontSize: 14,
    fontWeight: "700",
    color: "#155a8c",
    marginTop: 5,
    marginBottom: 2,
  },
  savings_canceled: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8d0d5",
    padding: 12,
    borderRadius: 10,
    marginVertical: 7,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  savings_enddate_canceled: {
    fontSize: 13,
    fontWeight: "700",
    color: "#a11d31",
  },
});
