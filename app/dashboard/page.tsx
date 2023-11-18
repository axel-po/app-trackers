import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";
import { readTodo } from "./actions";
import FormCreate from "./components/FormCreate";

const DashboardPage = async () => {
   const { data } = await readUserSession();

   const { data: todos } = await readTodo();

   if (!data.session) {
      return redirect("/auth");
   }

   console.log(todos);
   return (
      <div>
         <h1 className="font-bold text-3xl">DashboardPage</h1>

         <div className="my-12">
            {todos &&
               todos.map((todo) => (
                  <div key={todo.id}>
                     <h3>{todo.title}</h3>
                     <p>{todo.completed}</p>
                  </div>
               ))}
         </div>

         <FormCreate />
      </div>
   );
};

export default DashboardPage;
