let a = [1,2];
let b = a;
let c = [1,2];
let d = [3,4];

let e = [...a, ...d];
let f = [a, d];

// a[0] = 3;
console.log(b[0]);
console.log(a == c);
console.log(e);
console.log(f);
