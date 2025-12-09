var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;

  // 1) 시작 또는 끝이 막힌 경우
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;

  // 2) n==1인 경우(출발==도착)
  if (n === 1) return 1;

  // 8방향
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  // BFS 큐
  const queue = [[0, 0, 1]]; // [x, y, distance]
  grid[0][0] = 1; // 방문 표시(1로 막아버리기)

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 범위 체크
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      // 이동 가능(0이어야 함)
      if (grid[nx][ny] === 0) {
        // 도착 지점 도달
        if (nx === n - 1 && ny === n - 1) {
          return dist + 1;
        }

        // 방문 처리 + 큐에 추가
        grid[nx][ny] = 1;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  // 도착 불가
  return -1;
};
