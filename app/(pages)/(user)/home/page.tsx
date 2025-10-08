"use client"

import { UserContext } from "@/app/contexts/UserContext"
import { useContext, useEffect } from "react"
import { redirect } from "next/navigation";
import Link from "next/link";

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
        <div className="h-screen bg-white">
            <div className="w-full h-80 bg-slate-100 p-4 text-black">
                <div className="w-[50%] h-full flex flex-col justify-between">
                    <h1 className="text-2xl font-bold pt-4 pb-4">Welcome, {user.first_name} {user.last_name}</h1> 
                    <div>
                        <p>Start exploring</p>
                        <p>Where the world ends, we begin</p>
                    </div>
                    <Link href={"/products"}><button className="bg-orange-400 p-2 px-4 rounded-md shadow-md w-[40%]">Let's go</button></Link>
                </div>
            </div>
        </div>
    )
}