// ///////Check Anagram String////////

//Solution 01

// let str1 = "listen";
// let str2 = "silenta";

// let newstr1 = str1.split("");
// let newstr2 = str2.split("");
// console.log({ newstr1, newstr2 });

// let CheckAnagram = (a, b) => {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         b.splice(j, 1);
//         // console.log({ b });
//         if (b.length == 0) {
//           console.log("its angram");
//         } else {
//           console.log("its not anagram");
//         }
//       }
//     }
//   }
// };
// CheckAnagram(newstr1, newstr2);

// ++++++++++++++++++++++++++++=Prob03+++++++++++++++++++++++++++++

let str1 = "listen";
let str2 = "silent";

let newstr1 = str1.split("");
let newstr2 = str2.split("");
// console.log({ newstr1, newstr2 });

let CheckAnagram = (a, b) => {
  let store = [];
  let newstore;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        store.push(b.splice(j, 1));

        newstore = store.flat(); // use for double array to convert into single

        // console.log("store", store);
        // console.log("a", a);
      }
    }
  }

  if (a.length == newstore.length && b.length == 0) {
    console.log("its amgranm");
  } else {
    console.log("its not anagram");
  }
};
CheckAnagram(newstr1, newstr2);
