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
        if (rightIndex - leftIndex <= 0) return; // If array is empty or has one value in it. return. Do not partition it further

        let pivotIndex = this.partition(leftIndex, rightIndex);

        this.sort(leftIndex, pivotIndex - 1);
        this.sort(pivotIndex + 1, rightIndex);
    }

    quickSelect(kthLowestValue, leftIndex, rightIndex) {
        console.log(this.array[leftIndex]);
        if (rightIndex - leftIndex <= 0) {
            console.log(this.array[leftIndex], 50);
            return this.array[leftIndex];
        }

        let pivotIndex = this.partition(leftIndex, rightIndex);

        if (kthLowestValue === pivotIndex) {
            console.log(this.array[pivotIndex], 57);
            return this.array[pivotIndex];
        } else if (kthLowestValue < pivotIndex) {
            return this.quickSelect(kthLowestValue, leftIndex, pivotIndex - 1);
        } else if (kthLowestValue > pivotIndex) {
            return this.quickSelect(kthLowestValue, pivotIndex + 1, rightIndex);
        }
    }
}

let array = [12, -10, -34, 34, -13, 35, 65, 90, 121, 2, 4, 5, 6];
// -34 -13 -10  12 2 4 5 6 12 35 65 90 121 => 13 elements

let sortableArray = new QuickSort(array);
// sortableArray.sort(0, sortableArray.array.length - 1);
let kthLowestValue = sortableArray.quickSelect(12, 0, array.length - 1);
console.log(kthLowestValue);

// console.log(sortableArray.array);
