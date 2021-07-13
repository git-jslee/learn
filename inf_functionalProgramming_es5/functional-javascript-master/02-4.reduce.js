// 4. _reduce 만들기
// 축약하는 함수
// memo -> 시작값
// 동작 설명
/*
memo = add(0, 1)
memo = add(memo, 2)
memo = add(memo, 3)
return memo
--> add(add(add(0, 1), 2), 3);
*/
var slice = Array.prototype.slice;
// list 를 받고, 자를 만큼 num 을 받아서,..
function _rest(list, num) {
  return slice.call(list, num || 1);
  //list.slice(1);
  //slice.call(list, 1);
}

function _reduce(list, iter, memo) {
  //return iter(iter(iter(0, 1), 2), 3);
  if (arguments.length == 2) {
    memo = list[0];
    //list = lists.slice(1); --> array 만 가능
    list = _rest(list);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

// _reduce([1,2,3], add, 0);
console.log(_reduce([1, 2, 3], add, 10));

console.log(_reduce([1, 2, 3], add));
