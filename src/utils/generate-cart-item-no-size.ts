import isEmpty from "lodash/isEmpty";
import { DocumentData } from "firebase/firestore";
import { Item, getItem } from "src/contexts/cart/cart.utils";
import { IProduct } from "@firebaseQueries/types/types"

export function generateCartItemNoSize(item: DocumentData, id: string) {

  const { name, url, images, price } = item;
  
  return {
    id,
    name,
    url,
    images,
    price,
  };
}
