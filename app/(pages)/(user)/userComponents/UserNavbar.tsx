"use client"
import { UserContext } from "@/app/contexts/UserContext"
import Link from "next/link";
import { useContext } from "react"
import { BsCart2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export default function UserNavBar() {

    const {user} : any = useContext(UserContext)

    return(
        <div className="flex flex-row h-16 justify-around items-center bg-amber-600">
            <div>
                <h1 className="text-2xl font-bold">RawIT</h1>
            </div>
            <div className="flex flex-row items-center rounded-md">
                <input type="text" placeholder="Search products..." className="rounded-l-md text-black outline-none p-1 px-2 bg-slate-100"/>
                <button className="p-1.5 bg-slate-700 rounded-r-md text-xl"><FaSearch /></button>
            </div>
            <div className="flex flex-row gap-4">
                <div>
                    <Link href={"/"} className="px-2">Home</Link>
                    <Link href={"/"}>Account</Link>
                </div>
                <p> | {user?.first_name ?? <Link href={"/login"}>Login</Link>}</p>
                {user?.first_name && <Link href={"/"}><BsCart2 className="text-2xl"/></Link>}
            </div>
        </div>
    )
}