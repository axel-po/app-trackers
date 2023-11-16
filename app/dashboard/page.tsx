import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
   const { data } = await readUserSession();

   if (!data.session) {
      return redirect("/auth");
   }

   return <div>DashboardPage</div>;
};

export default DashboardPage;
