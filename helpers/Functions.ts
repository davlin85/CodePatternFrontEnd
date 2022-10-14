import AsyncStorage from "@react-native-async-storage/async-storage";
import refreshToken from "../auth/RefreshToken";

export const GetIdToken = async () => {
  let idToken = await AsyncStorage.getItem("idToken");
  let idTokenExpire = await AsyncStorage.getItem("idTokenExpire");

  var today = Date.now();

  let idTokenExpireDate = Number(idTokenExpire) * 1000;
  let idTokenTimeLeft = idTokenExpireDate - Number(today);

  if (idToken === null) throw Error("No accesstoken available");
  if (Number(idTokenTimeLeft) > 300000) return idToken;

  let rT = await AsyncStorage.getItem("refreshToken");
  let id = await AsyncStorage.getItem("id");

  if (rT === null || id === null) throw new Error("No tokens available");

  return refreshToken(rT, id);
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("id");
    if (value !== null) {
      return value;
    }
    return "";
  } catch (error) {

  }
};

export const GetUserById = async () => {
  const id = await retrieveData();
  const idToken = await GetIdToken();
  const url = `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/user/get?id=${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
  });
  const json = await response.json();
  return json;
};

export const Get3SavingsById = async () => {
  const id = await retrieveData();
  const idToken = await GetIdToken();
  const url = `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savings/?userid=${id}&status=active&amount=3`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
  });
  const json = await response.json();
  return json;
};

export const GetAllSavingsById = async () => {
  const id = await retrieveData();
  const idToken = await GetIdToken();
  const url = `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savings/?userid=${id}&status=active`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
  });
  const json = await response.json();
  return json;
};

export const GetAllCanceledSavingsById = async () => {
  const id = await retrieveData();
  const idToken = await GetIdToken();
  const url = `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savings/?userid=${id}&status=canceled`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
  });
  const json = await response.json();
  return json;
};

export const GetAllCompletedSavingsById = async () => {
  const id = await retrieveData();
  const idToken = await GetIdToken();
  const url = `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savings/?userid=${id}&status=completed`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
  });
  const json = await response.json();
  return json;
};

export const GetMessages = async () => {
  const idToken = await GetIdToken();
  const url = `https://d68oc2bdf3.execute-api.eu-north-1.amazonaws.com/Test/pengavakten/savingtip/random`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
  });
  const json = await response.json();
  return json;
};

