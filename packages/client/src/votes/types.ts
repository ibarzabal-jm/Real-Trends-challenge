import {Product} from "~/product/types";

export interface Vote {
  user: string;
  product: Product["key"];
  review?: string;
}
