import { CategoryModel } from "@/models/category.schema";
import { CategoryType } from "@/utils/types/category";

export const createCategory = async (name: string) => {
  const createCategory = await CategoryModel.create({ name });
  return createCategory;
};

export const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const getCategoryById = async (id: string) => {
  try {
    const category = await CategoryModel.findOne({ _id: id });
    return category;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deleteCategory = async (name: string) => {
  try {
    await CategoryModel.deleteOne({ name: name });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updateCategory = async (body: CategoryType) => {
  const updateName = { name: body.name };
  const filter = { _id: body._id };
  try {
    await CategoryModel.updateOne(filter, updateName);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
