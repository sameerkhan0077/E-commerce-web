const footerHTML = `
<footer class="section-footer">
<div class="footer-container container">
  <div class="contact_1">
    <img
      style="height: 40px; margin-left: 30px"
      src="./img/samlogo.JPG"
      alt="logo"
    />
    <p>Welcome to SAM Ecommerce Store ,your ultimate destination!</p>
    <img class="cardimg" src="./img/card.JPG" alt="cards" />
  </div>
  <div class="contact_2">
    <h4>SHOPPING</h4>
    <a href="#">Computer store</a>
    <a href="#">Laptop store</a>
    <a href="#">Accessorie </a>
    <a href="#">Sales & Discount</a>
  </div>
  <div class="contact_3">
    <h4>Exprience</h4>
    <a href="./contact.html">Contact Us</a>
    <a href="" target="_blank">Payment method</a>
    <a href="" target="_blank">Delivery</a>
    <a href="" target="_blank">Return and Exchange</a>
  </div>
  <div class="contact_4">
    <h4>NEWSLETTER</h4>
    <p>
      be the first to know about new <br />
      arrivle,sales & promos!
    </p>
    <div class="f-mail">
      <input
        style="background-color: rgba(31, 29, 29, 0.595)"
        type="email"
        placeholder="Your Email "
      />
      <i class="bx bx-envelope"></i>
    </div>
    <hr />
  </div>
</div>
<div class="f-design">
  <div class="f-design-txt">
    <p>Design and Code by SAMEER KHAN</p>
  </div>
</div>
</footer>
`;
const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
