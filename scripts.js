function createSquareGrid(dimension) {
    const container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: ${'auto '.repeat(dimension)}`);
    for (i = 0; i < dimension**2; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridRow.addEventListener('mouseover', () => {
            gridRow.style.backgroundColor = 'black';
        })
        container.appendChild(gridRow);
    }

    const rows = document.querySelectorAll('gridRow');
    attachListeners(rows);
}

function attachListeners(gridRows) {
    gridRows.forEach((row) => {
    });
}

function setupGrid() {
    createSquareGrid(50); 
    let input = document.getElementById('size');

    let timeout = null;

    let output = document.getElementById('output')

    input.addEventListener('input', function(e) {

        output.textContent = input.value;
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            resetGrid(input.value);
        }, 500);

    });
}

function resetGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let input = document.getElementById('size');
    createSquareGrid(input.value); 
}


window.onload = () => {
    setupGrid();
}