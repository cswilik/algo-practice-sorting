// an array is a  collection
let arr = [1,
    false,
    {
        name: "Object",
        address: "123 VSCode"
    },
    function(name) {
        var greeting = "Hello"
        console.log(greeting + " " + name)

    },
    "hello"
];

console.log(arr)
arr[3](arr[2].name)
// arrays can hold functions and we can call them