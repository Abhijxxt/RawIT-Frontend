"use client"
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { redirect } from "next/navigation";

export default function Home() {
  
  const {user, setUser} : any = useContext(UserContext);

  useEffect(() => {
    if(Object.keys(user).length === 0) {
      redirect("/login")
    } else {
      redirect("/home")
    }
  }, [])

  return (
    <div className="bg-sky-50 w-screen h-screen flex flex-row justify-center items-center text-2xl text-center">
      Please wait while we are setting things up for you!
    </div>
  );
}
