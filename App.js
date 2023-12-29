// & dynamic
// let a = "hi";
// console.log(a);

// let a = 10;
// console.log(a);

// & synchronous
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");

// & interpreted
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");

// & single threaded
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// & weekly and loosly typed language
// le ole.log(a);

// & var, let and const

// & declaration
// var a;
// & initialization
// a = 20;
// console.log(a);

// & dec and int in same line
// var a = 10;
// console.log(a);

// & reinitialization
// a = 60;
// console.log(a);

// & re-declaration
// var a = 10;
// console.log(a);
// var a;

// & re-declaration & reinitialization
// var a = 10;
// console.log(a);
// var a = 1000;
// console.log(a);

// & let keyword

// & declaration
// let a;

// & initialization
// let a = 10;
// console.log(a);

// & redeclaration // Cannot redeclare block-scoped variable 'a'
// let a = 20;
// console.log(a);
// let a;

// & reinitialization
// let a = 100;
// console.log(a);
// a = 20;
// console.log(a);

// & re-declaration & reinitialization // Cannot redeclare block-scoped variable 'a'
// let a = 10;
// console.log(a);
// let a = 30;
// console.log(a);

// & const
// & declaration // 'const' declarations must be initialized.
// const a;

// & declartion and initialization
// const a = 20;
// console.log(a);

// & redeclaration // 'const' declarations must be initialized. Cannot redeclare block-scoped variable 'a'.
// const a=10
// const a

// & re-declaration & reinitialization // Cannot redeclare block-scoped variable 'a'
// const a=10
// const a=20

// & javascript output methods
// & console.log()
// & document.write()
// & alert()
// & confirm()
// & prompt()

// & 1. console.log
// console.log("abc");

// & 2. document.write()
// document.write("hiii");
// document.write(" hello");
// document.write("<br>");
// document.write("skanda");

// & 3.alert()
// let s = alert("hiiii");

// & 4.confirm()
// let b = confirm("abcdefghijklmnopqrtuvwxyz");
// console.log(b);

// & 5.prompt()
// let a = prompt("enter your name");
// console.log(a);
// ;console.log("abc")     it will execute

// ^ Identifiers
// & identifiers names must start with either a letter,an underscore _, or the dollar sign $
// let abc = 20;
// console.log(abc);
// & _
// let _a = 30;
// console.log(_a);
// & $
// let $abc = 80;
// console.log($abc);
// & _,$
// let _ = "a";
// console.log(_);
// let $ = 20;
// console.log($);

// & keywords cannot be used as identifier names
// let true=a  Variable declaration not allowed at this location.

// & Javascript is case sensitive. So y and Y are different identifiers.
// let y = 10;
// console.log(y);
// console.log(Y);  Y is not defined

// & identifiers names cannot start with numbers
// let 1aa=10     An identifier or keyword cannot immediately follow a numeric literal.

// ^ Datatypes
// & Number
// let a = 10;
// console.log(a);
// & String
// let b = "abcdefghijklmnopqrstuvwxyz";
// console.log(b);
// & boolean
// let c = true;
// console.log(c);
// & Bigint
// let d = 123845844876876386583465873645873650283764583652837652836528365836;
// console.log(d);
// let e = 123845844876876386583465873645873650283764583652837652836528365836n;
// console.log(e);
// & undefined
// let f;
// console.log(f);
// let g = undefined;
// console.log(g);
// & null
// let h = null;
// console.log(h);
// console.log(typeof h);   typeof null is object
// & symbol
// let g = Symbol(10);
// console.log(g);
// console.log(typeof g);

// ^ Type conversion
// converts datatype
// & Implicit
// console.log(1 + 3);
// console.log(6 - 4);
// console.log(1 * 5);
// console.log(3 / 2);
// console.log(1 + "111");
// console.log(1 - "111");
// console.log(2 * "4");
// console.log(1 + "hi");
// console.log(1 * "hi");
// console.log("10" / "10");
// console.log("10" + "hello");
// console.log(10 - "true");
// console.log(10 - true);
// console.log(true + true);
// console.log(false + true - false);

