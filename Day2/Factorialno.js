let num = 10;
let ans = 1;
let factorial = (a) => {
  if (a == 0 || a == 1) {
    return ans;
  } else if (a > 1) {
    for (let i = a; i >= 1; i--) {
      ans = ans * i;
      console.log({ ans });
    }
  } else {
    return -1;
  }
  return ans;
};
console.log(factorial(-1));
