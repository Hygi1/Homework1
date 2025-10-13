const rows = 3;
const cols = 3;

const matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    matrix[i][j] = 1;
  }
}

console.log(JSON.stringify(matrix, null, 2));
