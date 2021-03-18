//Tests = require('./bagel-test.js')



const basket = {

    itemArr: [],
    maxCapacity: 15,
    totalPrice: 0,
    receiptItemList: '',
    priceList: {
      "BGLO": 0.49,
      "BGLP": 0.39,
      "BGLE": 0.49,
      "COF": 0.99,
    },

    checkIfFull() {
      if (this.itemArr.length < this.maxCapacity) {
        return false
      } else {
        return true
        return "The basket is full."
      }
      },


    addItem(item) {
    if (this.itemArr.includes(item)) {
      if (this.checkIfFull() === false) {
        this.itemArr.push(item)
        return 'This item is already in basket.', `Item price is ${this.priceList[item]}`, this.itemArr
      } else {
        return "The basket is full and you cannot add more items."
      }
    } else {
      if (this.checkIfFull() === false) {
        this.itemArr.push(item)
        return `Item price is ${this.priceList[item]}`, this.itemArr
      } else {return "The basket is full and you cannot add more items."}

    }},

    removeItem(item) {
      if (this.itemArr.includes(item)) {
        let index = this.itemArr.indexOf(item)
        this.itemArr.splice(index, 1)
        return this.itemArr
    } else {
      return "Item not in basket."
    }
      },

    listItems() {
    return this.itemArr
    },

    returnPrice() {

    for (let i=0; i<this.itemArr.length; i++) {
      this.totalPrice = this.totalPrice + this.priceList[this.itemArr[i]]
    }

    let discountsBGLP = 0;
    for (let i=0; i<this.itemArr.length; i++) {
      if(this.itemArr[i] === "BGLP") {
        discountsBGLP =+ 1
      }
    }
    if (discountsBGLP >= 12) {
      this.totalPrice = this.totalPrice - 4.68
      this.totalPrice = this.totalPrice + 3.99
    }

    let discountsBGLO = 0;
    for (let i=0; i<this.itemArr.length; i++) {
      if(this.itemArr[i] === "BGLO") {
        discountsBGLO =+ 1
      }
    }
    if (discountsBGLO >= 6) {
      this.totalPrice = this.totalPrice - 2.94
      this.totalPrice = this.totalPrice + 2.49
    }

    let discountsBGLE = 0;
    for (let i=0; i<this.itemArr.length; i++) {
      if(this.itemArr[i] === "BGLE") {
        discountsBGLE ++
      }
    }

    if (discountsBGLE >= 6) {
      this.totalPrice = this.totalPrice - 2.94
      this.totalPrice = this.totalPrice + 2.49
    }

    let discountsCOF = 0;
    let discountsCOFBGLP = 0;
    for (let i=0; i<this.itemArr.length; i++) {
      if(this.itemArr[i] === "COF") {
        discountsBGLE =+ 1
      }
      if(this.itemArr[i] === "BGLP") {
        discountsCOFBGLP =+ 1
      }
    }
    if (discountsBGLE >= 1 && discountsCOFBGLP >= 1) {
      this.totalPrice = this.totalPrice - 1.38
      this.totalPrice = this.totalPrice + 1.25
    }

    return this.totalPrice.toFixed(2)

    },

    clearBasket() {
      this.itemArr = []
      return this.itemArr
    },


    receipt() {
      for (let i=0; i<this.itemArr.length; i++) {
        this.receiptItemList = this.receiptItemList + this.itemArr[i] + " " + this.priceList[this.itemArr[i]] + "\n "
        //return this.itemArr[i]
      }
      let date = new Date
      return `~~~ Bobs Bagels ~~~ \n ${date} \n ---------------------------- \n ${this.receiptItemList} \n ---------------------------- \n Total: ${this.returnPrice()} \n ---------------------------- \n Thank you for your order!`
    }
}



console.log(basket.receipt())
module.exports = basket
