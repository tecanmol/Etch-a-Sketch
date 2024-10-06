const container = document.querySelector(".grid-container");
const btn = document.querySelector("button");

btn.addEventListener("click" , () =>{
    let squaresPerSide = prompt("Enter number of squares per side for the new grid" , "16");
    if (squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(squaresPerSide);
    }
});

createGrid(16);

function createGrid(squaresPerSide){
    container.innerHTML = '';
    const squareSize = 1080 / squaresPerSide;
    
for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    

    square.addEventListener("mouseover" , () =>{
        square.style.backgroundColor = '#000'; // Change color to black on hover
    });
    container.appendChild(square);
  }
}

function removeGrid(){}