"use strict"
// var expect = '1234';
function guess(expect, test_case) {
  test_case = test_case.toString();
  expect = expect.toString();
  var res = {
    right: 0,
    match: 0,
  }
  if (test_case.length != 4 || expect.length != 4) {
    return {
      A: 0,
      B: 0
    }
  }
  var right_idex = [];
  for (var i = 0, test_caselen = test_case.length; i < test_caselen; i++) {
    for (var j = 0, expect_len = expect.length; j < expect_len; j++) {
      if (i == j && test_case[i] == expect[j]) {
        res.right++;
        right_idex.push(i);
      }
    }
    if (expect.indexOf(test_case[i]) > -1 && !isInArray(i, right_idex)) {
      res.match++;
    }
  }
  return {
    A: res.right,
    B: res.match
  }
}

function isInArray(val, arr) {
  for (var k = 0, len = arr.length; k < len; k++) {
    if (arr[k] == val) {
      return true;
    }
  }
  return false;
}
