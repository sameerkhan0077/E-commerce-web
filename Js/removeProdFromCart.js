import { getCardProductFromLs } from "./getCardProduct.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
  let cartProducts = getCardProductFromLs();
  cartProducts = cartProducts.filter((curprod) => curprod.id !== id);
  localStorage.setItem("cardProductLs", JSON.stringify(cartProducts));

  // To remove tha div on click
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("", id);
  }
  updateCartValue(cartProducts);
};
