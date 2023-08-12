let str = "Hello my name is sanket";
let newstr = str.split("");
console.log(newstr);
let reverseWord = (arr) => {
  let save = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    save += arr[i];
    // console.log(save);
  }
  save.toString();
  // console.log(typeof save);
  return save;
};
console.log(reverseWord(newstr));
