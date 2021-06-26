import React from 'react'
import { createContext, useCallback, useContext, useState } from "react";
import axios from 'axios'

const FetchContext = createContext({});

export const FetchProvider = ({ children }) => {
    const [transactions, setTransactions] = useState()

    const getTransactions = useCallback(async () => {
        axios
        .get('https://warren-transactions-api.herokuapp.com/api/transactions')
        .then((response) => setTransactions(response.data))
    },[])

    return (
        <FetchContext.Provider
            value={{
                transactions,
                getTransactions
            }}
            >
            {children}
    </FetchContext.Provider>
    )
}

export const useFetch = () => {
    const fetchContext = useContext(FetchContext);
    if (!fetchContext) {
      throw new Error("FetchContext deve ser utilizado dentro de FetchProvider");
    }
    return fetchContext;
  };

export default useFetch

