function createSquareGrid(dimension) {
    const container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: ${'auto '.repeat(dimension)}`);
    for (i = 0; i < dimension**2; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridRow.addEventListener('mouseover', () => {
            // console.log('hovered over');
            gridRow.style.backgroundColor = 'black';
        })
        // gridRow.textContent = i+1;
        container.appendChild(gridRow);
        //console.log("add grid #::: " + i);
    }

    const rows = document.querySelectorAll('gridRow');
    attachListeners(rows);
    console.log("listeners attached");

}

function attachListeners(gridRows) {
    gridRows.forEach((row) => {
        
    });
}

createSquareGrid(20);
