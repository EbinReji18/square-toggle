const addButton = document.getElementById("addSquare");
const resetButton = document.getElementById("resetSquares");
const squareContainer = document.getElementById("squareContainer");

let count = 1;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

addButton.addEventListener("click", () => {
  const square = document.createElement("div");
  square.classList.add("square");
  square.textContent = count++;
  squareContainer.appendChild(square);
});

resetButton.addEventListener("click", () => {
  squareContainer.innerHTML = "";
  count = 1;
});

squareContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("square")) {
    const currentColor = event.target.style.backgroundColor;
    if (currentColor === "white" || currentColor === "") {
      event.target.style.backgroundColor = getRandomColor();
    } else {
      event.target.style.backgroundColor = "white";
    }
  }
});
