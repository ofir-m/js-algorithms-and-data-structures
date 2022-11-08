class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * insert new node in to the tree, while keeping its properties
     * @param value
     */
    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = node;
                    break;
                } else {
                    currentNode = currentNode.right; //let's check the right sub-tree (in the next iteration)
                }
            } else { //value <= currentNode.value
                if (currentNode.left === null) {
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left; //let's check the left sub-tree (in the next iteration)
                }
            }
        }
    }

    bfs_rec_helper() {
        let arr = []
        let result = []
        if (this.root === null) {
            return arr;
        }
        arr = [this.root];
        return this.bfs_rec(arr, result);
    }

    bfs_rec(arr, result) {
        if (arr.length == 0) {
            return result;
        }
        const node = arr[0];
        arr.shift();
        result.push(node.value);
        if (node.left !== null) {
            arr.push(node.left);
        }
        if (node.right !== null) {
            arr.push(node.right);
        }
        return this.bfs_rec(arr, result)
    }

    /**
     * DFS - preorder traversal
     * @param node
     * @param arr
     * @returns {*}
     */
    preorder(node, arr) {
        if (node == null) {
            return;
        }
        arr.push(node.value);
        this.preorder(node.left, arr);
        this.preorder(node.right, arr);
        return arr;
    }

    /**
     * DFS - inorder traversal
     * outputs the nodes in an increasing order
     * @param node
     * @param arr
     * @returns {*}
     */
    inorder(node, arr) {
        if (node == null) {
            return;
        }
        this.inorder(node.left, arr);
        arr.push(node.value);
        this.inorder(node.right, arr);
        return arr;
    }

    /**
     * DFS - postorder traversal
     * @param node
     * @param arr
     * @returns {*}
     */
    postorder(node, arr) {
        if (node == null) {
            return;
        }
        this.postorder(node.left, arr);
        this.postorder(node.right, arr);
        arr.push(node.value);
        return arr;
    }


    bst_count(node, arr) { //almost identical to dfs_preorder
        if (node == null) {
            return;
        }
        arr.push(node.value);
        this.preorder(node.left, arr)
        this.preorder(node.right, arr)
        return arr.length;
    }

    /**
     * get depth of tree.
     * if root == null depth is 0.
     * @param node
     * @returns {number}
     */
    getDepth(node) {
        if (node == null) {
            return 0;
        }
        let leftHeight = this.getDepth(node.left);
        let rightHeight = this.getDepth(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    getDepth_bfs() {
        const arr = [] //serves as queue
        let depth = 0
        if (this.root === null) {
            return depth;
        }
        arr.push(this.root)

        while (arr.length > 0) {
            depth++;
            const rowLength = arr.length; // arr.length gets changed inside the for loop, so we have to save it initial length.
            for (let i = 0; i < rowLength; i++) {
                const node = arr.shift();
                if (node.left !== null) {
                    arr.push(node.left);
                }
                if (node.right !== null) {
                    arr.push(node.right);
                }
            }
        }
        return depth;
    }

    printTree() {
        if (this.root === null) return;

        const root = JSON.parse(JSON.stringify(this.root));
        /** cloning the tree so we can feel free to add properties to the nodes */
        const rowNodes = [] /** serves as a queue */, rowsInfo = [];
        let depth = 0;
        let maxValueLength = 0; // for printing purposes

        root.slot = 1;
        rowNodes.push(root);


        while (rowNodes.length > 0) {
            rowsInfo[++depth] = {nodes: rowNodes.slice()} /** rowNodes gets changed inside the for loop, so we have to clone its content. */

            /** traverse row
             *
             * */
            for (let i = 0, length = rowNodes.length; i < length; i++) {
                /** rowNodes gets changed inside the for loop, so we have to save its initial length upfront */

                const node = rowNodes.shift();

                let valueLength = node.value.toString().length;
                maxValueLength = maxValueLength < valueLength ? valueLength : maxValueLength

                if (node.left) {
                    node.left.slot = (node.slot - 1) * 2 + 1;
                    /** [number of parents before the current one(=node)]*[2 children of each] + 1  */
                    rowNodes.push(node.left);
                }
                if (node.right) {
                    node.right.slot = node.slot * 2;
                    /** (node.slot - 1) * 2 + 2 = node.slot * 2*/
                    rowNodes.push(node.right);
                }
            }
        }

        const SLOT_SIZE = maxValueLength % 2 == 0 ? maxValueLength : ++maxValueLength;
        const LAST_ROW_GAP_BETWEEN_SLOTS = SLOT_SIZE;
        const LAST_ROW_LEFT_PADDING = SLOT_SIZE;


        /**
         * enriching rowsInfo
         * traverse rows from last to first
         * */
        for (let i = depth; i > 0; i--) {
            const prevRow = rowsInfo[i + 1];
            /** the row below the current. undefined in first iteration */
            const isLastRow = !prevRow;
            /** true at first iteration, and false in the rest */
            const slotsCount = Math.pow(2, i - 1);
            const gapBetweenSlots = isLastRow ? LAST_ROW_GAP_BETWEEN_SLOTS : (SLOT_SIZE + 2 * prevRow.gapBetweenSlots);
            /**
             * let's explain gapBetweenSlots formula above
             * (prevRow.gapBetweenSlots/2 - VERTEX_SIZE/2) + VERTEX_SIZE + prevRow.gapBetweenSlots + VERTEX_SIZE + (prevRow.gapBetweenSlots/2 - VERTEX_SIZE/2)
             *  = VERTEX_SIZE + 2 * prevRow.gapBetweenSlots
             * */
            const gapBetweenSlotsCount = slotsCount - 1;
            const innerSize = slotsCount * SLOT_SIZE + gapBetweenSlotsCount * gapBetweenSlots; // size of row without left/right padding
            const leftPadding = isLastRow ? LAST_ROW_LEFT_PADDING : (prevRow.leftPadding + (prevRow.innerSize - innerSize) / 2);

            rowsInfo[i] = {
                ...rowsInfo[i], /** add the nodes array */
                slotsCount,
                gapBetweenSlots,
                innerSize,
                leftPadding,
            };
        }

        /** printing rows */

        const hyphen = String.fromCharCode(9480);
        const leftCorner = String.fromCharCode(9484);
        const rightCorner = String.fromCharCode(9488);

        rowsInfo.forEach((rowInfo, rowIndex) => {
            const {nodes, gapBetweenSlots, leftPadding} = rowInfo
            let row = "";
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const prevNode = nodes[i - 1];
                const isFirstNode = !prevNode;

                const numberOfCharsToAdd = isFirstNode ?
                    leftPadding + ((node.slot - 1) * (SLOT_SIZE + gapBetweenSlots)) :
                    ((node.slot - prevNode.slot) * (gapBetweenSlots + SLOT_SIZE)) - SLOT_SIZE
                let stringToAdd = " ".repeat(numberOfCharsToAdd);

                /** creating arrows for children */
                const nextRowInfo = rowsInfo[rowIndex + 1];
                const isLastRow = !nextRowInfo;
                const gapBetweenNodesOfNextRow = isLastRow ? 1 : nextRowInfo.gapBetweenSlots;
                const hyphensCount = gapBetweenNodesOfNextRow / 2;

                const leftArrow = leftCorner + hyphen.repeat(hyphensCount - 1);
                const rightArrow = hyphen.repeat(hyphensCount - 1) + rightCorner;

                /**
                 * add left arrow to node
                 * and remove its room from spaces
                 * */
                if (node.left) {
                    stringToAdd = stringToAdd.substring(hyphensCount, stringToAdd.length) + leftArrow;
                }

                /**
                 * add right arrow to previous node
                 * and remove its room from spaces
                 *
                 * take note that the last node in the row is not a prev of anyone,
                 * so we should take care of it separately
                 * */
                if (prevNode?.right) {
                    stringToAdd = rightArrow + stringToAdd.substring(hyphensCount);
                }

                /** add padding to value from both sides preferably */
                let value = node.value.toString();
                value = value.padStart(value.length + (SLOT_SIZE - value.length) / 2, " ").padEnd(SLOT_SIZE, " ")

                const isLastNodeInRow = i === nodes.length - 1;
                row = row + stringToAdd + value + (node.right && isLastNodeInRow ? rightArrow : "");
            }
            console.log(row);
        });
    }

    completeTree() {
        const arr = [] //uses as queue
        const result = []
        if (this.root === null) {
            return arr;
        }
        arr.push(this.root)

        while (arr.length > 0) {
            let isLastRow = true;
            for (let i = 0; i < arr.length; i++) {
                const node = arr[i];
                if (node.left !== null || node.right !== null) {
                    isLastRow = false;
                }
            }
            const rowLength = arr.length; // arr.length gets changed inside the for loop, so we have to save it initial length.
            for (let i = 0; i < rowLength; i++) {
                const node = arr.shift();
                result.push(node.value);
                if (node.left === null && !isLastRow) {
                    node.left = new Node("00")
                }
                if (node.left !== null) {
                    arr.push(node.left);
                }
                if (node.right === null && !isLastRow) {
                    node.right = new Node("-36")
                }
                if (node.right !== null) {
                    arr.push(node.right);
                }
            }

        }
        return result;
    }

    bfs() {
        const arr = [] //uses as queue
        const result = []
        if (this.root === null) {
            return arr;
        }
        arr.push(this.root)

        while (arr.length > 0) {
            const node = arr.shift();
            result.push(node.value);
            if (node.left !== null) {
                arr.push(node.left);
            }
            if (node.right !== null) {
                arr.push(node.right);
            }

        }
        return result;
    }

    find(value) {
        if (this.root === null) {
            return null;
        }
        let currentNode = this.root;

        while (true) {
            if (currentNode.value === value) {
                return currentNode;
            } else if (value > currentNode.value) {
                if (currentNode.right === null) {
                    return null
                } else {
                    currentNode = currentNode.right;
                }
            } else if (value <= currentNode.value) {
                if (currentNode.left === null) {
                    return null
                } else {
                    currentNode = currentNode.left;
                }
            }

        }
    }


    remove(value) {

        if (this.root === null) {
            return;
        }

        let currentNodeParent = null;
        let currentNode = this.root;
        let side = null;

        while (true) {
            if (currentNode.value === value) {
                break;
            } else if (value > currentNode.value) {
                if (currentNode.right === null) {
                    return; //couldn't find the node
                } else {
                    currentNodeParent = currentNode;
                    currentNode = currentNode.right;
                    side = "right";
                }
            } else if (value <= currentNode.value) {
                if (currentNode.left === null) {
                    return; //couldn't find the node
                } else {
                    currentNodeParent = currentNode;
                    currentNode = currentNode.left;
                    side = "left";
                }
            }
        }

        if (currentNode.left === null && currentNode.right === null) {
            currentNodeParent[side] = null;
        } else if (currentNode.left === null) { // and currentNode.right !== null
            currentNodeParent[side] = currentNode.right;
        } else if (currentNode.right === null) { // and currentNode.left !== null
            currentNodeParent[side] = currentNode.left;
        } else //currentNode.right !== null && currentNode.left !== null
        {
            let maxNodeParent = currentNode;
            let minNode = maxNodeParent.left; //not null for sure
            while (minNode.right !== null) {
                maxNodeParent = minNode
                minNode = minNode.right
            }
            maxNodeParent.right = null;
            minNode.left = currentNode.left;
            minNode.right = currentNode.right;
            if (currentNode === this.root) {
                this.root = minNode;
            } else {
                currentNodeParent[side] = minNode
            }
        }

    }

}

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinarySearchTree();

tree.insert(10)
tree.insert(9)
tree.insert(0)
tree.insert(20)
tree.insert(50)
tree.insert(30)
tree.insert(16)
tree.insert(54)
tree.insert(17)
tree.insert(14)
tree.insert(13)
tree.insert(22)
tree.insert(1)
tree.insert(-2)
tree.insert(110)
// tree.insert(111)

// console.log(tree.bfs())
//tree.dfs_preorder(tree.root, []);
//tree.bst_count(tree.root,[]);
// console.log(tree.remove(10))
// tree.completeTree();
console.log(tree.printTree(tree.root))
//console.log(tree.bfs(tree.root));

/*

               10
             /    \
           /        \
         2            15
       /   \         /   \
      1     3      12     20
     /     / \    /  \    /  \
    0     5   7  11  13  17   24
                                \
                                25
*/


