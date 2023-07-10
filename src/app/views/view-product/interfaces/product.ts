import { BrandName, Category, ImageUrl, LongText, Percentage, Price, Quantity, Rating, ShortText, UniqueId } from "./types";

export interface Product {
  id: UniqueId;
  title: ShortText;
  description: LongText;
  price: Price;
  discountPercentage: Percentage;
  rating: Rating;
  stock: Quantity;
  brand: BrandName;
  category: Category;
  thumbnail: ImageUrl;
  images: ImageUrl[];
}
