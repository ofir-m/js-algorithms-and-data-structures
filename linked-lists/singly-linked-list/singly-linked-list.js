const util = require('util');

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    print() {
        console.log("print()")
        const arr = []
        let node = this.head
        while (node !== null) {
            arr.push(node.val)
            node = node.next;
        }
        console.log(JSON.stringify(this, null, 4));
    }

    push(val) {
        const node = new Node(val)
        if (this.length === 0) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        console.log("pop()")
        if (this.length === 0) {
            console.log("pop() =>", "popped node is:", undefined, "\n")
            return undefined
        }
        if (this.length === 1) {
            const nodeToPop = this.tail;
            this.head = this.tail = null;
            this.length--;
            console.log("pop() =>", "popped node is:", nodeToPop.val, "\n")
            return nodeToPop.val
        }
        let previousNode = this.head
        let currentNode = this.head.next;
        while (currentNode !== this.tail) {
            currentNode = currentNode.next;
            previousNode = previousNode.next
        }
        this.tail = previousNode;
        previousNode.next = null
        this.length--;
        console.log("popped node is:", currentNode.val, "\n")
        return currentNode;
    }

    // remove node from the beginning of the list
    shift() {
        console.log("shift()")
        if (this.length === 0) {
            this.length--;
            return undefined
        }
        if (this.length == 1) {
            const shiftedNode = this.head;
            this.head = this.tail = null;
            this.length--;
            return shiftedNode
        }
        const shiftedNode = this.head;
        this.head = this.head.next
        this.length--
        return shiftedNode;
    }

    // add node from the beginning of the list
    unshift(val) {
        console.log("unshift()")
        const node = new Node(val)
        if (this.length === 0) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.length++
    }

    get(index) {
        console.log("get()")
        if (index < 0 || index > this.length - 1) {
            throw new Error("invalid index")
        }

        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    set(val, index) {
        console.log("set()")
        if (index < 0 || index > this.length - 1) {
            throw new Error("invalid index")
        }

        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        currentNode.val = val;
    }

    insert(val, index) {
        console.log("insert()")
        if (index < 0 || index > this.length) {
            throw new Error("invalid index")
        }

        const node = new Node(val);

        if (this.length === 0) {
            this.head = this.tail = node;
        } else if (index === this.length) { //like push operation (we need to change the tail)
            this.tail.next = node;
            this.tail = node;
        } else if (index === 0) { //like unshift
            node.next = this.head;
            this.head = node;
        } else {
            let nodeAfter = this.head.next;
            let nodeBefore = this.head;
            let nodeAfterIndex = 1;
            while (nodeAfterIndex < index) {
                nodeBefore = nodeAfter;
                nodeAfter = nodeAfter.next;
                nodeAfterIndex++;
            }
            nodeBefore.next = node;
            node.next = nodeAfter;
        }

        this.length++;

    }

    remove(index) {
        console.log("remove()")
        let removedNode;
        if (index < 0 || index > this.length - 1) {
            throw new Error("invalid index")
        }
        if (this.length === 0) {
            removedNode = undefined
        } else if (index === 0) {
            removedNode = this.head;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
        } else {
            let nodeAfter = this.head.next;
            let nodeBefore = this.head;
            let nodeAfterIndex = 1;
            while (nodeAfterIndex < index) {
                nodeBefore = nodeAfter;
                nodeAfter = nodeAfter.next;
                nodeAfterIndex++;
            }
            nodeBefore.next = nodeAfter.next;
            if (this.tail === nodeAfter) {
                this.tail = nodeBefore;
            }
            removedNode = nodeAfter;
        }
        this.length--
        console.log("removed:", removedNode);
        return removedNode;
    }

    reverse() {
        if(this.length===0)
        {
            return undefined
        }
        let previousNode = this.head;
        let currentNode = this.head.next
        while (currentNode !== null) {
            const next = currentNode.next;
            currentNode.next = previousNode;
            if (this.head === previousNode) {
                previousNode.next=null;
                this.tail = previousNode;

            }
            if (next === null) {
                this.head = currentNode;
            }
            previousNode = currentNode;
            currentNode = next;

        }

    }

}

const list = new SinglyLinkedList()
list.push(0)
 // list.push(1);
// list.push(2);
// list.push(3);
list.print()

// list.set(9999, 0)

list.reverse()
list.print()
