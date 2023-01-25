/*console.log("Merhaba Deneme")

function sayHello (name){
    console.log(`Merhaba ${name}`)
}
*/

let sayName = function(name) {
    console.log(`Merhaba adım ${name}`)
}
let sayAge = function(age) {
    console.log(`Benim Yaşım ${age}`)
}
let SayMemleket = function(memleket) {
    console.log(`Memleketim ${memleket}`)
}
//module.exports = sayHello
module.exports = {
    sayName : sayName,
    sayAge : sayAge,
    SayMemleket : SayMemleket
}
