"use client"
import { UserContext } from "@/app/contexts/UserContext"
import { useContext, useEffect } from "react"

export default function LoginPage() {
    
    const {user, setUser} : any = useContext(UserContext);

    const loginHandler = (event: any) => {
        event.preventDefault()
        setUser({
            email: event.target[0].value,
            password: event.target[1].value
        })
    }

    useEffect(() => {

    },[])

    return (
        <div>
            Login Page
            <form onSubmit={loginHandler}>
                <input type="email" placeholder="email"/><br/>
                <input type="password" placeholder="*******"/><br/>
                <input type="submit" placeholder="Submit"/><br/>
            </form>
        </div>
    )
}