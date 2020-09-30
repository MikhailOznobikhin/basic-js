const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  otv = {
    turns: 0,
    seconds: 0
  }

  otv.turns = 2**disksNumber - 1;
  otv.seconds = Math.floor(otv.turns/(turnsSpeed/3600))

  return otv

};
