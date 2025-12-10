function solution(numbers, target) {
  let queue = [];
  let graph = {};
  let answer = 0;

  queue.push([0, 0]);

  while (queue.length > 0) {
    const [index, sum] = queue.shift();

    if (index === numbers.length) {
      if (sum === target) answer++;
      continue;
    }

    queue.push([index + 1, sum + numbers[index]]);
    queue.push([index + 1, sum - numbers[index]]);
  }

  return answer;
}
