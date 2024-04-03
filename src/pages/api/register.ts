import connect from "@/helper/db";
import { createUser } from "@/services/user";
import type { NextApiResponse, NextApiRequest } from "next";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connect();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const data = req.body;
  const { name, email, password } = data;

  try {
    const user = await createUser(name, email, password);
    res.status(200).json({ message: "Successfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