// ^ Typeof
// console.log(typeof a);
// console.log(typeof 20);
// console.log(typeof "hi");
// console.log(typeof null);
// console.log(typeof 1 + 9);
// console.log(typeof 1 * 3);
// console.log(typeof 3 + "hi");
// console.log(typeof typeof 1);
// console.log(typeof typeof typeof 39434);
// console.log(typeof Number);
// console.log(typeof Number());
// console.log(typeof String);
// console.log(typeof String());

// & How can you prove window and this keyword are same. answer is below

// ! 1.
// console.log(window);
// console.log(this);

// ! 2.
// console.log(window == this);

// ! 3.
// var a = 20;   // ^ use only var
// console.log(window.a);
// console.log(this.a);

// & Explicit
// let a = Number(prompt("enter first number"));
// let b = Number(prompt("enter second number"));
// console.log(a + b);

// let c = parseInt(prompt("enter first number"));
// let d = parseInt(prompt("enter second number"));
// console.log(c + d);
// console.log(10 + +"hi");
// console.log(10 + +"1");
// console.log("10" + +"1");
// console.log(10 + -"2");
// ^ Scope
// & Global scope and script scope
// & Local scope and function scope
// & Block scope

// ! global scope
// var a = 20;
// console.log(a);
// ! script scope
// let b = 30;
// console.log(b);
// const c = 10;
// console.log(c);

// ! block scope
// var a = 10;
// let b = 20;
// const c = 30;
// {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   var d = 40;
//   let e = 50;
//   const f = 60;
// }
// console.log(d);
// console.log(e); // let and const are block scope whereas var is global scope

// z = 10;
// console.log(z); //^ this is also of global scope

// ! Function or local scope
// var a = 10;
// let b = 20;
// const c = 30;
// function demo() {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   var d = 10;
//   let e = 20;
//   const f = 30;
// }
// demo();
// console.log(f); // ^ this is in local scope so it will show error

// "use strict" is used to avoid identifier being declared without any keyword. eg. a=10;

// Unary operator

// 1
// let x = 0;
// let y = 0;

// x = x + ++x - ++x + --x + y;
// console.log(x); // ^ 0

// y = --y - ++x - ++y - x++ + x++ - x++ - y;
// console.log(y);  // ^ -4

// x = --x - ++x + --y + ++x - y + x + 1 + --y;
// console.log(x);  //^ 0

// y = x + y + ++y + y++ - x++ + --y + 2 + x++;
// console.log(y);  //^ 6

// x = -y - x-- + x++ - x++ - ++y - ++x - --y;
// console.log(x);  //^ -4

// x = --x + ++x - --y - ++x + y - x - 1 - --y;
// console.log(x); //^ -2

// x = y + x + ++x + x++ + --x + 2 + --y;
// console.log(x); //^ 4

// x = x + y++ - y-- + y-- + --x + --y + ++x;
// console.log(x); //^ -4

// prime number
// let count = 0;
// let number = 251;
// let result = true;

// for (let i = 2; i <= number; i++) {
//   if (number % i === 0) {
//     count++;
//     if (number === i && count === 1) {
//       result = true;
//     }
//   } else {
//     result = false;
//   }
// }

// if (result == true) {
//   console.log("prime number");
// } else {
//   console.log("not prime");
// }

// let number;
// let end = 70;
// for (let i = 1; i <= end; i++) {
//   number = 3 * i;
//   if (number <= end) {
//     console.log(number);
//   }
// }

// let n = 986;
// let count = 0;
// for (let i = 2; i <= n; i++) {
//   if (n % i === 0) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         count++;
//         if (i === j && count === 2) {
//           console.log(i);
//           count = 0;
//         }
//       }
//     }
//   }
// }

