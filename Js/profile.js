document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    alert("No user logged in!");
    window.location.href = "login.html";
    return;
  }

  const storedUserJSON = localStorage.getItem(currentUser);

  if (!storedUserJSON) {
    alert("User data not found!");
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(storedUserJSON);

  document.getElementById("username").textContent = user.username;
  document.getElementById("firstname").textContent = user.firstname;
  document.getElementById("lastname").textContent = user.lastname;
  document.getElementById("dob").textContent = user.dob;
  document.getElementById("gender").textContent = user.gender;
  document.getElementById("role").textContent = user.role;
});
