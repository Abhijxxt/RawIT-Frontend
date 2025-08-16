"use client"
import { UserContext } from "@/app/contexts/UserContext";
import { useContext } from "react";

export default function UserLayout({children} : Readonly<{children: React.ReactNode;}>) {
    
    const {user} : any = useContext(UserContext)

    console.log(user)

    return (
        <div>
            User layout 
            <p>User: {user?.email ?? "No user yet!"}</p> 
            {children}
        </div>
    )
}