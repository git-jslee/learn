// Objects
// object = { key : value };
//  1.
const obj1 = {};
const obj2 = new Object();
function print(person) {
  console.log(person.name); // 'object leteral' syntax
  console.log(person.age); // 'object constuctor' syntax
}

const jslee = { name: "jslee", age: 10 };
print(jslee);

jslee.hasJob = true;
console.log(jslee.hasJob);

delete jslee.hasJob;
console.log(jslee.hasJob);

// 2. Computed properties
// key shuld be always string
console.log(jslee.name);
console.log(jslee["name"]);
jslee["hasJob"] = true;

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(jslee, "name");
printValue(jslee, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 7 };
const person3 = { name: "dada", age: 8 };
const person4 = makePerson("bom", 5);
console.log(person4);

function makePerson(name, age) {
  return {
    // name: name,
    // age: age,
    // key, value 같으면 value 생략 가능
    name,
    age,
  };
}

// 순수하게 object 생성하는 함수는 첫글자를 대문자로..
// 호출시에도 new...
// 4. Constuctor function..
const person5 = new Person("elile", 20);
console.log(person5);
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in jslee);

// 6. for .. in va for.. of
// for (key in obj)
console.clear();
for (key in jslee) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 8];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user);

// 복사하기 old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

// 복사하기 new
const user4 = {};
Object.assign(user4, user);

const user5 = Object.assign({}, user);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
