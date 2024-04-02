import connect from "@/helper/db";
import { createUser } from "@/services/user";
import type { NextApiResponse, NextApiRequest } from "next";

connect();

const Home = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (!req.body?.name || !req.body?.email || !req.body?.password) {
  //   res.status(400).json("name, email, password is missing");
  // }
  console.log("reeeeeeeeeeeeee    q", req.body);
  const { name, email, password } = req.body;
  console.log(
    "name====",
    req.body.name,
    "email===",
    email,
    "pass===",
    password
  );

  console.log("req.body", req.body);
  try {
    const user = await createUser(name, email, password);

    res.status(200).json({ message: "Successfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default Home;
