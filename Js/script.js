const buttons = document.querySelectorAll('header [data-page]');
const content = document.getElementById('content');
const table = ["Home.html", "Chatbox.html", "Map.html", "Recipe.html", "Login.html"];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = parseInt(btn.getAttribute('data-page'));
    console.log(`Bouton cliqué : data-page = ${page}`);
    console.log(`Redirection vers : ${table[page]}`);
    window.location.href = table[page];
  });
});
