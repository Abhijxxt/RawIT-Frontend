"use client"

import { UserContext } from "@/app/contexts/UserContext"
import { useContext, useEffect } from "react"
import { redirect } from "next/navigation";

export default function HomePage() {
    
    const { user, setUser } : any = useContext(UserContext);

    const getUserDetails = async () => {
        const response = await fetch("/api/getUser");
        if(response.status !== 200) {
            alert("Login failed")
            redirect("/login")
        }
        const data = await response.json();
        setUser(data)
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div>
            HomePage {user.first_name} {user.last_name}
        </div>
    )
}