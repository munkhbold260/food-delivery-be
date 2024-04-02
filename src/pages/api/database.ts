import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const uri: string = process.env.MONGO_DB_URL as string;

const Handler = (req: NextApiRequest, res: NextApiResponse) => {
  const connect = async () => {
    try {
      await mongoose.connect(uri);
      console.log("connection succesful");
    } catch (error) {
      console.log(error);
    }
  };
  connect();
};

export default Handler;
