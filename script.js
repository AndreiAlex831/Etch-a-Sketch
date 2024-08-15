const gridContainer = document.getElementById('gridContainer');

function makeDivs(numDivs){
    for (let i = 0; i<numDivs; i++){
        let cells = document.createElement('div');
        cells.classList.add('grid-item');
        gridContainer.appendChild(cells);
    }
}
makeDivs(16);