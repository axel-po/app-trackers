import { Button } from "@/components/ui/button";
import readUserSession from "@/lib/actions";
import Link from "next/link";
import React from "react";

const Home = async () => {
   const { data } = await readUserSession();

   return (
      <>
         <h1>Hello {data.session ? data.session.user.email : "inconnu"}</h1>

         <Link className="block mt-12" href="/dashboard">
            <Button> Go to dashboard</Button>
         </Link>
      </>
   );
};

export default Home;
