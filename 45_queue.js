const DoublyLinkedList = require("./44_doublyLinkedList.js");

class Queue {
    constructor() {
        this.data = new DoublyLinkedList();
    }

    enqueue(element) {
        this.data.unshift(element);
    }

    dequeue() {
        return this.data.pop();
    }

    read() {
        return this.data.tail ? this.data.tail.value : null;
    }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.dequeue();
