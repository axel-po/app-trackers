import React from "react";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";

interface Mood {
   id: number;
   name: string;
   emoji: string;
}

interface Day {
   id: number;
   description: string;
   created_at: string;
   moodId: number;
   mood: Mood;
}

interface TableViewsProps {
   days: Day[];
}

const TableViews = ({ days }: TableViewsProps) => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead className="w-[200px]">Mood</TableHead>
               <TableHead>Description</TableHead>
               <TableHead>Date</TableHead>
            </TableRow>
         </TableHeader>
         {days &&
            days.map((day) => (
               <TableBody key={day.id}>
                  <TableRow>
                     <TableCell>{day?.mood?.emoji}</TableCell>
                     <TableCell>{day?.description}</TableCell>
                     <TableCell>{formatDate(day?.created_at)}</TableCell>
                  </TableRow>
               </TableBody>
            ))}
      </Table>
   );
};

export default TableViews;
