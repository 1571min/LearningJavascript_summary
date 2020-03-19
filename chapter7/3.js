let name = 'Irena';
let age = 25;

function greet(params) {
  console.log(`Hello ${name}!`);
}

function getBirthYear(params) {
  return new Date().getFullYear() - age;
}
// 위와 같은 방식은 변수가 전역변수이기 때문에 아무나 접근해서 바꿀 수 있다
// 아래와 같이 수정하면 바람직하다

let user = {
  name2: 'Irena',
  age: 25
};

function greet2(params) {
  console.log(`Hello ${name}!`);
}

function getBirthYear2(params) {
  return new Date().getFullYear() - age;
}

const os = require('os');

console.log('시스템의 hostName : %s', os.hostname);
