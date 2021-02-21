const container = document.querySelector('#container');    //select #container div
let count = 1;

function buildGrid(num) {

    clearGrid("content");

    for (let i = 0; i < num; i++) {                             //loop to create the 16 x 16 grid pattern
        const content = document.createElement('div');         //var content creates new div
        content.classList.add('content');                      //adds class 'content' to the div
        container.appendChild(content);                        //create outer column div

        for (let j = 0; j < num; j++) {                         //loop and create row of 16 divs
            const newDiv = document.createElement('div');      
            newDiv.className = 'newDivs';                      //add class to divs
            newDiv.id = ('id' + count);                        //add unique id to each div
            newDiv.setAttribute('onmouseover', 'onHover(this.id)');  //call onHover function on mouseover
            content.append(newDiv);                            //add div to document
            count++;
        }
    }
}

function onHover(id) {  //function adds backgroundColor of 'black' to individual ids
    document.getElementById(id).style.backgroundColor = "black";
};

function reSpec() {
    let gridSize = prompt("How big of a grid do you want (Enter 1 - 100)");
    buildGrid(gridSize);
}

function clearGrid(className) {
    var element = document.getElementsByClassName(className);
    
    while(element.length > 0) {
        element[0].parentNode.removeChild(element[0]);
    }
}