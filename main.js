var res = 1234;
function guess(arg) {
  if (arg == 5678) {
    return {
      A: 0,
      B: 0
    }
  } else if (arg == 1256) {
    return {
      A: 2,
      B: 0
    }
  } else if (arg == res) {
    return {
      A: 4,
      B: 0
    }
  }
}