// let i = "abc";
// for (let i = 1; i <= 10; i++) {
//   let i = 10;
//   console.log(i);
// }
// console.log(i);

// let abc = function (i, m, n) {
//   let i = 1;
//   console.log(i, m, n);
// };
// abc(5, 6, 7);

// ^ reverse string
// let s = "hello world";
// let res = s.split("").reverse().join("");
// console.log(res);

// ^ total of an array

// for (let i = 0; i < 5; i++) {
//   let a = prompt("enter 5 numbers");
//   if (a == null) {
//     break;
//   } else {
//     arr[i] = Number(a);
//   }
// }

// ^ important
// let arr = [];
// let i = 0;
// while (true) {
//   let a = prompt("enter numbers");
//   if (a == null) {
//     break;
//   } else {
//     arr[i] = Number(a);
//     i++;
//   }
// }

// let sum = (para) => {
//   let total = 0;
//   for (let ele of para) {
//     total += ele;
//   }
//   console.log(total);
// };

// sum(arr);

// ^ check if first letter of every element starts with M

// let arr = [
//   "hello",
//   "watch",
//   "mobile",
//   "modal",
//   "pot",
//   "Metro",
//   "a mango",
//   "mango",
//   "water",
// ];
// for (let ele of arr) {
//   if (ele[0] == "m" || ele[0] == "M") {
//     console.log(ele);
//   }
// }

// let res = arr.filter((ele) => ele.startsWith("m") || ele.startsWith("M"));
// console.log(res);

// ^
// let a = ["1xy5z", "m9no8p", "2ab1x", "3abx2", "xy"];
// let res = a.filter((ele) => {
//   let check = false;
//   for (let element of ele) {
//     if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
//       check = true;
//     }
//   }
//   return check;
// });

// console.log(res);

// let res2 = res.map((ele) => {
//   let char = 0;
//   for (let element of ele) {
//     if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
//       char += Number(element);
//     }
//   }
//   return char;
// });
// console.log(res2);

// let students = [
//   {
//     name: "rajkumar",
//     dept: "cse",
//     age: 31,
//   },
//   {
//     name: "sheela",
//     dept: "ise",
//     age: 18,
//   },
//   {
//     name: "ramkumar",
//     dept: "civil",
//     age: 50,
//   },
//   {
//     name: "saara",
//     dept: "cse",
//     age: 19,
//   },
//   {
//     name: "ramkumar",
//     dept: "civil",
//     age: 50,
//   },
//   {
//     name: "ramkumar",
//     dept: "civil",
//     age: 50,
//   },
//   {
//     name: "saara",
//     dept: "cse",
//     age: 19,
//   },
//   {
//     name: "ramkumar",
//     dept: "civil",
//     age: 50,
//   },
//   {
//     name: "ramakumar",
//     dept: "civil",
//     age: 10,
//   },
// ];

// ^ 1. get the cse dept
// let result = students.filter((student) => student.dept === "cse");
// console.log(result);

// ^ 2.store the student names in a new array
// let res = students.map((student) => student.name.toUpperCase());
// console.log(res);

// ^ 3. find the students whose age is less than 20 and store their name in a new array
// let res = students.filter((student) => student.age < 20);
// let res2 = res.map((student) => student.name);
// console.log(res2);

// ^ 4. remove a student from civil
// let res = students.filter((student) => student.dept !== "civil");
// console.log(res);

// let res = students.findIndex((student) => student.dept === "civil");

// for (let i = 0; i < students.length; i++) {
//   if (students[i].dept === "civil") {
//     students.splice(i, 1);
//   }
// }

// let i = 0;
// while (i < students.length) {
//   let res = students.findIndex((student) => student.dept == "civil");
//   students.splice(res, 1);
//   i++;
// }

// ^ to remove every civil in object using for loop
// for (let i = 0; i < students.length; i++) {
//   for (let ele of students) {
//     if (ele.dept === "civil") {
//       let res = students.indexOf(ele);
//       console.log(res);
//       students.splice(res, 1);
//     }
//   }
// }
// console.log(students);

