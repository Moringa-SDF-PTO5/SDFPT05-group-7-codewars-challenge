def count_return_points(matrix, k):
    N = len(matrix)
    
    # Convert the matrix elements from "x,y" to (x, y)
    int_matrix = [[tuple(map(int, cell.split(','))) for cell in row] for row in matrix]
    
    def simulate_moves(start_x, start_y, k):
        x, y = start_x, start_y
        for _ in range(k):
            x, y = int_matrix[x][y]
        return x == start_x and y == start_y
    
    count = 0
    
    # Check each point in the matrix
    for i in range(N):
        for j in range(N):
            if simulate_moves(i, j, k):
                count += 1
    
    return count

matrix = [
    ["0,1", "0,0", "1,2"], 
    ["1,1", "1,0", "0,2"], 
    ["2,1", "2,0", "0,0"]
]
k = 2

print(count_return_points(matrix,k))
