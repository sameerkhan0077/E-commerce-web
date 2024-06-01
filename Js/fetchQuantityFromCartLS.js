import { getCardProductFromLs } from "./getCardProduct.js";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCardProductFromLs();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;
  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }
  return { quantity, price };
};
