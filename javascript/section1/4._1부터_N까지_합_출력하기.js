/**
 * 4. 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 */

function solution(n) {
  let num = 0;

  while (n > 0) {
    num += n;
    n--;
  }

  return num;
}

console.log(solution(6));
console.log(solution(10));

function solution2(n) {
  return (n * (n + 1)) / 2;
}

console.log(solution2(6));
console.log(solution2(10));
