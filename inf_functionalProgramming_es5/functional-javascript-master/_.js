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

function _is_object(obj) {
  return typeof obj == "object" && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

//  _each
// _each에 null 넣어도 에러 안나게 수정
/*
function _each(list, iter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}
*/
// var _length = _get("length");

function _each(list, iter) {
  //for (var i = 0; i < list.length; i++) {
  for (var i = 0, len = _length(list); i < len; i++) {
    iter(list[i]);
  }
  return list;
}

// _curry
function _curry(fn) {
  return function (a, b) {
    if (arguments.length == 2) return fn(a, b);
    return function (b) {
      return fn(a, b);
    };
  };
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

var add = _curry(function (a, b) {
  return a + b;
});

// _get
function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}
var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

// _reduce
var slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

// 파이프라인.. map, filter 에 curryr 적용
var _map = _curryr(_map),
  _filter = _curryr(_filter);

// _pipe, _go
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

function _go(arg) {
  var fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}
