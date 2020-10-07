const container = document.getElementById('container');
let sizeNum = 16;

function requestSize() {
    let size = '';
    size = prompt('How big do you want the grid?');
    sizeNum = parseInt(size);
    return sizeNum;
}

// create a grid based on the size requested
function makeGrid(sizeNum) {
    // remove previous grid?
    for(let i = 0; i <  Math.pow(sizeNum, 2); i++) {
        const newDiv = document.createElement('div');
        container.append(newDiv);
        // add class to the new div, 
        container.style.gridTemplateColumns = `repeat(${sizeNum}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${sizeNum}, 1fr)`;
        //remove the class from the div
        //on hover change the background color of the current div
        newDiv.addEventListener("mouseenter", function( event ) {
        event.target.classList.add('grid');
        });
    }
}

// remove all of the grid classes from the divs so there is a blank canvas
const els = document.getElementsByClassName('grid');
function removeClasses () {
    while (els[0]) {
      els[0].classList.remove('grid')
    }
  }

// when button is clicked create a new grid
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    requestSize();
    removeClasses();
    makeGrid(sizeNum);
});

makeGrid(sizeNum);