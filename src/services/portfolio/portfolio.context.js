import React, { useState, createContext } from "react";

export const PortfolioContext = createContext();

export function PortfolioContextProvider({ children }) {
  const [portfolio, setPortfolio] = useState([]);

  const add = (token) => {
    setPortfolio([...portfolio, token]);
  };

  //   const remove = (token) => {
  //       const newPortfolio = portfolio.filter()
  //   }

  return (
    <PortfolioContext.Provider value={{ portfolio, addToPortfolio: add }}>
      {children}
    </PortfolioContext.Provider>
  );
}
