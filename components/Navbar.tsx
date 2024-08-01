"use client"
import { UserButton } from "@clerk/nextjs"
import { useSession } from "@clerk/nextjs"
import { PiKanban } from "react-icons/pi"
import Link from "next/link"

const Navbar = () => {
  const { isSignedIn } = useSession()

  return (
    <div className="w-full relative py-5 z-10 bg-black bg-opacity-50 bg-bl">
      <div className="flex justify-between w-[90%] max-w-[1440px] mx-auto">
        <Link href={"/"} className="flex gap-1 items-center text-2xl font-bold">
          My Kanban
          <PiKanban/>
        </Link>
        <div className="flex items-center gap-5">
          <UserButton/>
          <span>THEME</span> 
        </div>
        {!isSignedIn && (
          <Link href={"/sign-in"} className="tracking-tight hover:underline">
            Already a member? Sign in &#8594;
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar