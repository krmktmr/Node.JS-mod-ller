
/* 
let sayName = function(name) {
    console.log(`Merhaba adım ${name}`)
}
let sayAge = function(age) {
    console.log(`Benim Yaşım ${age}`)
}
let SayMemleket = function(memleket) {
    console.log(`Memleketim ${memleket}`)
}*/

let sayName = require('./sayName')
let sayAge = require('./sayAge')
let sayMemleket = require('./sayMemleket')

module.exports = {
    sayName : sayName,
    sayAge : sayAge,
    sayMemleket : sayMemleket
}