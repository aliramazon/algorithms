class Stack {
    constructor() {
        this.data = [];
    }

    pop() {
        return this.data.pop();
    }

    push(item) {
        return this.data.push(item);
    }

    read() {
        return this.data[this.data.length - 1];
    }
}
