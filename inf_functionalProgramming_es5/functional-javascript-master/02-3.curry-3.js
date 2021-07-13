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

// 3. 커링
// 함수와 인자를 다루는 기법..함수에 인자를 하나씩 적용하다
// 필요한 인자가 모두 채워지면..함수 본체를 실행하는 기법
// JS 는 커링 지원하지 않지만..구현 가능..
// 3-1. _curry, _curryr
// 인자를 2개 넣으면 오류 발생..
// console.log(add(3, 5));

function _curry(fn) {
  return function (a, b) {
    // 3항연산자
    // return arguments.length == 2 ? fn(a,b):function(b){return fn(a,b);};
    if (arguments.length == 2) return fn(a, b);
    return function (b) {
      return fn(a, b);
    };
  };
}

var add = _curry(function (a, b) {
  return a + b;
});

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

var sub = _curryr(function (a, b) {
  return a - b;
});

// 3-2. _get 만들어 좀 더 간단하게 하기..
// 오브젝트에 있는 값을 안전하게 참조하는 함수

// 기존 코드 수정
/*
function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}
*/

var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

var user1 = users[0];
console.log(user1.name);
console.log(_get(user1, "name"));
console.log(_get("name")(user1));

var get_name = _get("name");
console.log(get_name(user1));
console.log(get_name(users[3]));
console.log(get_name(users[4]));

console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    function (user) {
      return user.name;
    }
  )
);

// _get 함수로 변경
console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get("name")
  )
);
