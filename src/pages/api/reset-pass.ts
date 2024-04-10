// import connect from "@/helper/db";
// import { passwordService } from "@/services/user";
import { NextApiRequest, NextApiResponse } from "next";
// import NextCors from "nextjs-cors";
// import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "your_email@gmail.com",
      pass: "your_app_password",
    },
  });
}
