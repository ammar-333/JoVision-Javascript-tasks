function btn1() {
  let arr = [];
  let multi3 = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
    if (i % 3 == 0) {
      arr.pop();
      multi3.push(i);
    }
  }

  console.log(multi3);
}

function btn2() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
  }

  for (let i = 101; i <= 150; i++) {
    arr.push(i);
  }

  console.log(arr);
}

function btn3() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
  }

  for (let i = 0; i <= 100; i++) {
    arr[i] += 3;
  }

  console.log(arr);
}

function btn4() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
  }

  console.log(arr[20], arr[40]);
}

function btn5() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
  }

  shuffleArray(arr);
  console.log(arr);

  for (let i = 0; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  console.log(arr);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
