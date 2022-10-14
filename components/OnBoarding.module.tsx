import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
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
  footer: {
    flex: 2.5,
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
  errorText: {
    color: "red",
    marginTop: 0,
    marginBottom: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcbca",
    paddingBottom: 8,
    marginBottom: 15,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 5,
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
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  textInput: {
    flex: 1,
    marginTop: 2,
    paddingLeft: 15,
    color: "#05375a",
    fontSize: 15,
    fontWeight: "500",
  },
  title: {
    color: "#05375a",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15,
    lineHeight: 40,
  },
});
