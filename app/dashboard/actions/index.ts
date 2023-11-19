"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export async function readDays() {
   noStore();
   const supabase = await createSupabaseServerClient();
   return await supabase.from("day").select(`
     *,
     mood ( * )
   `);
}

export async function createTodo(description: string) {
   const supabse = await createSupabaseServerClient();
   const result = await supabse.from("day").insert({ description }).single();
   revalidatePath("/dashboard");
   return JSON.stringify(result);
}
