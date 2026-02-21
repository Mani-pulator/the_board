import { db } from "../db";
import { event as eventsTable } from "../db/schema";
import { eq } from 'drizzle-orm';
import { nanoid } from "nanoid";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

interface CreateEventData {
  title: string;
  description: string;
  date: string;
  affiliation?: string;
  tags?: string[];
  creatorEmail: string;
  posterImage?: Express.Multer.File;
}

export const createEventInDb = async (eventData: CreateEventData) => {
  let posterUrl: string | null = null;

  if (eventData.posterImage) {
    const fileName = `${nanoid()}.${eventData.posterImage.mimetype.split('/')[1]}`;
    const { data, error } = await supabase.storage
      .from("event-posters-public")
      .upload(fileName, eventData.posterImage.buffer, {
        contentType: eventData.posterImage.mimetype,
      });

    if (error) {
      throw new Error(`Failed to upload poster: ${error.message}`);
    }

    const { data: urlData } = supabase.storage
      .from("event-posters-public")
      .getPublicUrl(fileName);
    
    posterUrl = urlData.publicUrl;
  }

  const newEvent = await db.insert(eventsTable).values({
    id: nanoid(),
    title: eventData.title,
    description: eventData.description,
    date: eventData.date,
    affiliation: eventData.affiliation || null,
    tags: eventData.tags || [],
    creatorEmail: eventData.creatorEmail,
    posterUrl: posterUrl,
  }).returning();

  return newEvent[0];
};
