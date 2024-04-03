import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

console.log("user schema");
export const UserModel = mongoose.models.User || model("User", UserSchema);
