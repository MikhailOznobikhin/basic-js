const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if(!arr|| !Array.isArray(arr)) throw Error
  let ot = []
  if(arr.length === 0) return ot
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] === '--discard-next' && !!arr[i+2]){
      i=i+2;  
    }
    if(arr[i] === '--discard-prev'){
      ot.splice(i-1,i-1)
    }
    if(arr[i] === '--double-next' && !!arr[i+1]){
      ot.push(arr[i+1])
    }
    if(arr[i] === '--double-prev' && !!arr[i-1]){
        if(ot[ot.length-1] === arr[i-1]){
          ot.push(ot[ot.length-1])
        }
    }
  if(arr[i] !== '--double-prev' && arr[i] !== '--double-next' &&
   arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i]
    ){
      ot.push(arr[i])
    }
   
  }
  
  return ot;
};
