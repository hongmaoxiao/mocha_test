describe('GuessGame', function() {
  it('should return xAxB when call guess', function() {
    var rv = guess('1234');
    assert.isOk(rv.match(/\d+A\d+B/));
  });
});
