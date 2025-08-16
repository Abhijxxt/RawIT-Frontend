"use client"

import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [user, setUser] = useState({})
    return(
        <UserContext.Provider value={{user, setUser}}>
          {children}
        </UserContext.Provider>
    )
}