// function squareDiv() {
//     square = document.createElement("div");

// }
var squarePerSide = 16;
const containerSideWidth = 960;

// 1. make 4 horizontal divs
// 2. for each div, add 4 square divs
container = document.createElement('div')
container.className = 'container';
container.style.width = containerSideWidth + 'px';
container.style.height = containerSideWidth + 'px';

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'space-around';
container.style.alignItems = 'center';

squareCountInputButton = document.createElement('button');
squareCountInputButton.textContent = 'Change canvas'
squareCountInputButton.addEventListener('click', function (event) {
    do {
        value = prompt('Enter number of squares per side <= 100')
    } while (value > 100)
    console.log(value);
    squarePerSide = value;
    drawGrid();
});
document.body.appendChild(squareCountInputButton);

clearButton = document.createElement('button');
clearButton.textContent = 'Clear canvas!'
clearButton.addEventListener('click', () => {
    container.replaceChildren();
    drawGrid();
});
document.body.appendChild(clearButton);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function drawGrid() {
    console.log("sq per side" + squarePerSide);
    container.replaceChildren();
    for (let i = 0; i < squarePerSide; i++) {
        rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.flexDirection = 'row';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.alignItems = 'center';

        for (let j = 0; j < squarePerSide; j++) {
            square = document.createElement("div");
            square.className = 'square';
            square.style.width = (containerSideWidth / squarePerSide) + 'px';
            square.style.height = (containerSideWidth / squarePerSide) + 'px';
            square.style.opacity = 1;

            rowDiv.appendChild(square);
        }
        console.log(square.style.width)

        container.appendChild(rowDiv);

    }

}
container.addEventListener('mouseover', function (event) {
    target = event.target;
    if (target.className == 'square') {
        let randomColor = getRandomColor();
        target.style.backgroundColor = randomColor; // Change color on hover
        console.log(target.style.opacity);
        target.style.opacity = target.style.opacity - 0.1;
        console.log(target)
    }
});


// container.addEventListener('mouseout', function(event) {
//     target = event.target;
//     if (target.className == 'square') {
//     target.style.backgroundColor = 'white'; // Change color on hover
//     }    
// });
document.body.appendChild(container)

drawGrid();