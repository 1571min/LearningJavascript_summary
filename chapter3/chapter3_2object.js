const sam1={
  name:'Sam',
  age:4
}


const sam2={name:'Sam',age:4} //한줄로도 선언가능

const sam3={
  name:'Sam',
  classification :{ //프로퍼티의 값으로 객체가 올수 있다
    kingdom:'Anamalia',
    phylum:'chordata',
    class:'Mamalia',
    order:'Carnivoria',
  }
}


//Number,String,Boolean 객체
let temp1=Number('2');
let temp2=String('2');
let temp3=Boolean('2');

console.log(temp1)
console.log(temp2)
console.log(temp3)