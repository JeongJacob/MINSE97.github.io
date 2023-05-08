import { connectDB } from "../../../../util/database";

export async function GET(request: Request) {
  const db = (await connectDB()).db("forum");
  const result = await db.collection("projects").find().toArray();
  const responseBody = JSON.stringify(result);
  try {
    new Response(responseBody, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://jacob-minse97.vercel.app",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
