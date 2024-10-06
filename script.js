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
    const squareSize = 640 / squaresPerSide;
    
for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    

    square.addEventListener("mouseover" , () =>{
        const random_RGB_values = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
    
        // Convert the array to a valid rgb string
        const rgbColor = `rgb(${random_RGB_values[0]}, ${random_RGB_values[1]}, ${random_RGB_values[2]})`;
        square.style.backgroundColor = rgbColor; // Change color to black on hover
    });
    container.appendChild(square);
  }
}

function removeGrid(){}