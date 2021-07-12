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

// _curry
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

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

// _get
var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});
