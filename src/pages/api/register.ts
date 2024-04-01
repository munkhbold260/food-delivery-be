import type { NextApiResponse, NextApiRequest } from "next";

const Home = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ message: "Hello I'm back-end" });
};

export default Home;
