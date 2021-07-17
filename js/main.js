const btN = document.getElementById("btn");
const txtColor = document.getElementById("color-text");
const colors = [
  "#5AA9E6",
  "#7FC8F8",
  "#F9F9F9",
  "#FFE45E",
  "#FFE55E",
  "#FF6392",
  "blue",
  "magenta",
  "red",
  "cyan",
];

btN.addEventListener("click", function () {
  const randomColors = colors[Math.floor(Math.random() * 10)];
  document.body.style.backgroundColor = randomColors;

  txtColor.innerText = randomColors;
});
