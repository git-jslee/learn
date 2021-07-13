// 6. _each의 외부 다형성 높이기
// 6-1, _each에 null 넣어도 에러 안나게..
var _length = _get("length");
_each(null, console.log);
console.log(
  _filter(null, function (v) {
    return v;
  })
);

_go(
  [1, 2, 3, 4],
  _filter(function (v) {
    return v % 2;
  }),
  _map(function (v) {
    return v * v;
  }),
  console.log
);

_go(
  null,
  _filter(function (v) {
    return v % 2;
  }),
  _map(function (v) {
    return v * v;
  }),
  console.log
);

/*
function _each(list, iter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

var _length = _get("length");

function _each(list, iter) {
  //for (var i = 0; i < list.length; i++) {
  for (var i = 0, len = _length(list); i < len; i++) {
    iter(list[i]);
  }
  return list;
}
*/

// 6-2. _keys 만들기
// 6-3. _keys에서도 _is_object인지 검사하여 null 에러 아나게..
// object.keys 함수를 좀더 안전하게 만든 함수..
console.log(Object.keys({ name: "ID", age: "44" }));
console.log(Object.keys([1, 2, 3, 4]));
console.log(Object.keys(10));
//console.log(Object.keys(null));  -> 에러발생..

console.log(_keys({ name: "ID", age: "44" }));
console.log(_keys([1, 2, 3, 4]));
console.log(_keys(10));
console.log(_keys(null));

function _is_object(obj) {
  return typeof obj == "object" && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

// 6-4. _each 외부 다형성 높이기
// 아래 _each 는 실행 되게 변경..
_each(
  {
    13: "ID",
    19: "GD",
    29: "SW",
  },
  function (name) {
    console.log(name);
  }
);
