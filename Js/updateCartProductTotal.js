import { getCardProductFromLs } from "./getCardProduct.js";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let LocalCartProducts = getCardProductFromLs();
  let totleProductPrice = LocalCartProducts.reduce(
    (accum, curEelm, index, arr, thisargument) => {
      let producatPrice = parseInt(curEelm.price) || 0;
      return accum + producatPrice;
    },
    0
  );
  //   console.log(totleProductPrice);
  productSubTotal.textContent = `₹${totleProductPrice}`;
  productFinalTotal.textContent = `₹${totleProductPrice + 50}`;
};
