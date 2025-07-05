/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 */

function solution(word) {
  const isEven = word.length % 2 === 0 ? true : false;
  const len = Math.floor(word.length / 2);

  if (isEven) {
    return word.slice(len - 1, len + 1);
  }

  if (!isEven) {
    return word[len];
  }
}

console.log(solution("study"));
console.log(solution("good"));
