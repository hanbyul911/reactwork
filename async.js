a();
setTimeout(function () {
  console.log("2 -- 비동기 함수입니다.")
}, 3000);
c();

function a() {
  console.log("1 -- 동기 함수입니다.");
}

function c() {
  console.log("3 -- 동기 함수입니다.")
}