describe('GuessGame', function() {
  var rv = guess(1234);
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
  var rv = guess(5678);
  it('should return 0A0B when call guess', function() {
    assert.deepEqual(rv, { A: 0, B: 0 });
  });
});
describe('insert1256', function() {
  var rv = guess(1256);
  it('should return 2A0B when call guess', function() {
    assert.deepEqual(rv, { A: 2, B: 0 });
  });
});
describe('insert1234', function() {
  var rv = guess(1234);
  it('should return 4A0B when call guess', function() {
    assert.deepEqual(rv, { A: 4, B: 0 });
  });
});
