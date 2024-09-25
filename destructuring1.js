// object destructuring assignment
// 구조 분해 할당, 즉 객체가 가지고 있는 필드들을 같은 이름을 가진 변수에 할당해준다.
let arr = [1,2,3,4,5,6,7];

let [a, b, c, ...rest] = arr;
/*
let a = arr[0];
let b = arr[1];
let c = arr[2];
*/

console.log(a);
console.log(b);
console.log(c);
console.log(rest);