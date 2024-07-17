import { connectToDatabase } from "@/lib/database/mongoos";
import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="root">
           <p> Home </p>
        </div>
    );
}