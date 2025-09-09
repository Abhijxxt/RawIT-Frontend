"use client"
import { UserContext } from "@/app/contexts/UserContext";
import { useContext } from "react";

export default function UserIssuePage() {
    
    const { user } : any = useContext(UserContext);

    const issueHandler = async (event: any) => {
        event.preventDefault();
        if(event.target[0].value === ""){
            alert("Title is required")
            return;
        }
        const response = await fetch("/api/createUserIssue", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: event.target[0].value,
                description: event.target[1].value,
                status: "open",
                person_id: user.uid,
                category: "user issue"
            })
        })
        if(response.ok) {
            alert("Issue created successfully")
        } else {
            alert("There was an error creating issue")
        }
    }
    return (
        <div>
            <form onSubmit={issueHandler}>
                <input type="text" name="" id="" placeholder="title"/><br/>
                <textarea  name="" id="" placeholder="description" /><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}