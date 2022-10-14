import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.35;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    shadowOpacity: 1.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
    fontSize: 15,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcbca",
    paddingBottom: 8,
    marginBottom: 15,
  },
  errorText: {
    color: "red",
    marginTop: 0,
    marginBottom: 20,
  },
  footer: {
    flex: 3.5,
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
  textInput: {
    flex: 1,
    marginTop: 2,
    paddingLeft: 15,
    color: "#05375a",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonContainer: {
    backgroundColor: "#02B9AA",
    width: "100%",
    paddingHorizontal: 10,
    padding: 18,
    marginVertical: 25,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  button: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  alreadyMemberContainer: {
    borderColor: "#02B9AA",
    borderWidth: 1,
    backgroundColor: "#ececec",
    width: "100%",
    paddingHorizontal: 10,
    padding: 18,
    marginVertical: 0,
    marginTop: -10,
    borderRadius: 15,
    alignItems: "center",
  },
  alreadyMemberText: {
    fontWeight: "bold",
    color: "#02B9AA",
    fontSize: 15,
  },
});
