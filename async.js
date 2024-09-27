import { readFileSync, readFile } from 'node:fs';

// sync 부분 -> 1,2,3 순서대로 처리
console.log(1);
// macOS, Linux, and Windows
const data = readFileSync('smpl.txt'); // 읽어온 데이터를 바로 집어넣는 것
console.log(2 + "===>" + data);
console.log(3);

// async 부분 -> 데이터 읽을 동안 다른거 처리
console.log(1);
readFile('smpl.txt', (err, data) => {
  if (err) console.log("해당 파일이 존재하지 않습니다.");
  console.log(2 + "===>" + data);
});
console.log(3); // 먼저 처리함!












// a();
// setTimeout(function () {
//   console.log("2 -- 비동기 함수입니다.")
// }, 3000);
// c();

// function a() {
//   console.log("1 -- 동기 함수입니다.");
// }

// function c() {
//   console.log("3 -- 동기 함수입니다.")
// }