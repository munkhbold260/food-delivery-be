import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { passwordService, updatePassword } from "@/services/user";
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
        return res.status(200).json({ result });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    // case "PUT":
    //   try {
    //     const newPassword = await updatePassword(body);
    //     // console.log("bbbbbbbbbbbbboooooooooooooddddddddddddyyyyyy", body);
    //     return res.status(200).json({ password: newPassword });
    //   } catch (e: any) {
    //     return res.status(400).json({ message: e.message });
    //   }
  }
}
