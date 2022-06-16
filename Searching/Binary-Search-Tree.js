const less = require('../Sorting/helpers/less.js');
/*
Definition: A binary search tree is a binary tree in symmetric order.

A binary tree is either:
- Empty
- Two disjoint binary trees (left and right)

In a BST, each node has a key and every node's key is:
1. Larger than all keys in its left subtree.
2. Smaller than all keys in its right subtree.

Implementation: Similar to a linked list, we will utilize nodes to create our BST data structure.

Each node will consist of 4 fields + a 5th "size" field which will enable other BST methods:
1. A key
2. A value
3. A reference to the left subtree (smaller keys)
4. A reference to the right subtree (larger keys)
5. A size field which keeps track of the count of nodes in a tree or subtree

To keep our code a bit more readable, we simulate private functions with just simple function expressions within the BST methods.
In the Java implementations, these are named the same as their public methods.

Peformance Review:
- Sequential Search (unordered list / linked list)
Guarantee: search = N; insert = N.
Average Case: search = N/2; insert = N.

- Binary Search (ordered array)
Guarantee: search = lg N; insert = N.
Average Case: search = lg N; insert = N/2.

- BST
Guarantee: search = N; insert = N.
Average Case: search = 1.39 lg N; insert = 1.39 lg N.

BST depends on N distinct keys inserted in random order. If the keys are ordered, reverse-ordered or other natural orders, we end up
with time proportional to N again.


*/

class Node {
  constructor(key, value, size) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = size;
  }

}

class BST {
  constructor() {
    this.root = null;
  }


  sz(x) {
    if (x === null) {
      return 0;
    }
    return x.count;
  }
  size() {
    return this.sz(this.root);
  }

  //  Associate key with value. If key is in tree then change node value, otherwise, add new node.
  put(key, value) {
    // Recursive insert function
    const insert = (x, key, value) => {
      // Base Case (first node in a tree OR inserting at end of subtree):
      if (x === null) {
        return new Node(key, value, 1);
      }
      let cmp = key.localeCompare(x.key);

      if (cmp < 0) {
        x.left = insert(x.left, key, value);
      } else if (cmp > 0) {
        x.right = insert(x.right, key, value);
      } else {
        x.value = value;
      }
      x.count = 1 + this.sz(x.left) + this.sz(x.right);
      return x;
    }
    this.root = insert(this.root, key, value);
  }

  get(key) {
    let pointer = this.root;
    while (pointer !== null) {
      let cmp = key.localeCompare(pointer.key);
      if (cmp < 0) {
        pointer = pointer.left;
      } else if (cmp > 0) {
        pointer = pointer.right;
      } else {
        return pointer.value;
      }
    }
    return null;
  }

  min() {
    let pointer = this.root;
    while (pointer !== null) {
      pointer = pointer.left;
      if (pointer.left === null) {
        break;
      }
    }
    return pointer.key;
  }

  max() {
    let pointer = this.root;
    while (pointer !== null) {
      pointer = pointer.right;
      if (pointer.right === null) {
        break;
      }
    }
    return pointer.key
  }

  // Find largest key less than or equal to K
  floor(key) {
    const recursiveFloor = (x, key) => {
      if (x === null) {
        return null;
      }
      let cmp = key.localeCompare(x.key);
      if (cmp === 0) {
        return x;
      }
      if (cmp < 0) {
        return recursiveFloor(x.left, key);
      }
      let t = recursiveFloor(x.right, key);
      if (t !== null) {
        return t;
      } else {
        return x;
      }
    }

    let x = recursiveFloor(this.root, key);
    if (x === null) {
      return null;
    }
    return x.key;
  }

  // Returns the smallest key in the symbol table greater than or equal to key. Similar to floor().
  ceiling(key) {

  }

  // How many keys are < K?
  rank(key) {
    const findRank = (key, x) => {
      if (x === null) {
        return 0;
      }
      let cmp = key.localeCompare(x.key);
      if (cmp < 0) {
        return findRank(key, x.left);
      } else if (cmp > 0) {
        return 1 + this.sz(x.left) + findRank(key, x.right);
      } else {
        return this.sz(x.left);
      }
    }
    return findRank(key, this.root);
  }

  delete() {

  }

}

tree = new BST();
tree.put("S", 1)
tree.put("X", 1)
tree.put("E", 1)
tree.put("A", 1)
tree.put("R", 1)
tree.put("C", 1)
tree.put("H", 1)
tree.put("M", 1)

console.log(tree)
console.log(tree.rank("E"))

// console.log(tree);
