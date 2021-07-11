// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruists = ["사과", "바나나"];
console.log(fruists);
console.log(fruists[0]);

// 3. Looping over an array
// a. for
for (let i = 0; i < fruists.length; i++) {
  console.log(fruists[i]);
}

// b. for of
for (let fruit of fruists) {
  console.log(fruit);
}

// c. forEach
fruists.forEach(function (fruit, index, array) {
  console.log(fruit, index);
});

fruists.forEach((fruit) => console.log(fruit));

// 4. addtion, deletion, copy
// push: add an item to the end
fruists.push("딸기", "복숭아");

// pop: remove an item for the end
fruists.pop();

// unshift: add an item to the benigging
fruists.unshift("딸기", "레몬");
console.log(fruists);

// shift: remove an item from the benigging
// shift, unshift 는 속도가 매우 느리다..
fruists.shift();
fruists.shift();
console.log(fruists);

// splice: remove an item by index position
fruists.push("딸기", "복숭아", "레몬");
console.log(fruists);
fruists.splice(1, 1); //지정 index 부터 1개 삭제
fruists.splice(1); //지정 index 부터 이후 모두 삭제
fruists.splice(1, 1, "사과", "복숭아"); //지정 index 부터 1개 삭제 후 '사과', '복숭아'추가
console.log(fruists);

// combine two arrays
const fruists2 = ["자두", "망고"];
const newFruits = fruists.concat(fruists2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruists);
console.log(fruists.indexOf("사과"));
console.log(fruists.indexOf("수박")); //값이 없을경우 '-1' 출력
console.log(fruists.includes("수박")); //false

// lastIndexOf
fruists.push("사과");
console.log(fruists.indexOf("사과"));
console.log(fruists.lastIndexOf("사과"));
