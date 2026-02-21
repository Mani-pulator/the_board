import { Request, Response, NextFunction } from "express";
import { createEventInDb } from "../services/event";


export async function createEvent(req: Request, res: Response, next: NextFunction) {
    // I don't like that there is not validation here, but it's ok for now.
    const { title, description, date, affiliation, tags, creatorEmail} = req.body;
    const posterImage = req.file;
    console.log(req.body);

    

    const tagsArray: string[] =
      typeof req.body.tags === "string"
        ? req.body.tags.split(",").map((t: string) => t.trim())
        : [];

    const event = await createEventInDb({
        title,
        description,
        date,
        affiliation,
        tagsArray,
        creatorEmail,
        posterImage,
    });

    return res.json({ message: "Event created successfully!", event });
}