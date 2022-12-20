//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Liskov substitution principle då tex vissa metoder går att byta ut utan att det påverkar componenten.

import { useEffect, useState } from "react";
import { APIRequestShoes } from "../services/APIRequest";

const APIGetAll = APIRequestShoes.allshoes;
const APIGetOne = APIRequestShoes.shoesbyid;

export const GetAllShoes = () => {
  const [allshoes, setAllShoes] = useState<any>([]);
  
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
          setAllShoes(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, []);
  return { allshoes };
}

export const GetOneShoes = (id: any) => {
  const [shoes, setShoes] = useState<any>([]);
  
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
          setShoes(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, [id]);
  return { shoes };
}