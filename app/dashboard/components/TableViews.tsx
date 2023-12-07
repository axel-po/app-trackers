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
import { Checkbox } from "@/components/ui/checkbox";
import { Day } from "@/types/day";

interface TableViewsProps {
   days: Day[];
}

const TableViews = ({ days }: TableViewsProps) => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead className="w-[100px]">Mood</TableHead>
               <TableHead>Description</TableHead>
               <TableHead>Date</TableHead>
               <TableHead className="text-center w-[100px]">
                  Journée productive
               </TableHead>
               <TableHead className="text-center w-[100px]">Sport</TableHead>
               <TableHead className="text-center w-[100px]">Social</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {days &&
               days.map((day) => (
                  <TableRow key={day.id}>
                     <TableCell className="text-2xl">
                        {day?.mood?.emoji}
                     </TableCell>
                     <TableCell>{day?.description}</TableCell>
                     <TableCell>{formatDate(day?.created_at)}</TableCell>
                     <TableCell>
                        <Checkbox id="terms" />
                     </TableCell>
                     <TableCell>
                        <Checkbox id="terms" />
                     </TableCell>
                     <TableCell>
                        <Checkbox id="terms" />
                     </TableCell>
                  </TableRow>
               ))}
         </TableBody>
      </Table>
   );
};

export default TableViews;
