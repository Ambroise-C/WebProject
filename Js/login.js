document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Login successful!");
      window.location.href = "Home.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});
