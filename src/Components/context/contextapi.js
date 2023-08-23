'use client';

import { createContext, useContext, useState } from "react";

const ContextApi = createContext({})

export const AppProvider = ({ children }) => {
    const [isfix, setIsFix]= useState(false)

    return (
        <ContextApi.Provider value={{ isfix, setIsFix }}>
            {children}
        </ContextApi.Provider>
    )
};

export const useGlobalContext = () => useContext(ContextApi);

