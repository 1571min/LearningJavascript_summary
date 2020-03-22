// 즉시 호출하는 함수 표현식  IIFE
const message = (function() {
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} characters long`;
})();

console.log(message);

// 카운트 보존
// 클로저
const f = (function() {
  let count = 0;
  return function() {
    return `I have been called ${++count} time(s)`;
  };
})();

console.log(f());
console.log(f());
