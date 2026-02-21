import { Router } from "express";
import { createEvent} from "../controllers/event";
import multer from "multer";


const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/createEvent", upload.single("posterImage"), createEvent);


export default router;