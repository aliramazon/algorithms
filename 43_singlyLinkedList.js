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
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
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
                let current = this.head;
                while (current) {
                    if (current.next.next === null) {
                        current.next = null;
                        this.tail = current;
                    }
                    current = current.next;
                }
            }
            this.length--;
            return popped;
        }
    }
}

let singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(5));
console.log(singlyLinkedList.push(11));
console.log(singlyLinkedList.push(10));
// console.log(singlyLinkedList.push(5));
console.log(JSON.stringify(singlyLinkedList));
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList);
