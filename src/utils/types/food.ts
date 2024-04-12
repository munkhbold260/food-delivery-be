export type FoodType = {
  foodName: string;
  categoryId: string;
  price: number;
  image: string;
  description: string;
  sale?: number;
  stock: number;
  ingredients: string[];
};
