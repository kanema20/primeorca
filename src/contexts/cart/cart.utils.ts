export interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: string;
  // default_price?: string;
  price: number;
  // sale_price?: number;
  [key: string]: unknown;
  quantity: number;
  attributes: any;
  size: any;
  // image: {
  //   [key: string]: unknown;
  // };
}

export interface UpdateItemInput extends Partial<Omit<Item, "id">> { }

export function addItemWithQuantity(
  items: Item[],
  item: Item,
  quantity: number
) {
  if (quantity <= 0)
    throw new Error("cartQuantity can't be zero or less than zero");
  const existingItemIndex = items.findIndex(
    (existingItem) => existingItem.id === item.id
  );

  if (existingItemIndex > -1) {
    const newItems = [...items];
    newItems[existingItemIndex].quantity! += quantity;
    return newItems;
  }
  return [...items, { ...item, quantity }];
}

export function removeItemOrQuantity(
  items: Item[],
  id: Item["id"],
  quantity: number
) {
  return items.reduce((acc: Item[], item) => {
    if (item.id === id) {
      const newQuantity = item.quantity! - quantity;

      return newQuantity > 0
        ? [...acc, { ...item, quantity: newQuantity }]
        : [...acc];
    }
    return [...acc, item];
  }, []);
}
// Simple CRUD for Item
export function addItem(items: Item[], item: Item) {
  return [...items, item];
}

export function getItem(items: Item[], id: Item["id"]) {
  return items.find((item) => item.id === id);
}

export function updateItem(
  items: Item[],
  id: Item["id"],
  item: UpdateItemInput
) {
  return items.map((existingItem) =>
    existingItem.id === id ? { ...existingItem, ...item } : existingItem
  );
}

export function removeItem(items: Item[], id: Item["id"]) {
  return items.filter((existingItem) => existingItem.id !== id);
}

export const calculateItemTotals = (items: Item[]) =>
  items.map((item) => ({
    ...item,
    // itemTotal: getProductPrice(item.default_price)?.unit_amount * item.quantity!,
    itemTotal: item.price * item.quantity!,
    // getProductPrice(cartItem.default_price)?.unit_amount
  }));

export const calculateTotal = (items: Item[]) =>
  // items.reduce((total, item) => total + item.quantity! * getProductPrice(item.default_price).unit_amount, 0);
  items.reduce((total, item) => total + item.quantity! * item.price, 0);

export const calculateTotalItems = (items: Item[]) =>
  items.reduce((sum, item) => sum + item.quantity!, 0);

export const calculateUniqueItems = (items: Item[]) => items.length;
