import React, { useContext } from "react";

// This is essentially a way to implement a global state variable for data
// so you do not have to manually pass down data through each component in the structure tree
const GlobalContext = React.createContext();

export const GlobalContextProvider = ({children}) => {
    return(
        <GlobalContext.Provider value={'hello'}>
            {children}
        </GlobalContext.Provider>
    )
}

// this function is going to allow us to use the global context
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}