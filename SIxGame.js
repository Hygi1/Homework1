function changeMiniGamesBgColor() {
  const miniGamesElement = document.querySelector(".mini-games");

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${r}, ${g}, ${b})`;

  miniGamesElement.style.backgroundColor = randomColor;
}
