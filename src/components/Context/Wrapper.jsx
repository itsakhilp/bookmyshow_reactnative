import React, { createContext, useState } from "react";

export const Store = createContext();
export const TheaterSeats = createContext();

export const Wrapper = ({ children }) => {
  const [data, setData] = useState();
  const [ seatsArray, setSeatsArray] = useState([])
  return (
    <Store.Provider value={{ data, setData }}>
      <TheaterSeats.Provider value={{seatsArray, setSeatsArray}}>{children}</TheaterSeats.Provider>
    </Store.Provider>
  );
};
