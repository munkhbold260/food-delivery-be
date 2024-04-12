import mongoose, { model, Schema } from "mongoose";

const foodSchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  foodName: String,
  ingredients: [String],
  price: Number,
  stock: Number,
  sale: Number,
  imagePath: String,
});

export const FoodModel = mongoose.models.Food || model("Food", foodSchema);
