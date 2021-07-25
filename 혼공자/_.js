// let output = "";
// for (let i = 1; i <= 10; i++) {
//   for (let y = 1; y <= i; y++) {
//     output += "*";
//   }
//   output = output + "\n";
// }
// console.log(output);

// // 피라미드
// let output2 = "";
// for (let i = 1; i < 15; i++) {
//   for (let j = 15; j > i; j--) {
//     output2 += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     output2 += "*";
//   }

//   output2 = output2 + "\n";
// }
// console.log(output2);

// //1에서 100까지 곱
// let output3 = 1;
// for (let i = 2; i < 101; i++) {
//   output3 = output3 * i;
// }

// console.log(`1~100의 숫자를 모두 곱하면, ${output3}입니다.`);

// // 피라미드 만들기

// let output4 = "";
// const size = 5;

// for (let i = 1; i <= size; i++) {
//   for (let j = size; j > i; j--) {
//     output4 += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     output4 += "*";
//   }
//   output4 = output4 + "\n";
// }
// for (let i = size - 1; i > 0; i--) {
//   for (let j = size; j > i; j--) {
//     output4 += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     output4 += "*";
//   }
//   output4 = output4 + "\n";
// }
// console.log(output4);

//// 함수
// function sumAll(a, b) {
//   let output = 0;
//   for (let i = a; i <= b; i++) {
//     output += i;
//   }
//   return output;
// }

// console.log(sumAll(1, 100));

// function samples(...arg) {
//   return arg;
// }

// const test = samples(1, 2, 3, 4, 5, 6, 7, 8);

function multiplyAll(a, b) {
  let output = 1;
  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output;
}

console.log(multiplyAll(1, 2));
console.log(multiplyAll(1, 3));

const max = function (array) {
  let output = array[0];
  for (arr of array) {
    if (output < arr) {
      output = arr;
    }
  }
  return output;
};
console.log(max([1, 9, 3, 4]));

const max1 = function (...array) {
  let output = array[0];
  for (arr of array) {
    if (output < arr) {
      output = arr;
    }
  }
  return output;
};
console.log(max1(1, 3, 3, 8));

console.clear();

const max2 = function (first, ...array) {
  let output;
  let items;
  if (Array.isArray(first)) {
    output = first[0];
    items = first;
  } else {
    output = first;
    items = array;
  }

  for (item of items) {
    if (output < item) {
      output = item;
    }
  }
  return output;
};
console.log(max2(10, 3, 3, 14));
console.log(max2([10, 21, 3, 33]));
