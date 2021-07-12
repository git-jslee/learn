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

//  _filter
function _filter(list, predi) {
  var new_list = [];
  _each(list, function (val) {
    if (predi(val)) {
      new_list.push(val);
    }
  });
  return new_list;
}

//   _map
function _map(list, mapper) {
  var new_list = [];
  _each(list, function (val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

//  _each
function _each(list, iter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
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

// 3. 커링
// 함수와 인자를 다루는 기법..함수에 인자를 하나씩 적용하다
// 필요한 인자가 모두 채워지면..함수 본체를 실행하는 기법
// JS 는 커링 지원하지 않지만..구현 가능..
// 3-1. _curry, _curryr
function _curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

var add1 = function (a, b) {
  return a + b;
};

console.log(add1(10, 5));
// ==>
var add = _curry(function (a, b) {
  return a + b;
});
var add10 = add(10);
console.log(add10(5));
console.log(add(10)(5));

// 인자를 2개 넣으면 오류 발생..
// console.log(add(3, 5));

// 3-2. _get 만들어 좀 더 간단하게 하기..
