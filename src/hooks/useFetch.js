import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const FetchContext = createContext({});

export const FetchProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")

    useEffect(() => {
        axios
            .get("https://warren-transactions-api.herokuapp.com/api/transactions")
            .then((response) => setTransactions(response.data));
    }, [])

    const searchTitle = transactions.filter((value) => {
        if(search === ""){
            return value
        } else if (value.title){
            return value
        } else {
            return alert("digite um título válido")
        }
    });

    return (
        <FetchContext.Provider
            value={{
                transactions,
                searchTitle,
                search,
                setSelect
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

