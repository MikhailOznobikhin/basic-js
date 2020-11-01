const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let otv = []
  let dpstr = [] 
// переменные
orepeat = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
osep = options.hasOwnProperty("separator") ? options.separator  : "+";
dstr = options.hasOwnProperty("addition") ? options.addition : '';
drepeat = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
dsep = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : '|'; 

  // повторения
  let i = 0
  while (i < orepeat){
    otv.push(str);
    i++;
  }  
  // разделитель
  otv = otv.join(osep);  
  // повтроения допстроки
  i = 0
  while (i < drepeat){
    dpstr.push(dstr)
    i++;
  }  
  // разделение допстроки
  dpstr = dpstr.join(dsep);
  
  // допстрока
  otv = otv.split(osep)
  otv.join(dpstr)

  return otv.join(osep);  
};
  