import {Author} from "./author.model";
import {Item} from "./item.model";

export interface Products {
  author:     Author;
  categories: string[];
  items:      Item[];
}

export interface Product {
  author:     Author;
  item:      Item;
}
