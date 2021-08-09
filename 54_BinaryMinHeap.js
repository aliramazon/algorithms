class BinaryMinHeap {
    #data;
    constructor() {
        this.#data = [];
    }

    get rootNode() {
        return this.#data[0];
    }

    get lastNode() {
        let length = this.#data.length;

        return this.#data[length - 1];
    }

    get #length() {
        return this.#data.length;
    }

    #rightChildIndex(index) {
        return index * 2 + 2;
    }

    #leftChildIndex(index) {
        return index * 2 + 1;
    }

    #parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    printData() {
        console.log(this.#data);
    }

    insert(value) {
        this.#data.push(value);
        let newNodeIndex = this.#length - 1;
        let parentIndex = this.#parentIndex(newNodeIndex);

        while (
            this.#data[newNodeIndex] < this.#data[parentIndex] &&
            newNodeIndex > 0
        ) {
            [this.#data[newNodeIndex], this.#data[parentIndex]] = [
                this.#data[parentIndex],
                this.#data[newNodeIndex]
            ];

            newNodeIndex = parentIndex;
            parentIndex = this.#parentIndex(newNodeIndex);
        }
    }

    #calculateSmallerChildIndex(index) {
        let leftChildIndex = this.#leftChildIndex(index);
        let rightChildIndex = this.#rightChildIndex(index);

        if (
            this.#data[rightChildIndex] &&
            this.#data[rightChildIndex] < this.#data[leftChildIndex]
        ) {
            return rightChildIndex;
        } else {
            return leftChildIndex;
        }
    }

    delete() {
        let smallestValue = this.rootNode;

        if (this.#length <= 1) {
            return this.#data.pop();
        }

        this.#data[0] = this.#data.pop();

        let trickleNodeIndex = 0;
        let leftChildIndex = this.#leftChildIndex(trickleNodeIndex);

        while (this.#data[leftChildIndex]) {
            let smallerChildIndex =
                this.#calculateSmallerChildIndex(trickleNodeIndex);

            if (this.#data[smallerChildIndex] > this.#data[trickleNodeIndex]) {
                break;
            }

            [this.#data[smallerChildIndex], this.#data[trickleNodeIndex]] = [
                this.#data[trickleNodeIndex],
                this.#data[smallerChildIndex]
            ];

            trickleNodeIndex = smallerChildIndex;
            leftChildIndex = this.#leftChildIndex(trickleNodeIndex);
        }
        return smallestValue;
    }
}
