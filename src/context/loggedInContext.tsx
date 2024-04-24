"use client";
import React from 'react';
import { createContext } from 'react';

type userLoggedInContextType = {
    isLoggedIn: boolean;
    setLoggedin: (status: boolean) => void;
}

const LoggedInContext = createContext<userLoggedInContextType>({
    isLoggedIn: false,
    setLoggedin: () => {}
});

export function LoggedInProvider({ children } : {
    children: React.ReactNode;
}) {
    const [isLoggedIn, setLoggedin] = React.useState(false);
    
    return (
        <LoggedInContext.Provider value={{isLoggedIn, setLoggedin}}>
            {children}
        </LoggedInContext.Provider>
    );
}

export function useLoggedInContext() {
    return React.useContext(LoggedInContext);
}