"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { createDays } from "../actions";
import { log } from "console";
import { LucideBarChartHorizontalBig } from "lucide-react";

interface Mood {
   id: number;
   emoji: string;
   name: string;
}
interface FormCreateProps {
   mood: Mood[];
}
const FormSchema = z.object({
   description: z.string().min(1, {
      message: "Missing description",
   }),
   moodId: z.string({
      required_error: "Mood ID is required",
   }),
});

export default function FormCreate({ mood }: FormCreateProps) {
   const [isPending, startTransition] = useTransition();

   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         description: "",
         moodId: "1",
      },
   });

   function onSubmit(data: z.infer<typeof FormSchema>) {
      startTransition(async () => {
         const result = await createDays(data.description, data.moodId);
         const { error } = JSON.parse(result);

         if (error?.message) {
            toast({
               variant: "destructive",
               title: "Fail to create day",
               description: (
                  <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                     <code className="text-white">{error.message}</code>
                  </pre>
               ),
            });
         } else {
            toast({
               title: "You are successfully create todo.",
               description: (
                  <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                     <code className="text-white">
                        {data.description} is created
                     </code>
                  </pre>
               ),
            });
            form.reset();
         }
      });
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
         >
            <FormField
               control={form.control}
               name="moodId"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Mood</FormLabel>
                     <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                     >
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Mood" />
                        </SelectTrigger>
                        <SelectContent>
                           {mood.map((mood) => (
                              <SelectItem
                                 onChange={field.onChange}
                                 key={mood.id}
                                 value={`${mood.id}`}
                              >
                                 {mood.emoji}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="description"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Description</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="todo title"
                           {...field}
                           onChange={field.onChange}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button type="submit" className="w-full flex gap-2">
               Add
               <AiOutlineLoading3Quarters
                  className={cn(" animate-spin", { hidden: !isPending })}
               />
            </Button>
         </form>
      </Form>
   );
}
