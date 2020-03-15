//화살표 표기법
//ES6 부터 생긴 화살표 표기법은   f1,f3,f5를 f2,f4,f6 처럼 간략하게 사용이 가능하다
//

const f1=function () {return "hello";}

const f2=()=>"hello!";

const f3=function(name) {return `Hello ${name}!`}
const f4=name=> `Hello ${name}!`;

const f5=function(a,b) {return a+b}
const f6=(a,b)=> a+b;


//화살표 표기법은 this가 정적으로 묶이기 때문에  아래와 같이 이전 장에서 한 예시를 아래같이 바꿀수 있다
const e={
  name:"Julie",
  greetBackwards: function(){
    const getReverseName=()=>{
      let nameBackwards='';
      for(let i=self.name.length-1;i>=0;i--){
        nameBackwards+=this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
}