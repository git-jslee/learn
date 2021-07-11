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

function _filter(list, predi) {
  var new_list = [];
  //for (var i = 0; i < list.length; i++) {
  //  if (predi(list[i])) {
  //    new_list.push(list[i]); }}
  _each(list, function (val) {
    if (predi(val)) {
      new_list.push(val);
    }
  });
  return new_list;
}

function _map(list, mapper) {
  var new_list = [];
  //for (var i = 0; i < list.length; i++) {
  //  new_list.push(mapper(list[i]));
  //}
  _each(list, function (val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

//each
// iterate : (계산,컴퓨터 처리 절차를) 반복하다.
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
