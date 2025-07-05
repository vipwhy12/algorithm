/**
 * 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다.
 * 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
 *
 * 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.
 * 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
 *
 * 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.
 *
 * 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니다.
 */
function solution(today, ...numbers) {
  const CHECKNUMBER = 10;

  let illegalCar = 0;

  for (let n of numbers) {
    if (n % CHECKNUMBER === today) illegalCar++;
  }

  return illegalCar;
}

console.log(solution(3, 25, 23, 11, 47, 53, 17, 33));

function solution2(today, ...numbers) {
  return numbers.filter((num) => num % CHECKNUMBER === today).length();
}
