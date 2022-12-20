//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from 'react'
import { Components } from "../../types/Types";

export const ViewCard = (props: Components) => {
  return <div className="viewCard">{props.children}</div>;
};