function f1() {
  console.log('one');
}

function f2() {
  console.log('two');
}

f2();
f1();
f2();
// 위 결과는 각각의 스코프가 어디부터 어디까지 적용되는 지 알 수 있다.

const x = 3;
function f() {
  console.log(x);
  console.log(y);
}

// 함수는 자신이 정의 될 때 접근할 수 있는 스코프의 변수에는 접근이 가능하지만
// 호출할 때 스코프에 있는 변수에는 접근할 수 없다.
{
  const y = 5;
  f();
}
