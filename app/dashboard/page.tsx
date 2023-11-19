import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";
import { readDays } from "./actions";
import FormCreate from "./components/FormCreate";
import TableViews from "./components/TableViews";

const DashboardPage = async () => {
   const { data } = await readUserSession();

   const { data: days } = await readDays();

   if (!data.session) {
      return redirect("/auth");
   }

   return (
      <div>
         <h1 className="font-bold text-3xl">DashboardPage</h1>

         <div className="my-12">
            {/* {todos &&
               todos.map((todo) => (
                  <div key={todo.id}>
                     <h3>{todo.description}</h3>
                     <p>{todo?.mood?.emoji}</p>
                  </div>
               ))} */}
            {days && <TableViews days={days} />}
         </div>

         <FormCreate />
      </div>
   );
};

export default DashboardPage;
