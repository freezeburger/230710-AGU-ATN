import { Product } from "../../../core/interfaces/product"

export interface ProductResponse {
  products:Product[];
  total: number;
  skip: number;
  limit: number;
}
