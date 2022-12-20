//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Liskov substitution principle då tex vissa metoder går att byta ut utan att det påverkar componenten.

import { useEffect, useState } from "react";
import { APIRequestJeans } from "../services/APIRequest";

const APIGetAll = APIRequestJeans.alljeans;
const APIGetOne = APIRequestJeans.jeansbyid;

export const GetAllJeans = () => {
  const [alljeans, setAllJeans] = useState<any>([]);
  
  useEffect(() => {
    const getJackets = async () => {
      const url = `${APIGetAll}`;

      await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setAllJeans(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, []);
  return { alljeans };
}

export const GetOneJeans = (id: any) => {
  const [jeans, setJeans] = useState<any>([]);
  
  useEffect(() => {
    const getJackets = async () => {
      const url = `${APIGetOne}${id}`;

      await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setJeans(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, [id]);
  return { jeans };
}