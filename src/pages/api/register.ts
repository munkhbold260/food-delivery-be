import connect from "@/helper/db";
import { createUser } from "@/services/user";
import type { NextApiResponse, NextApiRequest } from "next";

// const Home = async (req: NextApiRequest, res: NextApiResponse) => {
//   // if (!req.body?.name || !req.body?.email || !req.body?.password) {
//   //   res.status(400).json("name, email, password is missing");
//   // }
//   connect();
//   console.log("reeeeeeeeeeeeeeq", req.body);
//   const data = req.body;
//   console.log(
//     "name====",
//     data.name,
//     "email===",
//     data.email,
//     "pass===",
//     data.password
//   );

//   console.log("req.body", req.body);
//   try {
//     const user = await createUser(data.name, data.email, data.password);

//     res.status(200).json({ message: "Successfully user created", user });
//   } catch (e: any) {
//     return res.status(400).json({ message: e.message });
//   }
// };

// export default Home;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
