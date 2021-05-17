function a() {
    console.log(this) //this will still point to the global exexcution context
    this.newVariable = "hello"
}

a()

var b = function() {
    console.log(this) //still window
}

console.log(newVariable)



var c = {
    name: "c object",
    log: function() {
        this.name = " Updated C object"
        console.log(this)
        //log method of context c
        let self = this
        // a way to 'hold' this as object.
        let setName = function(newName) {
            this.name = newName
            // this points to the global object!!! This is wrong, but its JS dumb programming
            self.name = newName
            // this WILL updated name of the object
        }
        setName('Updated again the C object')
        console.log(this)
    }
    
}

c.log()
// in case of method attached to Object, 'this' becomes the object that contains it.