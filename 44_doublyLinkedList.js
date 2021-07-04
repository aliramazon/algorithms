class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return ++this.length;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        } else {
            let popped = this.tail;
            if (this.length === 1) {
                this.head = this.tail = null;
            } else {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
                popped.prev = null;
            }
            this.length--;
            return popped;
        }
    }

    unshift(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return ++this.length;
    }

    shift() {
        if (this.length === 0) return undefined;

        let shiftedNode = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shiftedNode.next = null;
            this.length--;
        }
        return shiftedNode;
    }

    getAt(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.value;
        }
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5);
doublyLinkedList.push(4);
doublyLinkedList.push(3);
console.log(doublyLinkedList.getAt(0));
doublyLinkedList.push(2);
doublyLinkedList.push(1);

console.log(doublyLinkedList.shift());
console.log(doublyLinkedList.getAt(1));
