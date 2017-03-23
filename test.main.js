describe('GuessGame', function() {
  var rv = guess('1234');
  it('should return Object when call guess', function() {
    assert.typeOf(rv, 'object');
  });
  it('should return Property A when call guess', function() {
    assert.property(rv, 'A');
  });
  it('should return Property B when call guess', function() {
    assert.property(rv, 'B');
  });
});
describe('insert5678', function() {
  var rv = guess('5678');
  it('should return 0A0B when call guess', function() {
    assert.deepEqual(rv, { A: 0, B: 0 });
  });
});
describe('insert4999', function() {
  var rv = guess('4999');
  it('should return 0A1B when call guess', function() {
    assert.deepEqual(rv, { A: 0, B: 1 });
  });
});
describe('insert4399', function() {
  var rv = guess('4399');
  it('should return 0A2B when call guess', function() {
    assert.deepEqual(rv, { A: 0, B: 2 });
  });
});
describe('insert4329', function() {
  var rv = guess('4329');
  it('should return 0A3B when call guess', function() {
    assert.deepEqual(rv, { A: 0, B: 3 });
  });
});
describe('insert4321', function() {
  var rv = guess('4321');
  it('should return 0A4B when call guess', function() {
    assert.deepEqual(rv, { A: 0, B: 4 });
  });
});


describe('insert1678', function() {
  var rv = guess('1678');
  it('should return 1A0B when call guess', function() {
    assert.deepEqual(rv, { A: 1, B: 0 });
  });
});
describe('insert1389', function() {
  var rv = guess('1389');
  it('should return 1A1B when call guess', function() {
    assert.deepEqual(rv, { A: 1, B: 1 });
  });
});
describe('insert1329', function() {
  var rv = guess('1329');
  it('should return 1A2B when call guess', function() {
    assert.deepEqual(rv, { A: 1, B: 2 });
  });
});
describe('insert1324', function() {
  var rv = guess('1423');
  it('should return 1A3B when call guess', function() {
    assert.deepEqual(rv, { A: 1, B: 3 });
  });
});


describe('insert1256', function() {
  var rv = guess('1256');
  it('should return 2A0B when call guess', function() {
    assert.deepEqual(rv, { A: 2, B: 0 });
  });
});
describe('insert1246', function() {
  var rv = guess('1246');
  it('should return 2A1B when call guess', function() {
    assert.deepEqual(rv, { A: 2, B: 1 });
  });
});
describe('insert1243', function() {
  var rv = guess('1243');
  it('should return 2A2B when call guess', function() {
    assert.deepEqual(rv, { A: 2, B: 2 });
  });
});

describe('insert1236', function() {
  var rv = guess('1236');
  it('should return 3A0B when call guess', function() {
    assert.deepEqual(rv, { A: 3, B: 0 });
  });
});


describe('insert1234', function() {
  var rv = guess('1234');
  it('should return 4A0B when call guess', function() {
    assert.deepEqual(rv, { A: 4, B: 0 });
  });
});
