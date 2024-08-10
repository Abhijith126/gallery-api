import axios, { AxiosHeaderValue, ResponseType } from "axios";

const HOST = process.env.HOST;
const API_KEY = process.env.API_KEY;

const mappedAlbum = (assets: any[]) => {
  console.log(assets[0]);
  return assets.map((asset) => ({
    id: asset.id,
    name: asset.originalFileName,
    width: asset.exifInfo.exifImageWidth,
    height: asset.exifInfo.exifImageHeight,
  }));
};

export const fetchWeddingAlbum = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${HOST}/api/albums/b900d85e-2803-4e26-b58e-e86debdc4cff?key=${API_KEY}`,
    headers: {
      Accept: "application/json",
    },
  };

  const albumDetails = await axios.request(config);
  return mappedAlbum(albumDetails?.data?.assets || []);
};

export const fetchImageById = async (id: string) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    responseType: "arraybuffer" as ResponseType,
    url: `${HOST}/api/assets/${id}/thumbnail?size=preview&key=${API_KEY}`,
    headers: {
      Accept: "application/octet-stream",
    },
  };

  const { data, headers } = await axios.request(config);

  return { data, headers };
};