// ^ palindrome number
// let pal = (x) => {
//   let reverse = "";
//   let abc = String(x);

//   for (let i = 0; i < abc.length; i++) {
//     reverse = abc[i] + reverse;
//   }
//   console.log(reverse);
//   if (reverse === abc) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };

// pal(-12121);

// ^ date

// let dateformat = (date) => {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let fulldate;

//   if (month < 10) {
//     fulldate = `${year}-0${month}-${day}`;
//   } else {
//     fulldate = `${year}-${month}-${day}`;
//   }

//   return fulldate;
// };

// console.log(dateformat(new Date("2013-2-12")));

// // ^ 2023-sep-12
// let getDate1 = (date) => {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   switch (month) {
//     case 1:
//       month = "jan";
//       break;
//     case 2:
//       month = "feb";
//       break;
//     case 3:
//       month = "mar";
//       break;
//     case 4:
//       month = "apr";
//       break;
//     case 5:
//       month = "may";
//       break;
//     case 6:
//       month = "jun";
//       break;
//     case 7:
//       month = "jul";
//       break;
//     case 8:
//       month = "aug";
//       break;
//     case 9:
//       month = "sept";
//       break;
//     case 10:
//       month = "oct";
//       break;
//     case 11:
//       month = "nov";
//       break;
//     case 12:
//       month = "dec";
//       break;
//     default:
//       month = null;
//   }
//   return `${year}-${month}-${day}`;
// };

// console.log(getDate1(new Date("2033-6-12")));

// // ^ 25-sep-2023
// let getDate2 = (date) => {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   switch (month) {
//     case 1:
//       month = "jan";
//       break;
//     case 2:
//       month = "feb";
//       break;
//     case 3:
//       month = "mar";
//       break;
//     case 4:
//       month = "apr";
//       break;
//     case 5:
//       month = "may";
//       break;
//     case 6:
//       month = "jun";
//       break;
//     case 7:
//       month = "jul";
//       break;
//     case 8:
//       month = "aug";
//       break;
//     case 9:
//       month = "sept";
//       break;
//     case 10:
//       month = "oct";
//       break;
//     case 11:
//       month = "nov";
//       break;
//     case 12:
//       month = "dec";
//       break;
//     default:
//       month = null;
//   }
//   return `${day}-${month}-${year}`;
// };

// console.log(getDate2(new Date("2013-6-12")));

// let res = (str) => {
//   let count = 0;
//   let newstr = "";
//   for (let char of str) {
//     if (char == "a") {
//       count++;
//       if (count >= 4) {
//         newstr += "a";
//         continue;
//       } else {
//         newstr += "A";
//       }
//     } else {
//       newstr += char;
//     }
//   }
//   return newstr;
// };
// console.log(res("aashirvaad"));

// let res = (date) => {
//   let newdate = new Date(date);
//   console.log(newdate);
//   let week = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//   ];
//   let number = newdate.getDay();
//   for (let i in week) {
//     if (i == number) {
//       return week[i];
//     }
//   }
// };
// console.log(res("2001-2-10"));

// ^ get AGE
// let birth = new Date("2-10-2001");
// let current = new Date();
// console.log(current.getFullYear() - birth.getFullYear());

// let month = current.getMonth() - birth.getMonth();
// console.log(month);
// console.log(current.getDate() - birth.getDate());
// console.log(current.getDate());

// console.log(current.getDay());
// console.log(birth.getDay());

// let abc = document.getElementsByClassName("a");
// console.log(abc);

// let xyz = document.getElementsByTagName("h1");
// console.log(xyz);
// let button = document.getElementById("hide2");
// let banner = document.querySelector(".hideshow img");
// let banner2 = document.querySelector(".hideshow .change");

// function clickhide() {
//   banner.style.visibility = "hidden";
// }

