import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/../util/database";
const express = require("express");
const cors = require("cors");
const app = express();

export default async function nerdNestProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  app.use(cors());
  const allowedOrigins = [
    "https://jacob-minse97.vercel.app/",
    "http://localhost:3000",
  ];

  const corsOptions = {
    origin: function (origin: any, callback: any) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

  app.use(cors(corsOptions));

  // ... your other routes and middleware

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
  if (connectDB) {
    let db = (await connectDB).db("forum");
    let result = await db.collection("projects").find().toArray();
    if (req.method === "GET") {
      try {
        res.status(200).json(result);
      } catch {
        res.status(404).json("404 not found");
      }
    }
  }
}
