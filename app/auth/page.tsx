import readUserSession from "@/lib/actions";
import React from "react";
import { AuthForm } from "./components/AuthForm";
import { redirect } from "next/navigation";

export default async function page() {
   const { data } = await readUserSession();

   if (data.session) {
      return redirect("/dashboard");
   }

   return (
      <>
         <AuthForm />
      </>
   );
}
