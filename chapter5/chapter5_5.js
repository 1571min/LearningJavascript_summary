let n = 0;
while(true){
  n+=0.1;
  if(Math.abs(n-0.3)<Number.EPSILON) break;
}

console.log(`Stopped at ${n}`);
//Number.EPSILON 을 이용해서 double형식을 느슨하게 비교할 수 있었다.

//단축평가
const skipIt=true;
let x=0;
const result=skipIt||x++;
//위 표현식은  이미 skipIt가 true인 값이기 때문에  x++을 실행하지 않고 표현식을 종료한다
//이렇게 부수적으로 일어나는 x++과 같은 연산을 `부수 효과`라고 한다

const doIt=false;
let x=0;
const result=doIt||x++;
//result는 0이 된다 왜냐면 피연산자가 불리언이 아니라면 결과를 결정한 값이 result에 들어간다 
//이런 효과를 이용하여 아래 예시가 있다

const options=suppliedOptions || {name:"Default"}
//위 표현식은 suppliedOptions가 정의가 되어 있지 않으면 항상 Default를 가진 객체로 초기화 된다
//왜냐하면 객체는 항상 trusy한 값이기 때문이다.


let x = 0, y = 10, z;
z=(x++,y++);
//z는 10이된다. 쉼표연산자는 연산을 두 표현식을 결합하여 평가한 후 두번째 식을 반환한다.