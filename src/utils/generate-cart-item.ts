import isEmpty from "lodash/isEmpty";
import { DocumentData } from "firebase/firestore";

export interface Item {
  id: string | number;
  name: string;
  url: string;
  image: string;
  default_price: string;
  price: number;
  sale_price?: number;
  [key: string]: unknown;
  quantity?: number;
  // attributes: any;
}


// export function generateCartItem(item: Item, attributes: object) {
export function generateCartItem(item: DocumentData) {

  const { _id, name, url, images, default_price, price, sale_price } = item;
  // function getProductPrice(prod_price: any) {
  //   const { data } = useFetchItemPrice(prod_price)
  //   return data;
  // }
  return {
    // _id,
    name,
    url,
    images,
    // default_price: default_price,
    price: sale_price ? sale_price : price,
    // attributes,
  };
}
