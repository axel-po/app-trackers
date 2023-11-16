import React from "react";

type CardProps = {
   id: number;
   content: string;
   created_at: string;
};

const Card = ({ item }: CardProps) => {
   return (
      <article className="flex border-t border-slate-200 border-b  py-4 items-center justify-between">
         <div>OK</div>

         <p>{item.content}</p>
      </article>
   );
};

export default Card;
