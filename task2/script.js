function print() {
  let arr = [];
  let totalSum = 0;

  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
    totalSum += i;
  }

  console.log(totalSum);
}
