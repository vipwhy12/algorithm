function numIslands(grid: string[][]): number {
  let myLands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        grid = findIlend(grid, i, j);
        myLands++;
      }
    }
  }

  return myLands;
}

function findIlend(grid: string[][], i, j) {
  if (grid[i][j] === "0") {
    return grid;
  }

  grid[i][j] = "0";

  if (grid.length > i + 1) {
    const right = findIlend(grid, i + 1, j);
  }

  if (0 < i) {
    const left = findIlend(grid, i - 1, j);
  }

  if (grid[i].length > j + 1) {
    const down = findIlend(grid, i, j + 1);
  }

  if (0 < j) {
    const up = findIlend(grid, i, j - 1);
  }

  return grid;
}
