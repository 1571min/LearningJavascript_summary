function f(o) {
    o.message='f안에서 수정함 이전 값 '+o.message;
}

let o={
    message:"초기값"
}
console.log(o.message);
f(o);
console.log(o.message);