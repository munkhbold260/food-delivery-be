import type { NextApiResponse, NextApiRequest } from "next";
import { createUser } from "@/services/user";

const Home = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await createUser(
      "firstName",
      "lastName",
      "email",
      22323423323
    );
    res.status(200).json({ message: "successfully create user", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default Home;
