function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

let sayHi = greet('Hi');
// invokes greet func, new exec context
// returns a new func, 'pops off' the stack
sayHi('Tony')
// invokes sayHi func, new exec context
// has reference to variables in memory outside its exec context (ex. 'whattosay')
// this is a 'closure' it 'closes in' the vars and scope is in tact
