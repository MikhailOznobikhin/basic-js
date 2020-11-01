const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(arr){
    this.arr = arr;
  }

  calculateDepth(arr) {
    var self = this;

    return Array.isArray(arr) ? 1 + arr.reduce(function(a, b) {
      return Math.max(a, self.calculateDepth(b));
    }, 0) : 0;
  };
};