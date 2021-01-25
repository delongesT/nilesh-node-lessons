var orderAmount = 14000;

let MOCK_API = new Promise(function (resolve, reject) {
    setTimeout(function() {
        if(orderAmount < 5000) {
            reject("Order declined")
        } else {
            resolve("Order placed")
        }
    }, 5000)
})

let MOCK_API_SUCCESS = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve("Order created")
    }, 2000)
})

let MOCK_API_ERROR = new Promise(function (resolve, reject) {
    setTimeout(function() {
        reject("Order amount refunded")
    }, 4000)
})

let MOCK_API_DISPATCH = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve("Order dispatched")
    }, 2000)
})


MOCK_API
.then(function(s){
    console.log("Message from order-sys ", s);
    MOCK_API_SUCCESS
    .then(function(f){
        MOCK_API_DISPATCH
        .then(function(d){
            console.log(d);
        })
        .catch()
    })
    .catch()
})
.catch(function(e) {
         let refund = MOCK_API_ERROR
        .then(function(e) {
            console.log(e)
        })
        .catch(function(e){
            console.log(">> Failed to refund order")
        })
})