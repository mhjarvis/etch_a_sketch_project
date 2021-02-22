const container = document.getElementById('container');

let count = 1;

function buildGrid(num) {       //builds grid of divs; set all attributes

    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);

    for (let i = 0; i < num ** 2; i++) {

        const box = document.createElement('div');
        container.appendChild(box);
        box.innerText = "";
        box.className = 'box';
        box.id = ('id' + count);
        box.setAttribute('onmouseover', 'onHover(this.id)');
        count++;
    };
}

function onHover(id) {          //function adds backgroundColor of 'black' to individual boxes
    document.getElementById(id).style.backgroundColor = "black";
}

function reSet() {              //function to reset the game and prompt user for size of grid
    let gridSize = prompt("How big of a grid do you want (Enter 1 - 100)");

    clearGrid("container");
    buildGrid(gridSize);
}

function clearGrid(className) {
    const element = document.getElementById(className);
    element.textContent = '';
}
