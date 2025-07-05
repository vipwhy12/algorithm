/**
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지
 * 알아내는 프로그램 을 작성하세요.
 */
function solution(word) {
  let count = 0;

  for (let i of word) {
    if (65 <= i.codePointAt() && 90 >= i.codePointAt()) {
      //if (char >= 'A' && char <= 'Z') { 이것도 가능함.
      count++;
    }
  }

  return count;
}

console.log(solution("KoreaTimeGood"));
