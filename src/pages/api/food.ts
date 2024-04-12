import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";

import { createFood, getFoods } from "@/services/food";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;
  console.log(body);
  switch (req.method) {
    case "POST":
      try {
        const result = await createFood(
          body.categoryId,
          body.foodName,
          body.ingredients,
          body.price,
          body.stock,
          body.sale,
          body.imagePath
        );
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    case "GET":
      try {
        const foods = await getFoods();
        return res.status(200).json({ foods: foods });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    //     case "PUT":
    //       try {
    //         const category = await updateFood(body.id, body.updateInfo);
    //         console.log("bbbbbbbbbbbbboooooooooooooddddddddddddyyyyyy", body);
    //         return res.status(200).json({ category: category });
    //       } catch (e: any) {
    //         return res.status(400).json({ message: e.message });
    //       }

    //     case "DELETE":
    //       try {
    //         const food = await deleteFood(body);
    //         return res.status(200).json({ food: food });
    //       } catch (e: any) {
    //         return res.status(400).json({ message: e.message });
    //       }
  }
}
