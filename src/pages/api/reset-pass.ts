import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { passwordService } from "@/services/user";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function home(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;
  console.log("recquest recived from front");

  switch (req.method) {
    case "POST":
      try {
        const result = await passwordService(body.email);
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
