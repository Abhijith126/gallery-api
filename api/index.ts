import cors from "cors";
import express from "express";
import compression from "compression";

import { router } from "./router";
import "dotenv/config";

const port = process.env.PORT || 3000;

const app = express();

app.use(
  compression({
    level: 6,
    threshold: 0,
    filter: (req: any, res: any) => {
      if (!req.headers["x-no-compression"]) {
        return compression.filter(req, res);
      }
      return false;
    },
  })
);

app.use(cors());
app.get("/", (req, res) => res.send("Server is running!"));
app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
