const less = require('../helpers/less.js');
const exchange = require('../helpers/exchange.js');

/*
Binary Heap: A collection of keys arranged in a complete heap-ordered binary tree, represented in level order in an array (not using the 1st entry).

Priority Queues have their uses, however, we originally stated with PQs that we want a solution that is log N for all operations.

Implementation: Binary Heap -> An array representation of a heap-ordered, complete binary tree.

Definitions:
Binary Tree -> Empty or node with links to left and right binary trees.
Complete Binary Tree -> Perfectly balanced on all levels except possibly on bottom-most level.
A property of complete binary trees with N nodes is a height of [lg N].
The height only increases when N is a power of 2.

A binary tree is "heap-ordered" if the key in each node is smaller than or equal to the key in that nodes parent.
The largest key is found at the root of the tree.

Rather than explicitly using a tree with nodes containing links to a parent or child node, we can represent the tree
using an array more easily (assuming we are using a complete tree).

We can represent these complete binary trees in arrays by placing the root at index 1, its children at 2 and 3, their children
at 4, 5, 6 and 7 and so on.

In doing so, we can avoid traveling up and down the tree using links and instead use arithmetic on array indices to move around.

Assertions:
A node positioned at K has a parent that is located at [K / 2].
Conversely, the children of the node in position K are at (2K) and (2K + 1).
To travel up the tree from a[K], we set K to be K/2; to move down we set K to 2*K or 2*K+1.

Promotion:
Scenario -> Child's key becomes larger key than its parent's key. This violates the heap condition.
Fixing the violation -> Exchange key in child with key in parent. Repeat until heap order is restored.

This is known as the "swim" operation (bottom-up heapify).

This also gives us a new way to insert nodes into the heap:
1) Insert node at the end, then swim it up.
Cost = At most 1 + lg N compares.

Demotion:
Scenario -> Parent's key becomes smaller than one (or both) of its childrens.
Fixing the violation -> Exchange key in parent with key in larger child. Repeat until heap order is restored.

This is known as the "sink" operation.

Performance Review:
Elementary Priority Queue (Unordered) -> insert = O(1); delete max = O(N); find max = O(N)
Elementary Priority Queue (Ordered) -> insert = O(N); delete max = O(1); find max = O(1)
Binary Heap -> insert = O(log N); delete max = O(log N); find max = O(1)

Further advanced optimizations include: d-ary heaps and Fibonacci heaps.

Considerations:
1. Immutability of keys: the assumption that the client does not change keys while they're on PQ.
Best Practice: Use immutable keys.

2. Underflow & Overflow:
Minimum: throw exception if deleting from empty PQ.
Overflow: add no-arg constructor and use resizing array (depending on language used).

3. Minimum-oriented priority queue?
Replace less() with greater().

4. Other operations?
Remove an arbitrary item?
Change the priority of an item?

*/


class BinaryHeap {
  constructor() {
    this.queue = [];
    this.n = 0;
  }

  swim(k) {
    // While we are not at the root and K's parent is less than a[K]
    while (k > 1 && less(this.queue[Math.floor(k / 2)], this.queue[k])) {
      // Swap parent with child
      exchange(this.queue, k, Math.floor(k / 2));
      // "Swim" up the tree
      k = Math.floor(k / 2);
    }
  }

  sink(k) {
    while (2*k <= this.n) {
      let j = 2*k;
      // Determine the larger child
      if (j < this.n && less(this.queue[j], this.queue[j+1])) {
        j++;
      }
      if (!less(this.queue[k], this.queue[j])) {
        break;
      }
      exchange(this.queue, k, j);
      k = j;

    }
  }

  insert(x) {
    this.queue[++this.n] = x;
    this.swim(this.n);
  }

  deleteMax() {
    // Save the value at the root
    let max = this.queue[1];
    // Exchange with last value
    exchange(this.queue, 1, this.n--);
    // Sink the new root to its correct location in the tree
    this.sink(1);
    // Remove reference to last node in tree (In JS, we can delete this item, in Java, you might set this to null)
    delete this.queue[this.n + 1];
    return max;
  }

  isEmpty() {
    return this.n === 0;
  }
}

let test = new BinaryHeap();
test.insert(3)
test.insert(10)
test.insert(1)
test.insert(4)
test.insert(2)
console.log(test.deleteMax());
console.log(test)
test.insert(10)
console.log(test)



