import { connectDB } from "@/../util/database";
import { NextApiRequest, NextApiResponse } from "next";
const express = require("express");
const cors = require("cors");

const app = express();

export default async function nerdNestProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const corsOptions = {
    origin: ["*"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
  };

  app.use(cors(corsOptions));
  app.options("/api/projects", cors(corsOptions));

  try {
    const db = (await connectDB()).db("forum");
    const result = await db.collection("projects").find().toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
