"use client"
import { UserContext } from "@/app/contexts/UserContext"
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react"

export default function LoginPage() {
    
    const {user, setUser} : any = useContext(UserContext);

    const loginHandler = async (event: any) => {
        event.preventDefault()
        const email = event.target[0].value;
        const password = event.target[1].value;
        if(email === "" || password === "") {
            alert("Please enter correct credentials")
            return;
        }
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                email: event.target[0].value,
                password: event.target[1].value    
            })
        })
        if(response.status === 200) {
            // const token = await response.json();
            // const lr = await fetch("/api/getUser")
            // if(lr.status !== 200) {
            //     alert("Error")
            //     return;
            // }
            // const data = await lr.json();
            // setUser(data);
            redirect("/home")
        } else {
            const data = await response.json();
            alert("Login failed: " + data.error)
        }
    }

    useEffect(() => {

    },[])

    return (
        <div className="h-[92vh] bg-slate-50 flex justify-center items-center">
            <form onSubmit={loginHandler}>
                <input type="email" placeholder="email" className="p-2 m-1 border-2 border-blue-700 rounded-md"/><br/>
                <input type="password" placeholder="*******" className="p-2 m-1 border-2 border-blue-700 rounded-md"/><br/>
                <input type="submit" placeholder="Submit" className="p-2 m-1 bg-blue-400 rounded-md shadow-md
                transition-all hover:shadow-none"/><br/>
                <Link href={"/signup"} className="m-2 text-blue-600 underline">Create account</Link>
            </form>
        </div>
    )
}