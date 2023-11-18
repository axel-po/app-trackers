"use server";

import createSupabaseServerClient from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function readTodo() {
   const supabse = await createSupabaseServerClient();
   return await supabse.from("todo-demo").select("*");
}

export async function createTodo(title: string) {
   const supabse = await createSupabaseServerClient();
   const result = await supabse.from("todo-demo").insert({ title }).single();
   revalidatePath("/dashboard");
   return JSON.stringify(result);
}
