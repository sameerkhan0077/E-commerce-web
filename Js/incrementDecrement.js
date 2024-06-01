import { getCardProductFromLs } from "./getCardProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");
  let quantity = 1;
  let localStoragePrice = 0;

  //   get the  Data from  localStorage
  let LocalCartProducts = getCardProductFromLs();

  let existingProd = LocalCartProducts.find((curPord) => curPord.id === id);
  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity = quantity - 1;
    }
  }

  //   finally we will update the price in localStorge
  localStoragePrice = price * quantity;
  localStoragePrice = localStoragePrice.toFixed(2);

  let updateCart = { id, quantity, price: localStoragePrice };

  updateCart = LocalCartProducts.map((curPord) => {
    return curPord.id === id ? updateCart : curPord;
  });

  console.log(updateCart);
  localStorage.setItem("cardProductLs", JSON.stringify(updateCart));

  //   also we need to reflect the cahnges on the screen too
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  // calculating the Card totle in our  cartProducts page

  updateCartProductTotal();
};
