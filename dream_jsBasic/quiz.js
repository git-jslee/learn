//06. Arrow Function
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate1(command, a, b) {
  if (command === "add") {
    console.log(add(a, b));
  } else if (command === "divide") {
    console.log(divide(a, b));
  } else {
    console.log("error");
  }
}

function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}

calculate1("add", 3, 5);
calculate1("divide", 6, 3);

// elli
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 2, 3));

//09. arrawFunctions.
// Q1. make a string out of an array
{
  let makeString = "";
  const fruits = ["apple", "banana", "orange"];
  for (fruit of fruits) {
    makeString = makeString + " " + fruit;
  }
  console.log(makeString);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  let splitFruits = fruits.split(",");
  console.log(splitFruits);
  // const fruit1 = [];
  // fruits.split
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.splice(2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
console.log(students);
// const makeStudent = students.splice(2);
// console.log(makeStudent);

// Q5. find a student with the score 90
{
  let makeStudent = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score === 90) {
      makeStudent.push(students[i]);
    }
  }
  console.log(makeStudent);
}

// Q6. make an array of enrolled students
{
  let makeStudent1 = [];
  let makeStudent2 = [];
  let makeStudent3 = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].enrolled === true) {
      makeStudent1.push(students[i]);
    }
  }
  console.log(makeStudent1);
  for (let student1 of students) {
    if (student1.enrolled === true) {
      makeStudent2.push(student1);
    }
  }
  console.log(makeStudent2);
  students.forEach((value) => {
    if (value.enrolled === true) {
      makeStudent3.push(value);
    }
  });
  console.log(makeStudent3);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const makeStudent1 = [];
  students.forEach((value) => makeStudent1.push(value.score));
  console.log(makeStudent1);
}

// Q8. check if there is a student with the score lower than 50
{
  const makeStudent1 = [];
  students.forEach((value) => {
    if (value.score < 50) {
      makeStudent1.push(value);
    }
  });
  console.log(makeStudent1);
}

// Q9. compute students' average score
{
  let score = 0;
  students.forEach((value) => {
    score = score + value.score;
  });
  let avgScore = score / students.length;
  console.log(avgScore);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let score = "";
  students.forEach((value) => {
    score = score + "," + value.score;
  });
  console.log(score);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
