import express from "express";
import { getAlbumDetails, getImageById } from "./controller";

export const router = express.Router();

router.get("/album", getAlbumDetails);
router.get("/photo/:id", getImageById);
