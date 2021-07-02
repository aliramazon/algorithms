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

    shift() {
        if (this.length === 0) return undefined;

        let shifted = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return shifted;
    }

    unshift(value) {
        let newNode = this.#newNode(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;

            this.head = newNode;
        }
        return ++this.length;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else {
            let currentNode = this.head;
            let currentIndex = 0;

            while (currentIndex <= index) {
                if (currentIndex === index) {
                    return currentNode;
                }
                currentNode = currentNode.next;
                currentIndex++;
            }
        }
    }
}

let singlyLinkedList = new SinglyLinkedList();
// console.log(singlyLinkedList.push(5));
// console.log(singlyLinkedList.push(4));
console.log(singlyLinkedList.unshift(1));
console.log(singlyLinkedList.get(1));
