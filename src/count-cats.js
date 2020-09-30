const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let score = 0
  matrix.forEach(e=>{
    e.forEach(t => {
        if(t === '^^'){
          score++
        }
    })
  })
  return score
};
