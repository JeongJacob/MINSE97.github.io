import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/../util/database";

export default async function nerdNestProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
