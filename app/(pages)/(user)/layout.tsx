"use client"
import UserNavBar from "./userComponents/UserNavbar";

export default function UserLayout({children} : Readonly<{children: React.ReactNode;}>) {

    return (
        <div>
            <UserNavBar /> 
            {children}
        </div>
    )
}