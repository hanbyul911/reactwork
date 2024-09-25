// object destructuring assignment
// 구조 분해 할당, 즉 객체가 가지고 있는 필드들을 같은 이름을 가진 변수에 할당해준다.

let student = {
  name : "홍길동",
  score : 90,
  age : 20
}

//let name = student.name;
//let score = student.score;

//console.log(`${name}의 점수는 ${score}점 입니다.`);

let {name, score, age} = student;
console.log(name);
console.log('age' in student);
console.log(age in student);

student.school = "kosta";
console.log('school' in student);