const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth( arr ) {
    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };

  function f1(item, level = 0){ 
      if (item instanceof Array){
          return item.map(function(value, index){
              return f1(value, level + 1)
          }).max() - (level > 0 ? 0 : 1) // Если главный массив не считаем
      }
      return level;
  }
  f1(arr)
  }
};
