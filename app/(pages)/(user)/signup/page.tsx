"use client"

import { redirect } from "next/navigation";

export default function SignupPage() {
    
    const signupHandler = async (event: any) => {
        event.preventDefault();
        if(event.target[6].value !== event.target[7].value) {
            alert("Passwords do not match");
            event.target[6].value = "";
            event.target[7].value = "";
            return;    
        }
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                first_name: event.target[0].value,
                middle_name: event.target[1].value,
                last_name: event.target[2].value,
                phone_number: event.target[3].value,
                address: event.target[4].value,
                email: event.target[5].value,
                password: event.target[6].value
            })
        });
        if (response.ok) {
            redirect("/home");
        } else {
            alert("Error signing up");
        }
    }
    
    return (
        <div className="h-[92vh] bg-slate-50 flex justify-center items-center">
            <form onSubmit={signupHandler} className="text-black">
                <input type="text" placeholder="First Name" className="p-2 m-1 border-2 border-blue-700 rounded-md" />
                <input type="text" placeholder="Middle Name" className="p-2 m-1 border-2 border-blue-700 rounded-md" />
                <input type="text" placeholder="Last Name" className="p-2 m-1 border-2 border-blue-700 rounded-md" /> <br/>
                <input type="number" placeholder="Phone number" className="w-full  p-2 m-1 border-2 border-blue-700 rounded-md" /> <br/>
                <input type="text" placeholder="Address" className="w-full p-2 m-1 border-2 border-blue-700 rounded-md" /> <br/>
                <input type="email" placeholder="email" className="w-full  p-2 m-1 border-2 border-blue-700 rounded-md"/><br/>
                <input type="password" placeholder="*******" className="w-full p-2 m-1 border-2 border-blue-700 rounded-md"/><br/>
                <input type="password" placeholder="*******" className="w-full p-2 m-1 border-2 border-blue-700 rounded-md"/><br/>
                <input type="submit" placeholder="Submit" className="w-full p-2 m-1 bg-blue-400 rounded-md shadow-md
                transition-all hover:shadow-none"/><br/>
            </form>
        </div>
    )
}