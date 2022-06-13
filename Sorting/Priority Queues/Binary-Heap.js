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
*/