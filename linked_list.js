// piece of data -val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

let first = new Node("hi")
first.next = new Node("there")
first.next.next = new Node("Chelsey")

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;

    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        this.tail.next = newNode
        this.tail = newNode 
        } 
        this.length++
        return this;
    } 
    pop() {
        // edge case
        if (this.length <= 0) {
            return undefined;
        }
        // two variables, set the same at the beginning
        let current = this.head
        let newTail = current
        // while there is something after current
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length--;
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
            
        } 
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")