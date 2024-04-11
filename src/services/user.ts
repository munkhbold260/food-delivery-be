import { UserModel } from "@/models/user.schema";
import { NewPasswordType } from "@/utils/types/category";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
const nodemailer = require("nodemailer");

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const newUser = await UserModel.findOne({ email: email });

  if (newUser == null) {
    try {
      const createUser = await UserModel.create({
        name: name,
        email: email,
        password: password,
      });
    } catch (e: any) {
      console.log(e.message);
    }
    return createUser;
  } else {
    throw new Error();
  }
};

export const loginService = async (email: string, password: string) => {
  const userEmail = email;
  const userPassword = password;

  try {
    const user = await UserModel.findOne({
      email: userEmail,
      password: userPassword,
    });

    if (email == user.email && password == user.password) {
      const userInfo = {
        email: user.email,
        name: user.password,
      };

      const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
        expiresIn: "1h",
      });
      return newToken;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const passwordService = async (email: string) => {
  const passResetCode = nanoid(8);
  console.log("nanoID", passResetCode);
  const userEmail = email;

  try {
    const user = await UserModel.findOne({
      email: userEmail,
    });

    if (email == user.email) {
      await UserModel.findOneAndUpdate(
        {
          email,
        },
        {
          password: passResetCode,
        }
      );
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "munkhbold260@gmail.com",
          pass: "jwlf itpg rmiw qccq",
        },
      });
      const mailOptions = {
        from: "munkhbold260@gmail.com",
        to: userEmail,
        subject: "Food Delivery Password Reset Code",
        text: passResetCode,
      };
      transporter.sendMail(mailOptions, (error: string) => {
        if (error) {
          console.error("Error sending email: ", error);
        } else {
          console.log("Email sent: ");
        }
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updatePassword = async (body: NewPasswordType) => {
  const updatePassword = { password: body.password };
  const filter = { email: body.email };
  try {
    await UserModel.updateOne(filter, updatePassword);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
