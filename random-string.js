var leftPad = require('left-pad');

function randomString(string) {
  if (typeof string === "number") {
    return "please enter a string"
  }
  if (string === undefined) {
    return "💩";
  }
  return leftPad(string, string.length+10, "🤗");
}
module.exports = randomString;