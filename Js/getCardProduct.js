import { updateCartValue } from "./updateCartValue.js";

export const getCardProductFromLs = () => {
  let cartProducts = localStorage.getItem("cardProductLs");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  //
  updateCartValue(cartProducts);
  return cartProducts;
};
