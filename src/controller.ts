import { Request, Response } from "express";
import { fetchWeddingAlbum, fetchImageById } from "./service";

export const getAlbumDetails = async (req: Request, res: Response) => {
  const photos = await fetchWeddingAlbum();
  res.json(photos);
};

export const getImageById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { data, headers } = await fetchImageById(id);

    res.writeHead(200, { "Content-Type": headers["content-type"] });
    res.end(data, "binary");
  } catch (error) {
    res.status(500).send("Error retrieving image");
  }
};
