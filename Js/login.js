document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const storedUserJSON = localStorage.getItem(username);

    if (storedUserJSON) {
      const storedUser = JSON.parse(storedUserJSON);

      if (storedUser.password === password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);
        window.location.href = "Home.html";
      } else {
        alert("Invalid username or password.");
      }
    } else {
      alert("Invalid username or password.");
    }
  });
});
