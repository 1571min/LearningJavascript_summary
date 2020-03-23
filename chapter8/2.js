const arr = [1, 2, 3];
console.log(arr.concat(4, 5, 6));
console.log(arr.concat([4, 5, 6]));
console.log(arr.concat([4, 5], 6));
console.log(arr.concat([4, [5, 6]]));
console.log(arr); // 원본 보존

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.slice(3));
console.log(arr2.slice(2, 4));
console.log(arr2.slice(-2));
console.log(arr2.slice(1, -2));
console.log(arr2.slice(-2, -1));
console.log(arr2); // 원본 보존

// 특정 값으로 배열 채우기
const arr3 = new Array(5).fill(1);
arr3.fill('a'); // ["a","a","a","a","a"]
arr3.fill('b', 1); // ["a","b","b","b","b"]
arr3.fill('c', 2, 4); // ["a","b","c","c","b"]
arr3.fill(5.5, -4); // ["a",5.5,5.5,5.5,5.5]
