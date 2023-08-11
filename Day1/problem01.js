let str = "my name my";

// console.log({ newstr });
let remodub = (n) => {
  let newstr = n.split("");
  // console.log("newn", newstr);

  for (let i = 0; i < newstr.length; i++) {
    for (let j = i + 1; j < newstr.length; j++) {
      if (n[i] === n[j]) {
        newstr.splice(j, 1);
      }
    }

    // console.log(newstr);
  }
  return newstr.join("");
};

console.log(remodub(str));
