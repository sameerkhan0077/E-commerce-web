import { getCardProductFromLs } from "./getCardProduct.js";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { updateCartValue } from "./updateCartValue.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

const product = [
  {
    id: 1,
    name: "Laptop",
    category: "Computer",
    brand: "Dell",
    price: 45000,
    stock: 10,
    description:
      "POWERfULL LAPTOP WITH A QAUD CORE I5 PROCESSOR ,8 GB RAM ,256GB SSD AND  A 14INCH 4K  DISPLAY.",
    image: "/img/lap.JPG",
  },
  {
    id: 2,
    name: "SMARTpHONE",
    category: "Mobile",
    brand: "asus",
    price: 15000,
    stock: 15,
    description:
      "POWERfULL mobile WITH A QAUD CORE 14 PROCESSOR ,4 GB RAM ,64GB SSD AND  A 5INCH 4K  DISPLAY.",
    image: "/img/mobil.JPG",
  },
  {
    id: 3,
    name: "TV",
    category: "TV",
    brand: "videocon",
    price: 40000,
    stock: 120,
    description: "POWERfULL tv WITH A 14INCH 4K  DISPLAY.",
    image: "/img/tv.JPG",
  },
  {
    id: 5,
    name: "eyerPhone",
    category: "eyerPhone",
    brand: "Realme",
    price: 2000,
    stock: 14,
    description: "best SOUND and best voice call and nice BETTRRY baeckUp.",
    image: "/img/hphone.JPG",
  },
  {
    id: 6,
    name: "scrrenTouchwatch",
    category: "Watch",
    brand: "SONATA",
    price: 1000,
    stock: 30,
    description: "BEST WATCH AND WATEER  RESET AND GOOD BETTERY BEAKuP.",
    image: "/img/watch.JPG",
  },
  {
    id: 7,
    name: "TAB",
    category: "TABLTE",
    brand: "REDMI",
    price: 35000,
    stock: 45,
    description:
      "POWERfULL LAPTOP WITH A QAUD CORE 15 PROCESSOR ,8 GB RAM ,256GB SSD AND  A 14INCH 4K  DISPLAY.",
    image: "/img/tab.JPG",
  },
];

let cartProducts = getCardProductFromLs();
let filterProducts = product.filter((curProd) => {
  return cartProducts.some((curEelm) => curEelm.id === curProd.id);
});

console.log(filterProducts);

// to update  the addTocart Page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    let { category, id, name, stock, price, image } = curProd;
    let productClone = document.importNode(templateContainer.content, true);

    const lSctualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productPrice").textContent = lSctualData.price;
    productClone.querySelector(".productQuantity").textContent =
      lSctualData.quantity;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));
    // console.log(id);

    cartElement.appendChild(productClone);
  });
};

showCartProduct();

// calculating the Card totle in our  cartProducts page

updateCartProductTotal();
