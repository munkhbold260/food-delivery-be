import { UserModel } from "@/models/user.schema";
import jwt from "jsonwebtoken";

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
