import "./styles.css";

const BorderCircle = document.querySelector(".circle"); // Using the class selector since "circle" is a class, not an ID
const Square = document.querySelector(".square"); // Usi

const changeColorBtn = document.getElementById("ChangeCol");

const changeShapeBtn = document.getElementById("ChangeLook");

changeShapeBtn.addEventListener("click", () => {
  if (Square !== null) {
    Square.style.width = "0";
    Square.style.height = "0";
    Square.style.borderLeft = "25px solid transparent";
    Square.style.borderRight = "25px solid transparent";
    Square.style.borderBottom = "50px solid #555";
    Square.style.backgroundColor = "none";
  } else {
    console.error("Element not found");
  }
});

changeColorBtn.addEventListener("click", () => {
  if (BorderCircle !== null) {
    BorderCircle.style.backgroundColor = "green";
  } else {
    console.error("Element not found");
  }
});
