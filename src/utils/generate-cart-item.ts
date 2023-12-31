import isEmpty from "lodash/isEmpty";
import { DocumentData } from "firebase/firestore";
import { Item, getItem } from "src/contexts/cart/cart.utils";
import { IProduct } from "@firebaseQueries/types/types"

// export function generateCartItem(item: IProduct, attributes: object) {
export function generateCartItem(item: DocumentData, id: string) {

  const { name, url, images, price, metadata } = item;
  
  return {
    id,
    name,
    url,
    images,
    price,
    size: metadata.size,
  };
}
