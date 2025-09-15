import Link from "next/link";

export default function UserFooter() {
    return (
        <div>
            <Link href={"/user-issue"}>Create an Issue</Link>
        </div>
    )
}