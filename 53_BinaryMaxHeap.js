class BinaryMaxHeap {
    #data;
    constructor() {
        this.#data = [];
    }

    get rootNode() {
        return this.#data[0];
    }

    get lastNode() {
        let length = this.#data.length;

        return length === 0 ? undefined : this.#data[length - 1];
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
            this.#data[newNodeIndex] > this.#data[parentIndex] &&
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

    #calculateLargerChildIndex(trickleNodeIndex) {
        let leftChildIndex = this.#leftChildIndex(trickleNodeIndex);
        let rightChildIndex = this.#rightChildIndex(trickleNodeIndex);

        if (
            this.#data[rightChildIndex] &&
            this.#data[rightChildIndex] > this.#data[leftChildIndex]
        ) {
            return rightChildIndex;
        } else {
            return leftChildIndex;
        }
    }

    delete() {
        let largestValue = this.rootNode;
        if (this.#length <= 1) {
            return this.#data.pop();
        }
        this.#data[0] = this.#data.pop();
        let trickleNodeIndex = 0;
        let leftChildIndex = this.#leftChildIndex(trickleNodeIndex);

        while (this.#data[leftChildIndex]) {
            let largerChildIndex =
                this.#calculateLargerChildIndex(trickleNodeIndex);

            if (this.#data[largerChildIndex] < this.#data[trickleNodeIndex])
                return;
            [this.#data[trickleNodeIndex], this.#data[largerChildIndex]] = [
                this.#data[largerChildIndex],
                this.#data[trickleNodeIndex]
            ];
            trickleNodeIndex = largerChildIndex;
            leftChildIndex = this.#leftChildIndex(largerChildIndex);
        }
        return largestValue;
    }
}
