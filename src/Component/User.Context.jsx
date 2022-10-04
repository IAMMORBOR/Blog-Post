import { createContext, useState } from "react";

export const UserContext =createContext();

export const UserProvider= ()=>{
    const [User, setUser]=useState('tomi')
    const value= User
    return <UserContext.Provider value={value}>

    </UserContext.Provider>

}