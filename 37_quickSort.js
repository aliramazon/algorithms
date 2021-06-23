class QuickSort {
    constructor(array) {
        this.array = array;
    }

    partition(leftIndex, rightIndex) {
        let pivotIndex = rightIndex;
        rightIndex--;

        while (true) {
            while (this.array[leftIndex] < this.array[pivotIndex]) {
                leftIndex++;
            }

            while (this.array[rightIndex] > this.array[pivotIndex]) {
                rightIndex--;
            }

            if (leftIndex >= rightIndex) {
                break;
            } else {
                [this.array[leftIndex], this.array[rightIndex]] = [
                    this.array[rightIndex],
                    this.array[leftIndex]
                ];

                leftIndex++;
            }
        }

        [this.array[leftIndex], this.array[pivotIndex]] = [
            this.array[pivotIndex],
            this.array[leftIndex]
        ];
        return leftIndex;
    }

    sort(leftIndex, rightIndex) {
        if (rightIndex - leftIndex <= 0) return;

        let pivotIndex = this.partition(leftIndex, rightIndex);

        this.sort(leftIndex, pivotIndex - 1);
        this.sort(pivotIndex + 1, rightIndex);
    }
}

let sortableArray = new QuickSort([
    12, -12, -34, 34, -12, 35, 65, 90, 121, 2, 4, 5, 6
]);
sortableArray.sort(0, sortableArray.array.length - 1);

console.log(sortableArray.array);
