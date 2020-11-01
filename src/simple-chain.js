const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {

  },
  addLink(value) {
    if(this.value === undefined){
      this.value = `( ${value} )`
    }else{
      this.value = `${this.value}~~( ${value} )`
    } 
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position <= 0 || position > this.value.split("~~").length ){
      delete(this.value)
      throw Error
    } 
    a = this.value.split("~~")
    a.splice(position-1,1)
    this.value = a.join("~~")
    return this;
  },
  reverseChain() {
    this.value = this.value !== undefined ? this.value.split("~~").reverse().join("~~") : this.value;
    return this;
  },
  finishChain() {
    a= ''
    a = this.value
    delete(this.value)
    return a    
  }
};

module.exports = chainMaker;
