// let arr = [4, 3, 6, 1, 5, 7, 44, 90, 2, 10];
// let temp;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       //   temp = arr[j];
//       //   arr[j] = arr[j + 1];
//       //   arr[j + 1] = temp;

//       //   ^ swap wuthout using third variable
//       //   arr[j] = arr[j] + arr[j + 1];
//       //   arr[j + 1] = arr[j] - arr[j + 1];
//       //   arr[j] = arr[j] - arr[j + 1];

//       // ^ swap using multiplication and division
//       arr[j] = arr[j] * arr[j + 1];
//       arr[j + 1] = arr[j] / arr[j + 1];
//       arr[j] = arr[j] / arr[j + 1];
//     }
//   }
// }

// console.log(arr);

// let s = "zxhdyiawe";
// let x = s.split("");
// console.log(x);

// for (let i = 0; i < x.length; i++) {
//   for (let j = 0; j < x.length; j++) {
//     if (x[j] > x[j + 1]) {
//       [x[j], x[j + 1]] = [x[j + 1], x[j]];
//     }
//   }
// }
// console.log(x);

// ^insertion sort
// let arr = [4, 3, 6, 1, 5, 7, 44, 90, 2, 10];
// let temporary;
// for (let i = 0; i < arr.length; i++) {
//   let j = i - 1;

//   if (arr[i] > arr[i + 1]) {
//     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     let temp = arr[i];
//     while (j >= 0 && arr[j] > temp) {
//       temporary = arr[j];
//       j--;
//     }
//   }
// }
// console.log(arr);
// console.log(arr);

// while (swap) {
//   swap = false;
//   if (i >= 0) {
//     if (arr[i] > arr[i + 1]) {
//       temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       i--;
//       swap = true;
//     }
//   }
// }

function abc(a) {
  if (a > 0) {
    abc(a - 1);
    document.write(a);
  }
}
abc(3);
