'use client';

import { createContext, useContext, useState } from "react";
import { client } from "../../../sanity/lib/client";

const ContextApi = createContext({})

export const AppProvider = ({ children }) => {
    const [location, setLocation] = useState('')
    const [budget, setBudget] = useState('')
    const [type, setType] = useState('')
    const [properties, setProperties] = useState()


    // const query = await client.fetch(`*[_type == "listings"]`)
    // setProperties(query)
    

    return (
        <ContextApi.Provider value={{ location, setLocation, budget, setBudget, type, setType, properties, setProperties, }}>
            {children}
        </ContextApi.Provider>
    )
};

export const useGlobalContext = () => useContext(ContextApi);

