const addButton = document.getElementById("addSquare");
const squareContainer = document.getElementById("squareContainer");

addButton.addEventListener("click", () => {
    const square = document.createElement("div");
    square.classList.add("square");
    squareContainer.appendChild(square);
});

squareContainer.addEventListener("click",(event)=> {
    if (event.target.classList.contains("square")) {
        if (event.target.style.backgroundColor === "black") {
            event.target.style.backgroundColor = "white";
        }else{
            event.target.style.backgroundColor = "black";
        }
    }
});