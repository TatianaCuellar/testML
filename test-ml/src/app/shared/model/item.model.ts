import {Price} from "./price.model";

export interface Item {
  id:            string;
  title:         string;
  price:         Price;
  picture:       string;
  condition:     string;
  free_shipping: boolean;
  country?: string;
  sold_quantity?: boolean;
  description?: boolean;
}
