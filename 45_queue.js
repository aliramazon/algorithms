const DoublyLinkedList = require("./44_DoublyLinkedList.js");

class Queue {
    constructor() {
        this.data = new DoublyLinkedList();
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        return this.data.shift();
    }

    read() {
        return this.data.head ? this.data.head.value : null;
    }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.dequeue();
