// class : template
// object : instance of a class

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  //   methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const jslee = new Person("jslee", 40);
console.log(jslee.name);
console.log(jslee.age);
jslee.speak();

// 2. Getter and setters
// Get 으로 값을 리턴하고 Set 으로 값을 설정
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("jaesik", "Lee", -1);
console.log(user1.age);

// 상속, 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모 매소드 호출
    console.log("^^");
  }
  getArea() {
    //매소드 재정의
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(10, 10, "red");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(10, 10, "blue");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
