//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Liskov substitution principle då tex vissa metoder går att byta ut utan att det påverkar componenten.

import { useEffect, useState } from "react";
import { APIRequestJackets } from "../services/APIRequest";

const APIGetAll = APIRequestJackets.alljackets;
const APIGetOne = APIRequestJackets.jacketsbyid;

export const GetAllJackets = () => {
  const [alljackets, setAllJackets] = useState<any>([]);
  
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
          setAllJackets(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, []);
  return { alljackets };
}

export const GetOneJacket = (id: any) => {
  const [jacket, setJacket] = useState<any>([]);
  
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
          setJacket(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, [id]);
  return { jacket };
}