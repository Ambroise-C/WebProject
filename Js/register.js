document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (localStorage.getItem(username)) {
      alert("Username already exists.");
    } else {
      localStorage.setItem(username, password);
      alert("Registration successful!");
      window.location.href = "login.html";
    }
  });
});
