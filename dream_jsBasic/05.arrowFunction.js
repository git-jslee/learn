function printHello() {
  console.log("Hellow");
}

printHello();

function log(message) {
  console.log(message);
}
log("Hellog@");

//2. Parameters
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
console.log(ellie);
changeName(ellie);
console.log(ellie);

// 4. Rest parameters (added in ES6)
// ... 배열형태로 저장
function printAll(...args) {
  //   for (let i = 0; i < args.length; i++) {
  //     console.log(args[i]);
  //   }
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("drean", "coding", "ellie");

// Function expression
const print = function () {
  //anonymous function 익명함수
  console.log("print");
};
print();
const printAgain = print;
printAgain();

const sum = function (a, b) {
  return a + b;
};
console.log(sum(1, 3));

// 2. Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function print() {
  console.log("yes!");
};
const printNo = function () {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// const simplePrint = function () {
//   console.log("simplePrint");
// };

const simplePrint = () => console.log("simplePrint");
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
console.log(simpleMultiply(2, 4));

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
