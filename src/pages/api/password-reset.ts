import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { updatePassword } from "@/services/user";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;

  switch (req.method) {
    case "PUT":
      try {
        const email = await updatePassword(body);
        console.log("bbbbbbbbbbbbboooooooooooooddddddddddddyyyyyy", body);
        return res.status(200).json({ email: email });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
