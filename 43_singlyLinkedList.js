class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    #newNode(value) {
        return new Node(value);
    }

    push(value) {
        let newNode = this.#newNode(value);
        if (this.length === 0) {
            this.head = newNode;
            // this.tail = newNode;
        } else if (this.length === 1) {
            this.head.next = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.length;
    }
}

let singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(5));
console.log(singlyLinkedList.push(11));
console.log(singlyLinkedList.push(10));
// console.log(singlyLinkedList.push(5));
console.log(JSON.stringify(singlyLinkedList));
