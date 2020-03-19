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

{
  const y = 5;
  f();
}
