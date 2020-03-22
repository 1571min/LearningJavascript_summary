// 객체
const sam1 = {
  name: 'Sam',
  age: 4
};

const sam2 = { name: 'Sam', age: 4 }; // 한줄로도 선언가능

const sam3 = {
  name: 'Sam',
  classification: {
    // 프로퍼티의 값으로 객체가 올수 있다
    kingdom: 'Anamalia',
    phylum: 'chordata',
    class: 'Mamalia',
    order: 'Carnivoria'
  }
};

// Number,String,Boolean 객체
const temp1 = Number('2');
const temp2 = String('2');
const temp3 = Boolean('2');

console.log(temp1); // 2
console.log(temp2); // '2'
console.log(temp3); // true;

// 배열
const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [{ name: 'ruby' }, { name: 'tim' }, { name: 'john' }];
const a4 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
];
