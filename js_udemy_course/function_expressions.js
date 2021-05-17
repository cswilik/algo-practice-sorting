// this is a function statement. 
function greet() {
    console.log("hi")
}
// It doesn't result a value
// it does get hoisted and put into memory via creation phase. You can call it before declaring
// When this is run during execution phase, its just a function there and it keeps going.



// this is a function expression.
var anonGreet = function() {
    console.log('hi');
}
// creating func on the fly and setting to a var, because its an object!
// anon function, because its referenced by the variable.
// the function here is an EXPRESSION, because in execution phase, its returning a value which is the function object

anonGreet()
// the function is not hoisted yet, so if you were to call before, it would throw "undefined is not a function"

function log(a) {
    a()
    // this is how we can run the function we created on the fly below.
}

log(function() {
    console.log("hi")
})
// first class function! it can be passed, etc.