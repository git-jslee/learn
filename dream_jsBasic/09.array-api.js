//09. arraw-api
// Q1. make a string out of an array
{
  let makeString = "";
  const fruits = ["apple", "banana", "orange"];
  for (fruit of fruits) {
    makeString = makeString + " " + fruit;
  }
  console.log(makeString);
  // elli
  const result = fruits.join(",");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  let splitFruits = fruits.split(",");
  console.log(splitFruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   array.splice(0, 2);
  console.log(array);
  //   elli
  //  splice 사용시 원본 배열도 수정됨..
  //  slice 사용
  const result = array.slice(2, 5);
  console.log(result);
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

  //   elli
  //   find 콜백함수 포함되어 있으며 콜백함수는 블리언 타입을 리턴( true or false)
  const result = students.find(function (student, index) {
    return student.score === 90;
  });
  console.log(result);
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

  //elli
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const makeStudent1 = [];
  students.forEach((value) => makeStudent1.push(value.score));
  console.log(makeStudent1);

  //elli
  const result = students.map((student) => student.score);
  console.log(result);
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

  //elli
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  let score = 0;
  students.forEach((value) => {
    score = score + value.score;
  });
  let avgScore = score / students.length;
  console.log(avgScore);

  //elli
  const result = students.reduce((prev, curr) => {
    console.log("-------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let score = "";
  students.forEach((value) => {
    score = score + "," + value.score;
  });
  console.log(score);

  //elli
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  //elli
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
