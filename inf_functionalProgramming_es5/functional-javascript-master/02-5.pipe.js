// 5. 파이프라인 만들기
// 5-1. _pipe : reduce 를 통해서 만들 수 있으며
// 함수를 인자로 받아서..이 함수를 연속적으로 실행해주는 함수..함수를 리턴하는 함수..
// 파이프의 추상화된 버전이 reduce..
// 파이프에서 함수를 넘길때 Array 로 넘기지 않고 인자로 넘김..객체 생성을 줄이기위해, 좀더 좋은 표현력을 위해..

function _pipe() {
  var fns = arguments;
  return function (arg) {
    return _reduce(
      fns,
      function (arg, fn) {
        return fn(arg);
      },
      arg
    );
  };
}

var f1 = _pipe(
  function (a) {
    return a + 1;
  }, // 1 + 1
  function (a) {
    return a * 2;
  }, // 2 * 2
  function (a) {
    return a * a;
  }
);

console.log(f1(1));

// 5-2. _go
// 즉시실행되는 파이프 함수..첫번째 인자를 받고..순서대로 함수를 연속 실행
function _go(arg) {
  // 첫번째 값 제외한 값이 함수...
  var fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}

_go(
  1,
  function (a) {
    return a + 1;
  },
  function (a) {
    return a * 2;
  },
  function (a) {
    return a * a;
  },
  console.log
);

// 5-3. users에 _go 적용
// 표현력 좋게 코드 변환 가능..
/*
console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    _get("name")
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get("age")
  )
);
*/

_go(
  users,
  function (users) {
    return _filter(users, function (user) {
      return user.age >= 30;
    });
  },
  function (users) {
    return _map(users, _get("name"));
  },
  console.log
);

_go(
  users,
  function (users) {
    return _filter(users, function (user) {
      return user.age < 30;
    });
  },
  function (users) {
    return _map(users, _get("age"));
  },
  console.log
);

// 기존
console.log(
  _map([1, 2, 3], function (val) {
    return val * 2;
  })
);
// curryr 적용
console.log(
  _map(function (val) {
    return val * 2;
  })([1, 2, 3])
);

_go(
  users,
  _filter(function (users) {
    return users.age >= 30;
  }),
  _map(_get("name")),
  console.log
);
