/**
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 */

function solution(N, ...test) {
  let maxLength = 0;
  let result = "";

  for (let i in test) {
    if (test[i].length > maxLength) {
      maxLength = test[i].length;
      result = test[i];
    }
  }

  return result;
}

console.log(solution(5, "teacher", "time", "student", "beautiful", "good"));
