function countValidPoints(matrix, N, k) {
    // Recursive function to simulate robot movement
    function move(x, y, steps, startX, startY) {
        // Check if we are back at (startX, startY)
        if (steps === k) {
            return (x === startX && y === startY);
        }
        
        // Get the next coordinates
        const [nextX, nextY] = matrix[x][y];
        return move(nextX, nextY, steps + 1, startX, startY);
    }

    let count = 0;
    
    for (let startX = 0; startX < N; startX++) {
        for (let startY = 0; startY < N; startY++) {
            // Check if starting from (startX, startY) returns to itself in exactly k moves
            if (move(startX, startY, 0, startX, startY)) {
                count += 1;
            }
        }
    }
    
    return count;
}

const stringMatrix = [
    ["0,1", "0,0", "1,2"], 
    ["1,1", "1,0", "0,2"], 
    ["2,1", "2,0", "0,0"]
];

const matrix = stringMatrix.map(row => 
    row.map(cell => cell.split(',').map(Number))
);

const N = 3;
const k = 4;

console.log(countValidPoints(matrix, N, k));  
