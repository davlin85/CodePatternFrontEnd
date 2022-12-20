//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Liskov substitution principle då tex vissa metoder går att byta ut utan att det påverkar componenten.

import { useEffect, useState } from "react";
import { APIRequestWatches } from "../services/APIRequest";

const APIGetAll = APIRequestWatches.allswatches;
const APIGetOne = APIRequestWatches.watchbyid;

export const GetAllWatches = () => {
  const [allwatches, setAllWatches] = useState<any>([]);
  
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
          setAllWatches(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, []);
  return { allwatches };
}

export const GetOneWatch = (id: any) => {
  const [watch, setWatch] = useState<any>([]);
  
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
          setWatch(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getJackets();
  }, [id]);
  return { watch };
}
