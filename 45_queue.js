const DoublyLinkedList = require("./44_DoublyLinkedList.js");

class Queue {
    constructor() {
        this.data = new DoublyLinkedList();
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        return this.data.shift().value;
    }

    read() {
        return this.data.head ? this.data.head.value : null;
    }

    get length() {
        return this.data.length;
    }
}

module.exports = Queue;
