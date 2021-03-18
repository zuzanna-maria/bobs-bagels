Tests = require('./bagel-test.js')
basket = require('./bagel-object.js')



//test if items added
basket.addItem("BGLP")
let test1 = new Tests("BGLP", basket.listItems())
console.log(test1.comparatorFunction(test1.checkIfAdded(), 'added'))


//test if items removed
basket.removeItem("BGLP")
let test2 = new Tests("BGLP", basket.listItems())
console.log(test2.comparatorFunction(test2.checkIfRemoved(), 'removed'))


//test if basket too full to add further items
let test3 = new Tests(basket.checkIfFull(), false)
console.log(test3.comparatorFunction())


//test if able to add item already in basket
basket.addItem("BGLO")
let test4 = new Tests(basket.addItem("BGLO"), "This item is already in basket.")
console.log(test4.comparatorFunction())

//test if can remove item not in basket
basket.removeItem("BGLE")
let test5 = new Tests(basket.removeItem(), "Item not in basket.")
console.log(test5.comparatorFunction())

//test price
basket.clearBasket()
basket.addItem("BGLP")
basket.addItem("BGLE")
let test6 = new Tests(basket.returnPrice(), basket.priceList["BGLP"]+basket.priceList["BGLE"])
console.log(test6.comparatorFunction())

//test if can remove all items
basket.clearBasket()
let test7 = new Tests(basket.itemArr.length, 0)
console.log(test7.comparatorFunction())


//test if BGLP discount works
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
basket.addItem("BGLP")
let test8 = new Tests(parseFloat(basket.returnPrice()), parseFloat(3.99))
console.log(test8.comparatorFunction())

//test if BGLO discount works
basket.clearBasket()
basket.addItem("BGLO")
basket.addItem("BGLO")
basket.addItem("BGLO")
basket.addItem("BGLO")
basket.addItem("BGLO")
basket.addItem("BGLO")
let test9 = new Tests(basket.returnPrice(), 2.49)
console.log(test9.comparatorFunction())


//test if BGLE disocunt works
basket.clearBasket()
basket.addItem("BGLE")
basket.addItem("BGLE")
basket.addItem("BGLE")
basket.addItem("BGLE")
basket.addItem("BGLE")
basket.addItem("BGLE")
let test10 = new Tests(parseFloat(basket.returnPrice()), parseFloat(2.49))
console.log(test10.comparatorFunction())


//test if COF discount works
basket.clearBasket()
basket.addItem("COF")
basket.addItem("BGLP")
let test11 = new Tests(parseFloat(basket.returnPrice()), parseFloat(1.25))
console.log(test11.comparatorFunction())

//test if receipt prints correct items and prices
basket.clearBasket()
basket.addItem("COF")
basket.addItem("BGLP")
let test12 = new Tests(["COF", "BGLP", 0.99, 0.39], basket.receipt())
console.log(test12.comparatorFunction(test12.checkReceipt(), 'correct'))
