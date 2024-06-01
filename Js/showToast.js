export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  // set  the next content of the toast based on the opreation
  if (operation === "add") {
    toast.textContent = `product with Id ${id} has been added`;
  } else {
    toast.textContent = `product with Id ${id} has been deleted.`;
  }
  document.body.appendChild(toast);
  //   Automatically remove the toast after a few second
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
