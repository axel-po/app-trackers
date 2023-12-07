import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";
import { readDays, readMood } from "./actions";
import FormCreate from "./components/FormCreate";
import TableViews from "./components/TableViews";
import Chart from "./components/Chart";
import Example from "./components/Chart";
import PieChartComponent from "./components/PieChartComponent";

const DashboardPage = async () => {
   const { data } = await readUserSession();

   const { data: days } = await readDays();

   const { data: mood } = await readMood();

   if (!data.session) {
      return redirect("/auth");
   }

   return (
      <div>
         <div className="my-12">
            {days && mood && <TableViews days={days} />}
         </div>

         <div className="flex flex-col gap-y-8">
            <h1 className="text-4xl font-bold">Analyse : </h1>
            <div className="flex">
               <Chart />
               <PieChartComponent />
            </div>
         </div>

         <div className="py-20">{mood && <FormCreate mood={mood} />}</div>
      </div>
   );
};

export default DashboardPage;
