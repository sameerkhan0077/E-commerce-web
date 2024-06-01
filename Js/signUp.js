document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sign-up-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      alert("sign-up succesfull Back to home page");
    }

    // Handle the form data here

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  });
});
