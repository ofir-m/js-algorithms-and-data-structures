class MaxBinaryHeap {
    constructor(values) {
        this.values = values;
    }

    // getChildren(parentIndex) {
    //     return {
    //         left: this.values[2 * parentIndex + 1],
    //         right: this.values[2 * parentIndex + 2]
    //     }
    // }

    getLeftChild(parentIndex) {
        const leftChildIndex = 2 * parentIndex + 1;
        return this.values[leftChildIndex];
    }

    getRightChild(parentIndex) {
        const rightChildIndex = 2 * parentIndex + 2;
        return this.values[rightChildIndex];
    }

    getParent(childIndex) {
        const parentIndex = this.getParentIndex(childIndex);
        return this.values[parentIndex];
    }

    getParentIndex(childIndex) {
        return Math.floor(childIndex / 2);
    }

    swap(index1, index2) {
        const index1Value = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = index1Value;
    }

    insert(value) {
        this.values.push(value);
        let childIndex = this.values.length - 1;
        let parentIndex = this.getParentIndex(childIndex);
        while (this.values[childIndex] > this.values[parentIndex]) {
            this.swap(childIndex, parentIndex)
            childIndex = parentIndex;
            parentIndex = this.getParentIndex(childIndex);
        }
    }

    getDepth() {
        return Math.floor(Math.log2(this.values.length));
    }

    // print() {
    //     const depth = this.getDepth();
    //     let currentDepth = 0
    //     let start, end;
    //     let dist =50
    //     let counter = 0
    //     let counter1 = depth*2
    //     while (true) {
    //         counter=counter +2;
    //         start = Math.pow(2, currentDepth) - 1;
    //         end = Math.pow(2, (currentDepth + 1)) - 1;
    //         let distance = Array((dist-counter)).join(" ");
    //         let str = distance;
    //         for (let i = start; i < end; i++) {
    //             if(this.values[i])
    //             {
    //                 str = str + Array(counter1).join(" ") + this.values[i];
    //             }
    //
    //         }
    //         console.log(str)
    //         str = "";
    //         currentDepth++;
    //         counter1=counter1-2;
    //         if (end >= this.values.length - 1) {
    //             break;
    //         }
    //     }
    // }


}

let maxBinaryHeap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
// console.log(maxBinaryHeap.getLeftChild(2));
// console.log(maxBinaryHeap.getRightChild(2));
// console.log(maxBinaryHeap.getParent(5));
// console.log(maxBinaryHeap.values);
maxBinaryHeap.insert(55);
maxBinaryHeap.insert(28);
console.log(maxBinaryHeap.values);
// console.log(maxBinaryHeap.getDepth());
maxBinaryHeap.print()

