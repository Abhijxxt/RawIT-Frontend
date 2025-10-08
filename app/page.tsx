"use client"
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { redirect } from "next/navigation";

export default function Home() {
  
  const {user, setUser} : any = useContext(UserContext);

  const getUserDetails = async () => {
        const response = await fetch("/api/getUser");
        if(response.status !== 200) {
            redirect("/login")
        }
        const data = await response.json();
        setUser(data)
        redirect("/home")
    }

    useEffect(() => {
        getUserDetails();
    }, [])

  return (
    <div className="bg-sky-50 text-black w-screen h-screen flex flex-row justify-center items-center text-2xl text-center">
      Please wait while we are setting things up for you!
    </div>
  );
}
