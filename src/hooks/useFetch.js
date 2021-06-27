import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const FetchContext = createContext({});

export const FetchProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        axios
            .get("https://warren-transactions-api.herokuapp.com/api/transactions")
            .then((response) => setTransactions(response.data));
    }, [])

    return (
        <FetchContext.Provider
            value={{
                transactions,
            }}
            >
            {children}
    </FetchContext.Provider>
    )
}

const useFetch = () => {
    const fetchContext = useContext(FetchContext);
    if (!fetchContext) {
      throw new Error("FetchContext deve ser utilizado dentro de FetchProvider");
    }
    return fetchContext;
  };

export default useFetch;

