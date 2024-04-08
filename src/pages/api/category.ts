import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "@/services/category";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;

  switch (req.method) {
    case "POST":
      try {
        const result = await createCategory(body.name);
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    case "GET":
      try {
        const categories = await getCategories();
        return res.status(200).json({ categories: categories });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    case "DELETE":
      try {
        const category = await deleteCategory(body.name);
        return res.status(200).json({ category: category });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

    case "PUT":
      try {
        const category = await updateCategory(body.name);
        console.log(body.name);
        return res.status(200).json({ category: category });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
  }
}
