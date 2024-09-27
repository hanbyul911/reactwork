setTimeout(
  (todo) => { console.log(todo);
    setTimeout(
      (todo) => { console.log(todo);
        setTimeout(
          (todo) => { console.log(todo); },
          2000,
          "빨래하기"
        );
      },
      1000,
      "청소하기"
    );
  },
  2000,
  "운동하기"
);
