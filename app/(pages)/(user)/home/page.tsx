"use client"

import { UserContext } from "@/app/contexts/UserContext"
import { useContext, useEffect } from "react"

export default function HomePage() {
    
    const { user, setUser } : any = useContext(UserContext);

    const getUserDetails = async () => {
        const response = await fetch("/api/getUser");
        if(response.status !== 200) {
            alert("Login failed")
            return;
        }
        const data = await response.json();
        setUser(data)
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div>
            HomePage {user.uid} {user.email}
        </div>
    )
}