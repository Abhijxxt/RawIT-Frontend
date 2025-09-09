"use client"
import { UserContext } from "@/app/contexts/UserContext"
import { useContext } from "react"

export default function UserNavBar() {

    const {user} : any = useContext(UserContext)

    return(
        <div className="flex flex-row h-14 justify-around items-center bg-blue-200">
            <div>
                RawIT
            </div>
            <div>
                LINKS
            </div>
            <div>
                {user?.first_name ?? "No user"}
            </div>
        </div>
    )
}