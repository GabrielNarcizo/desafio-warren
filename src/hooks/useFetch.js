import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from 'axios'

const FetchContext = createContext({});

export const FetchProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [current, setCurrent] = useState({});

    useEffect(() => {
        axios
            .get("https://warren-transactions-api.herokuapp.com/api/transactions")
            .then((response) => setTransactions(response.data));
    }, [])

    const setCurrentContext = useCallback((current) => {
        setCurrent(current);
      }, []);

    
    const searchTitle = transactions.filter((value) => {
        if(search === ""){
            return value
        } else if (value.title.toLowerCase().includes(search.toLowerCase())){
            return value
        } else {
            return null
        }
    });

    const selectOption = transactions.filter((value) => {
        if(value.status.includes(select)){
            return value
        } else if (select === ""){
            return value
        } else {
            return null
        }
    });

    return (
        <FetchContext.Provider
            value={{
                transactions,
                searchTitle,
                search,
                setSelect,
                setSearch,
                selectOption,
                setIsModalVisible,
                isModalVisible,
                current,
                setCurrentContext
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

