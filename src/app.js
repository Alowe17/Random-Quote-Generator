const quotes = [
  "Stay hungry, stay foolish.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
