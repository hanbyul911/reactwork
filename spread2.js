let student1 = {
  name : "hong",
  score : 90
}

let student2 = student1;
let student3 = {...student1};
student2.age = 20;

console.log(student1.age);
console.log(student2.age);
console.log(student3.age);