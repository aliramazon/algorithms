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
            let currentNode;
            let midIndex = Math.floor((this.length - 1) / 2);

            if (index <= midIndex) {
                currentNode = this.head;
                for (let i = 0; i < index; i++) {
                    currentNode = currentNode.next;
                }
            } else {
                currentNode = this.tail;
                for (let i = this.length - 1; i > index; i--) {
                    currentNode = currentNode.prev;
                }
            }

            return currentNode;
        }
    }

    setAt(index, newValue) {
        if (index < 0 || index >= this.length) {
            return false;
        } else {
            let currentNode;
            let midIndex = Math.floor((this.length - 1) / 2);

            if (index <= midIndex) {
                currentNode = this.head;
                for (let i = 0; i < index; i++) {
                    currentNode = currentNode.next;
                }
            } else {
                currentNode = this.tail;
                for (let i = this.length - 1; i > index; i--) {
                    currentNode = currentNode.prev;
                }
            }
            currentNode.value = newValue;
        }
        return true;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.length) {
            return;
        }

        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else if (index === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = this.head.prev;
        } else if (index === this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let midIndex = Math.floor((this.length - 1) / 2);
            if (index <= midIndex) {
                let prevNode = this.head;
                for (let i = 0; i < index - 1; i++) {
                    prevNode = prevNode.next;
                }
                newNode.next = prevNode.next;
                prevNode.next.prev = newNode;
                prevNode.next = newNode;
                newNode.prev = prevNode;
            } else {
                let nextNode = this.tail;
                for (let i = this.length - 1; i > index; i--) {
                    nextNode = nextNode.prev;
                }
                newNode.prev = nextNode.prev;
                nextNode.prev.next = newNode;
                newNode.next = nextNode;
                nextNode.prev = newNode;
            }
        }
        return ++this.length;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return;
        let removable;

        if (index === 0) {
            removable = this.head;
            if (this.length === 1) {
                this.head = this.tail = null;
            } else {
                this.head.next.prev = null;
                this.head = this.head.next;
            }
        } else if (index === this.length - 1) {
            removable = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            removable.prev = null;
        } else {
            let midIndex = Math.floor((this.length - 1) / 2);
            let prevNode;
            if (index <= midIndex) {
                prevNode = this.head;
                for (let i = 0; i < index - 1; i++) {
                    prevNode = prevNode.next;
                }
            } else {
                prevNode = this.tail;
                for (let i = this.length - 1; i >= index; i--) {
                    prevNode = prevNode.prev;
                }
            }
            removable = prevNode.next;
            prevNode.next = prevNode.next.next;
            prevNode.next.prev = prevNode;
            removable.next = removable.prev = null;
        }
        this.length--;
        return removable;
    }
}

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(6);
doublyLinkedList.push(5);
doublyLinkedList.push(4);
doublyLinkedList.push(3);
doublyLinkedList.push(2);

console.log(doublyLinkedList.removeAt(3));
console.log("-----");
console.log(doublyLinkedList);
