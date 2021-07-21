import {Author} from "./author.model";
import {Item} from "./item.model";

/**
 * Modelo de productos
 */
export interface Products {
  author:     Author;
  categories: string[];
  items:      Item[];
}


/**
 * Modelo de un producto
 */
export interface Product {
  author:     Author;
  item:      Item;
}
