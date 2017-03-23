var res = '1234';
function guess(arg) {
  var re = {
    right: 0,
    match: 0,
  }
  if (arg.length != 4) {
    return
  } else {
    var rightidex = [];
    for (var i = 0, arglen = arg.length; i < arglen; i++) {
      for (var j = 0, reslen = res.length; j < reslen; j++) {
        if (i == j && arg[i] == res[j]) {
          re.right++;
          rightidex.push(i);
        }
      }
      if (res.indexOf(arg[i]) > -1 && !isInArray(i, rightidex)) {
        re.match++;
      }
    }
  }
  return {
    A: re.right,
    B: re.match
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
