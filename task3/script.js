function print() {
  let arr = [];
  let totalSum = 0;

  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
    if (i % 2 == 0) totalSum += i;
  }

  console.log(totalSum);
}
