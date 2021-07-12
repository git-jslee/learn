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

// 3. each 만들기
// 3-1 _each 롤 _map, _filter 중복 제거
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


// 3-2 외부 다형성
// a. array_like, arguments, document.querySelectorAll
// map, filter 는 javascript 에는 존재함.
// 존재하는 함수를 만드는 이유는...기존  map, filter 는 매소드임..(함수 아님..즉 순수함수 아님..)
// 매소드는 객체지향 프로그램임..map 함수는 array 가 아니면 사용이 안됨..
// js 는 array like 함수가 많음...ex)JQuery..
console.log([1, 2, 3].map(function(val) {
  return val * 2;
}));
//오류발생..document.querySelectorAll 가 배열아님..
/* 
console.log(
   document.querySelectorAll('*').map(function(node) {
     return node.nodeName;
   })
);
*/

// 만든 _map 함수로 실행 -> 정상동작
console.log(
  _map(document.querySelectorAll('*'), function(node) {
    return node.nodeName;
  })
);

// 3-3. 내부 다형성
// a. predi, iter, mapper
// 함수형 프로그래밍에서는 두번째 함수의 역할에 따라 다양한 이름...predicate(조건, 술어), iter(반복하다), mapper....
// 보조함수의 이름을 따로 불러줌..
