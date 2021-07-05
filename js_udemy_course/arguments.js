function greet(firstname, lastname, language, ...others ) { 
    language = language || 'en'
    // another way to set default value
    // the second 'language' will be 'undefined' if not set so:
    //  undefined = false so will be set to 'en'
    console.log(firstname, lastname, language, others)
    if (arguments.length === 0) {
        console.log("Missing parameters!!!")
        return;
    }
    // args aren't really used anymore...we use spread operator now
}


greet();
// in JS, you can run without args! Just gives us 'undefined';
// already set up the memory space for them
greet('John', 'la', 'es', 'cat', 'dogs')
// the 'extra' params gets put into array of 'others'
