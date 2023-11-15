import isEmpty from "lodash/isEmpty";
import { DocumentData } from "firebase/firestore";
import { Item, getItem } from "src/contexts/cart/cart.utils";
import { IProduct } from "@firebase/types/types"

// export function generateCartItem(item: IProduct, attributes: object) {
export function generateCartItem(item: DocumentData) {

  const { name, url, images, price, sale_price, metadata } = item;

  return {
    name,
    url,
    images,
    // price: sale_price ? sale_price : price,
    price: price,
    size: metadata.size,
  };
}
