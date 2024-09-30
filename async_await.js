// async function f1() {
//   return 1;
// }

// f1().then((value) => console.log(value));

// function f2() {
//   return 2;
// }

// let value = f2();
// console.log(value);

async function f3() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!!!"), 1000); 
    // 그냥 바로 console 찍으면 안된다. 함수를 넘겨야함!
    // 바로 console 찍어버리면 아직 resolve에 값이 들어가지 않아서 undefined 상태로 확인됨
  });

  let result = await promise; // await 를 사용하지 않으면 1초 뒤의 값이 들어오지 않기 때문에 undefined 될 것. 이 아니라 pending 상태로 나오네
  console.log(result);
}

f3();