import isEmpty from "lodash/isEmpty";
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';

interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  default_price: string;
  price: number;
  sale_price?: number;
  [key: string]: unknown;
}


export function generateCartItem(item: Item, attributes: object) {

  const { id, name, slug, images, default_price, price, sale_price } = item;
  function getProductPrice(prod_price: any) {
    const { data } = useFetchItemPrice(prod_price)
    return data;
  }
  return {
    id: !isEmpty(attributes)
      ? `${id}.${Object.values(attributes).join(".")}`
      : id,
    name,
    slug,
    // image: image.thumbnail,
    image: images[0],
    default_price: default_price,
    // price: sale_price ? sale_price : price,
    attributes,
  };
}
