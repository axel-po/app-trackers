import { Mood } from "./mood";

export interface Day {
   id: number;
   description: string;
   created_at: string;
   moodId: number;
   mood: Mood;
}
