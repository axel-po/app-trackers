"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export async function readDays() {
   noStore();
   const supabase = await createSupabaseServerClient();
   return await supabase
      .from("day")
      .select(
         `
     *,
     mood ( * )
   `
      )
      .order("created_at", { ascending: false });
}

export async function readMood() {
   noStore();
   const supabase = await createSupabaseServerClient();
   return await supabase.from("mood").select(`*`);
}

export async function createDays(description: string, moodId: string) {
   const supabse = await createSupabaseServerClient();
   const result = await supabse
      .from("day")
      .insert({ description, moodId })
      .single();
   revalidatePath("/dashboard");
   return JSON.stringify(result);
}
