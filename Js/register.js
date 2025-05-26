document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const slider = document.getElementById("gender-slider");
  const genderValue = document.getElementById("gender-value");

  const genderMap = ["male", "female", "other"];
  const labels = [
    document.getElementById("label-0"),
    document.getElementById("label-1"),
    document.getElementById("label-2"),
  ];

  function updateSliderUI(value) {
    const index = parseInt(value);
    if (genderValue) {
      genderValue.value = genderMap[index];
    }
    labels.forEach((label, i) => {
      label.classList.toggle("active", i === index);
    });
  }

  if (slider && genderValue) {
    updateSliderUI(slider.value);
    slider.addEventListener("input", () => updateSliderUI(slider.value));
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    const firstname = document.getElementById("reg-firstname")?.value || "";
    const lastname = document.getElementById("reg-lastname")?.value || "";
    const dob = document.getElementById("reg-dob")?.value || "";
    const role = document.getElementById("reg-role")?.value || "";
    const gender = genderValue ? genderValue.value : "";

    if (localStorage.getItem(username)) {
      alert("Username already exists.");
    } else {
      const userData = {
        username,
        password,
        firstname,
        lastname,
        dob,
        gender,
        role,
      };

      localStorage.setItem(username, JSON.stringify(userData));
      alert("Registration successful!");
      window.location.href = "login.html";
    }
  });
});
