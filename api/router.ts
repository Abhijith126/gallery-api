import express from "express";
import { getAlbumDetails, getImageById } from "./controller";

export const router = express.Router();

router.get("/", (req, res) => res.send("API is running!"));
router.get("/album", getAlbumDetails);
router.get("/photo/:id", getImageById);
