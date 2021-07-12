var users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 11 },
  { id: 3, name: "KD", age: 23 },
  { id: 4, name: "OD", age: 17 },
  { id: 5, name: "AP", age: 32 },
  { id: 6, name: "QZ", age: 53 },
  { id: 7, name: "UO", age: 41 },
  { id: 8, name: "MN", age: 22 },
];

// 1. 명령형 코드
// 1-1, 30세 이상인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 1-2. 30세 이상인 users의 names 를 수집한다.
var names = [];
for (var i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// 1-3. 30세 미만인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 1-4. 30세 미만인 users의 ages를 수집한다.
var ages = [];
for (var i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

// 2. _filter, _map으로 리팩토링
// predicate : 조건, 술어.. verb..동사
function _filter(list, predi) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    //if (users[i].age >= 30) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

console.log(
  _filter(users, function (user) {
    return user.age >= 30;
  })
);

console.log(
  _filter(users, function (user) {
    return user.age < 30;
  })
);

// console.log(
//   _filter([1, 2, 3, 4], function (num) {
//     return num % 2;
//   })
// );

// _map
function _map(list, mapper) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    // names.push(temp_users[i].name);
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

var over_30 = _filter(users, function (user) {
  return user.age >= 30;
});
console.log(over_30);

var names = _map(over_30, function (user) {
  return user.name;
});
console.log(names);

var under_30 = _filter(users, function (user) {
  return user.age < 30;
});
console.log(under_30);

var ages = _map(under_30, function (user) {
  return user.age;
});
console.log(ages);
