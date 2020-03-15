const bruce={name:"Bruce"};
const madeline={name:"Madeline"};


function greet(){
  return `Hello, I'm ${this.name}`;
}


//call를 이용하여 호출하면 this를 특정한 값으로 할당이 가능하다
greet();
greet.call(bruce);
greet.call(madeline);


function update(birthYear, occupation) {
  this.birthYear=birthYear;
  this.occupation=occupation;
}

update.call(bruce,1949,'singer');
update.call(madeline,1942,'actress')

//apply는 매개변수를 배열로 전달이 가능하다
update.apply(bruce,[1955,"actor"]);
update.apply(madeline,[1918,"writer"]);


//bind를 이용해서 this를 미리 지정이 가능하다
const updateBruce=update.bind(bruce);

updateBruce(1904,"actor");
updateBruce.call(madeline,1274,"king") //이렇게 해도 name bruce로 된다
// 이런문제 떄문에 this가 어디에 묶이는지 파악하기 힘들 경우도 있다


//bind를 아래와 같이 사용이 가능하다
const updateBruce1949=update.bind(bruce,1949);
updateBruce1949("singer,songwriter");
//{name: "Bruce",birthYear : 1949, occupation: "singer, songwriter"}