// function clickshow() {
//   banner.style.visibility = "visible";
// }
// let x = 0;
// function toggle() {
//   if (x === 0) {
//     banner2.style.visibility = "hidden";
//     button.textContent = "show";
//     x = 1;
//   } else {
//     banner2.style.visibility = "visible";
//     button.textContent = "hide";
//     x = 0;
//   }
// }

// ^banner image with slider and pagination
let bannerimg = document.querySelector(".banner-image img");
let pagination = document.querySelectorAll(".pagination div");

let images = [
  "./image1.jpeg",
  "./image2.jpeg",
  "./image3.jpeg",
  "./image4.avif",
];
let count = 0;
pagination[count].classList.add("pagecolor");

function right() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  bannerimg.src = images[count];
  pagination[count].classList.add("pagecolor");

  if (count === 0) {
    pagination[images.length - 1].classList.remove("pagecolor");
  } else {
    pagination[count - 1].classList.remove("pagecolor");
  }
}

function left() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  bannerimg.src = images[count];
  pagination[count].classList.add("pagecolor");

  if (count === images.length - 1) {
    pagination[0].classList.remove("pagecolor");
  } else {
    pagination[count + 1].classList.remove("pagecolor");
  }
}

// ^ counter
// let counts = document.getElementById("counts");
// let increment = document.querySelector(".increment");
// let remove = document.querySelector(".remove");
// let counter = 0;
// function counters() {
//   if (counter < 10) {
//     counter++;
//     counts.innerHTML = counter;
//   }
//   if (counter === 10) {
//     remove.style.display = "none";
//   }
// }

// function removes() {
//   increment.removeEventListener("click", counters);
// }
// increment.addEventListener("click", counters);
// remove.addEventListener("click", removes);

// ^ adding html elements using js

// let body = document.body;
// let form = document.createElement("form");
// form.action = "./image4.avif";

// let user = document.createElement("input");
// user.type = "text";
// user.placeholder = "Username";

// let pass = document.createElement("input");
// pass.type = "password";
// pass.placeholder = "password";

// let submit = document.createElement("input");
// submit.type = "submit";

// body.prepend(form);
// form.append(user);
// form.append(pass);
// form.append(submit);

// ^start stop reset

let countvalue = document.getElementById("countvalue");
let counting = 0;
let time;
let start = document.getElementById("start");
let stops = document.getElementById("stop");

function startTime() {
  time = setInterval(() => {
    countvalue.innerHTML = `${++counting}`;
  }, 1000);
  start.removeEventListener("click", startTime);
  stops.addEventListener("click", stopTime);
}
start.addEventListener("click", startTime);

function stopTime() {
  clearInterval(time);
  stops.removeEventListener("click", stopTime);
  start.addEventListener("click", startTime);
}
stops.addEventListener("click", stopTime);

function reset() {
  counting = 0;
  countvalue.innerHTML = `${counting}`;
  clearInterval(time);
}

// function m1(a, b) {
//   console.log(arguments);
//   console.log(arguments.length);
// }
// m1(1, 2);

// ^ get max number in an array
// let arr = [1, 6, 9, 23312, 3000, 283, 0];
// let max;
// let countarr;

// for (let i = 0; i < arr.length; i++) {
//   countarr = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       countarr++;
//       if (countarr === arr.length - 1) {
//         max = arr[i];
//       }
//     }
//   }
// }
// console.log(max);

// ^ sort the array without inbuilt methods
// let arr = [1, 6, 9, 23312, 3000, 283, 0];
// let newarr;
// // let countarr;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j + 1]) {
//       if (arr[j] - arr[j + 1] > 0) {
//         newarr = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = newarr;
//       } else {
//         newarr = arr[j];
//         newarr = arr[j + 1];
//       }
//     }
//   }
// }
// console.log(arr);

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements arr[i] and arr[i+1]
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
let arr = [23312, 3000, 283, 0];
console.log(bubbleSort(arr));
