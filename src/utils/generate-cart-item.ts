import isEmpty from "lodash/isEmpty";

export interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: any;
  default_price: string;
  price: number;
  sale_price?: number;
  [key: string]: unknown;
  quantity?: number;
  // attributes: any;
}


export function generateCartItem(item: Item, attributes: object) {

  const { id, name, slug, image, default_price, price, sale_price } = item;
  // function getProductPrice(prod_price: any) {
  //   const { data } = useFetchItemPrice(prod_price)
  //   return data;
  // }
  return {
    id: !isEmpty(attributes)
      ? `${id}.${Object.values(attributes).join(".")}`
      : id,
    name,
    slug,
    // image: image.thumbnail,
    image: image,
    default_price: default_price,
    price: sale_price ? sale_price : price,
    attributes,
  };
}
