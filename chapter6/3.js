function f(x) {
  console.log(`f내부 : x ${x}`);
  x=5;
  console.log(`f내부 : x ${x} (할당 후)`);
}

let x = 3;
console.log(`f를 호출하기 전: x = ${x}`);
f(x);
console.log(`f를 호출하기 다음: x = ${x}`);
//함수에서 x를 수정하더라도 그 값이 변한게 없다


function f(o) {
    o.message='f안에서 수정함 이전 값 '+o.message;
}

let o={
    message:"초기값"
}
console.log(o.message);
f(o);
console.log(o.message);
//객체의 값은 수정된 것을 볼 수 있는데 이것이 원시타입와 객체 타입의 차이이다.
//매개변수로 객체를 전달하면 값을 복사하는 것이아니라 참조할 수 있느 값을 전달한다. 이는 객체가 힙에 저장되기 때문이다.


//6.3.2 매개변수 해체_ 객체
//객체의 프로퍼티를 전달할 수 있고 지정되어 있지 않은 프로퍼티는 undefine이 나온다.
function getSentence({subject,verb,object,test}) {
  return `${subject} ${verb} ${object} ${test}`; 
}

const o={
  subject: "I",
  verb:"love",
  object:"JavaScript",
};

getSentence(o);

//6.3.2 매개변수 해체_ 배열
//객체의 프로퍼티를 전달할 수 있고 지정되어 있지 않은 프로퍼티는 undefine이 나온다.
function getSentenceArr([subject,verb,object,test]) {
  return `${subject} ${verb} ${object} ${test}`; 
}

const o=[
  "I",
  "love",
  "JavaScript",
];

getSentenceArr(o);



//확산 연산자(...) 배열처럼 사용이 가능하다

function addPrefix(prefix,...words) {
  const prefixWords=[];
  for (let i = 0; i < words.length; i++) {
    prefixWords[i]=prefix+words[i];
  }
  return prefixWords;
}

addPrefix("con","verse","vex");


//매개변수의 기본값
function f({a,b="default",c=3}) {
  return `${a} - ${b} - ${c}`;
}

f(5,6,7);
f(5,6);
f(5);
f();