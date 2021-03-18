
let basket = require('./bagel-object.js')

class Tests {

  constructor(item, itemArr) {
    this.item = item;
    this.itemArr = itemArr;
  }

  checkIfAdded() {
    if (this.itemArr.includes(this.item)) {
      return 'added'
    } else {
      return 'not added'
    }
  }

  checkIfRemoved() {
    if (this.itemArr.includes(this.item)) {
      return 'not removed'
    } else {
      return 'removed'
    }
  }

  checkReceipt() {
    let len = this.item.length;
    while(len--) {
      if (this.itemArr.indexOf(this.item[len])!= -1) {
        return 'correct'
      } else {
        return 'incorrect'
      }
    }
  }

  comparatorFunction(actualOutput, expectedOutput) {
    if (actualOutput===expectedOutput) {
      return 'passed'
    } else {
      return 'not passed'
    }
  }

}


module.exports = Tests
