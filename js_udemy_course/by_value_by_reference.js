// by value (primitives)
var a = 3;
var b;

b = a
// creates a new spot in memory and sets b to a. It will be a copy.

a = 2;
// we can change 'a' now, and 'b' will still be 3

// by reference (all Objects (including Functions!!))
var c = {greeting: 'hi'}
var d;

d = c
// this will just point to the same place in memory. It is not a copy
c.greeting = "hello"
// mutating the object

console.log(c)
console.log(d)
// its "hello" for both! Because they are pointing to the same location in memory!!!


// by reference (even as parameters)
function changeGreet(obj) {
    obj.greeting = "Hola" //mutating the obj
}

changeGreet(d) 
console.log(c) //"hola"
console.log(d) //"hola"

// equal operator sets up new memory space (new address)
c = {greeting: 'howdy'}
console.log(c) //"howdy"
console.log(d) // "hola"
// this is creating a new spot in memory for this to live and point 'c' at it.