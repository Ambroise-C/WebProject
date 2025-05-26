document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('header [data-page]');
  const pages = ["Home.html", "Chatbox.html", "Map.html", "Recipe.html", "Login.html"];

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.getAttribute('data-page'));
      console.log("Redirection vers :", pages[page]); 
      if (!isNaN(page) && page < pages.length) {
        window.location.href = pages[page];
      }
    });
  });
});
