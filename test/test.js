var assert = require('assert');
var randomString = require('../random-string');

describe('#randomString()', function() {
  it('should return 10 jazz hands given empty string', function() {
    var result = randomString("");
    assert.equal(result, "🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗");
  });

  it('should return 💩 given undefined', function() {
    var result = randomString();
    assert.equal(result, "💩");
  });

  it('should return descriptive string given a number', function() {
    var result = randomString(1);
    assert.equal(result, "please enter a string");
  });
});