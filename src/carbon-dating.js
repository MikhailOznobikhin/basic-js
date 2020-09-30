const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(isNaN(+sampleActivity) || typeof(sampleActivity) !== 'string' ||
  !/^[0-9.]+$/.test(sampleActivity) || sampleActivity.length === 0 ||
   +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY
  ) return false
  let k = 0.693 / HALF_LIFE_PERIOD
  let ln = Math.log(MODERN_ACTIVITY/sampleActivity)
  let otv = Math.ceil(ln/k)
  return otv
};
