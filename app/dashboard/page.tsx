import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";
import { readDays, readMood } from "./actions";
import FormCreate from "./components/FormCreate";
import TableViews from "./components/TableViews";

const DashboardPage = async () => {
   const { data } = await readUserSession();

   const { data: days } = await readDays();

   const { data: mood } = await readMood();

   if (!data.session) {
      return redirect("/auth");
   }

   return (
      <div>
         <h1 className="font-bold text-3xl">DashboardPage</h1>

         <div className="my-12">
            {days && mood && <TableViews days={days} />}
         </div>

         <div className="mt-[100px]">{mood && <FormCreate mood={mood} />}</div>
      </div>
   );
};

export default DashboardPage;
