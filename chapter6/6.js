//익명함수

// const g =function (params) {
//   ...
// }  이와 같이 함수를 이름이 없는 함수를 익명함수라고 하고 이를 대입하는 위 표현식을 함수 표현식이라고 한다

//위와 같은 방법 말고도 아래와 같이 이름이 있는 함수를 사용이 가능하다
// const g =function f(params) {
//   ...
// }

// 두함수 표현식의 다른점은 함수 내부적으로 재귀를 호출할 수 있는가 없는 가의 차이이다

const g = function f(stop) {
  if(stop) console.log('f stoped');
  f(true);
};
g(false);