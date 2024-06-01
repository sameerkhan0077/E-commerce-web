function preventFormSubmit(event) {
  event.preventDefault();
  alert("thank u     your form submit ");
}
window.onload = function () {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", preventFormSubmit);
};
