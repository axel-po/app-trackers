import readUserSession from "@/lib/actions";
import React from "react";

const Home = async () => {
   const { data } = await readUserSession();

   return (
      <>
         <h1>Hello {data.session ? data.session.user.email : "inconnu"}</h1>
      </>
   );
};

export default Home;
