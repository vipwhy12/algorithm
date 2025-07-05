/**
 * 1. 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 *  (정렬을 사용하면 안됩니다)
 */

function numberOfMinimum(a, b, c) {
  let min = a;

  if (min > b) min = b;
  if (min > c) min = c;

  return min;
}

console.log(numberOfMinimum(3, 5, 2));
console.log(numberOfMinimum(3, 3, 3));
