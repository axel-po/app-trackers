import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import readUserSession from "@/lib/actions";
import SignOut from "@/app/auth/components/SignOut";

const Header = async () => {
   const { data } = await readUserSession();

   return (
      <nav className="fixed top-0 border-b border-b-accent bg-background w-full">
         <div className="flex items-center justify-between px-4 py-3">
            <Link href="/">
               <h1 className="font-bold text-2xl">App trackers.</h1>
            </Link>
            {data.session ? (
               <SignOut />
            ) : (
               <Link href="/auth">
                  <Button>
                     <LogIn className="mr-2 h-4 w-4" />
                     Login
                  </Button>
               </Link>
            )}
         </div>
      </nav>
   );
};

export default Header;
