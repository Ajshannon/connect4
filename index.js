const grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const numberOfCols = 7;
const gameBoard = document.getElementById('gameBoard');
let currentPlayer = "redChip";
let nextPlayer = "blackChip";
console.log(currentPlayer);
console.log(nextPlayer);

for (let iCol = 0; iCol < numberOfCols; iCol++) {
    const column = document.createElement('div');
    column.classList.add('col');
    column.id = 'col-' + iCol;

    // for (let iRow = 0; iRow < numberOfRows; iRow++) {
    //     const row = document.createElement('div');
    //     row.classList.add('row');
    //     row.id = 'cell-' + iCol + iRow ;
    //     column.appendChild(row);
    //     grid[iCol].push(0);
    // }
    gameBoard.appendChild(column);

}
console.log(grid);



var cells = document.getElementsByClassName("col");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

function handleClick(event) {
    const column = event.currentTarget;

    //prevents from adding more than 6 children to thing
    if (column.childElementCount == 6) {
        return;
    }

    let disc = document.createElement('div');
    let row = column.childElementCount
    console.log(column.classList)
    if (column.classList.contains("col")) {
        if (currentPlayer === "redChip") {
            grid[5 - row][column.id[4]] = 1;
            disc.classList.add(currentPlayer);
            currentPlayer = "blackChip'";
            nextPlayer = "redChip";

        } else {
            grid[5 - row][column.id[4]] = 2;
            nextPlayer = "blackChip";
            disc.classList.add(nextPlayer);
            currentPlayer = "redChip";

        }
        column.appendChild(disc);
    }
    setTimeout(500, checkWinner);
}

function checkWinner() {
    // If we search past the edge we'll get a null pointer error
    const edgeX = grid[0].length - 3;
    const edgeY = grid.length - 3;

    // horizontal
    // iterate each row
    for (let y = 0; y < grid.length; y++) {

        // iterate each cell in the row
        for (let x = 0; x < edgeX; x++) {
            let cell = grid[y][x];

            // Only check if cell is filled
            if (cell !== 0) {

                // Check the next two cells for the same value
                if (cell === grid[y][x + 1] && cell === grid[y][x + 2] && cell === grid[y][x + 3]) {
                    console.log("4 in a row horizontal found at " + (x + 1) + ":" + (y + 1))
                    alert("4 in a row horizontal found at " + (x + 1) + ":" + (y + 1));
                }
            }
        }
    }

    // vertical
    // iterate each row   
    for (let y = 0; y < edgeY; y++) {

        // iterate each cell in the row
        for (let x = 0; x < grid[0].length; x++) {
            cell = grid[y][x];

            // Only check if cell is filled
            if (cell !== 0) {

                // Check the next two cells for the same value
                if (cell === grid[y + 1][x] && cell === grid[y + 2][x] && cell === grid[y + 3][x]) {
                    alert("4 in a row vertical found at " + (x + 1) + ":" + (y + 1));
                    
                }
            }
        }
    }

    // DIAGONAL (DOWN RIGHT)
    // iterate each row   
    for (let y = 0; y < edgeY; y++) {

        // iterate each cell in the row
        for (let x = 0; x < edgeX; x++) {
            cell = grid[y][x];

            // Only check if cell is filled
            if (cell !== 0) {

                // Check the next two cells for the same value
                if (cell === grid[y + 1][x + 1] && cell === grid[y + 2][x + 2] && cell === grid[y + 3][x + 3]) {
                    alert("4 in a row down-right found at " + (x + 1) + ":" + (y + 1));
                }
            }
        }
    }


    // DIAGONAL (DOWN LEFT)
    // iterate each row   
    for (let y = 2; y < grid.length; y++) {

        // iterate each cell in the row
        for (let x = 0; x < edgeX; x++) {
            cell = grid[y][x];

            // Only check if cell is filled
            if (cell !== 0) {

                // Check the next two cells for the same value
                if (cell === grid[y - 1][x + 1] && cell === grid[y - 2][x + 2] && cell === grid[y - 3][x + 3]) {
                    alert("4 in a row down-left found at " + (x + 1) + ":" + (y + 1));
                }
            }
        }
    }
}