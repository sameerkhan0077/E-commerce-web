import { getCardProductFromLs } from "./getCardProduct.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCardProductFromLs();
// ________________________________________
// toadd the Data INTO lOCALSTROGE
// _________________________________________
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCardProductFromLs();
  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((curPord) => {
      return curPord.id === id ? updateCart : curPord;
    });

    console.log(updateCart);
    localStorage.setItem("cardProductLs", JSON.stringify(updateCart));
    // adding popbox adding Products
    showToast("add", id);
  }

  if (existingProd) {
    // alert("producat  are already  adding");
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);
  console.log(price);

  let updateCart = { id, price, quantity };
  arrLocalStorageProduct.push(updateCart);
  localStorage.setItem("cardProductLs", JSON.stringify(arrLocalStorageProduct));

  // update the cart button value
  updateCartValue(arrLocalStorageProduct);

  //show popbox addind cart
  showToast("add", id);
};
