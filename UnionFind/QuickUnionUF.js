/*
Quick Union looks to make improvements to Quick Find by optimizing the Union method previously defined.

Cost-model: Number of array accesses (for read or write).
(algorithm)     (initialize)      (union)      (find)
quick-union          N          tree height   tree height

Quick Union makes use of the same data structure, a site-indexed ID array, however the interpretation of each entry is different.

Each entry instead refers to name of another site or object in the same component. This connection is referred to as a "link".

Code is repeated from the QuickFindUF class purposefully to avoid abstracting away details.

Quick Finds main liability was that the Union method took linear time to connect objects.
Quick Union improves on this slightly by not having to iterate through the entire array for each pair.

Despite this, we cannot guarantee the performance of Quick Union with all inputs.
For certain data, or when Quick Union results in a single-component, we may end up with a tree of singly-connected
nodes, which has a worst-case O(n^2) again.

To fix this, we implement an optimization to Quick Union known as Weighted Quick Union:
Instead of randomly connecting the second tree to the first, Weighted-QU uses an extra array to hold
the size of the individual trees and then always attaches the smaller tree to the larger.

Results:
"The depth of any node in a forest built by Weighted Quick Union for 'n' sites is at most (log n)."

Weighted Quick Union is implemented within a separate file with the small changes located within the
constructor and Union method.
*/


class QuickUnionUF {
  constructor(n) {
    this.id_array = [];
    for (let x = 0; x < n; x++) {
      this.id_array[x] = x;
    }
    this.componentCount = n;
  }

  // New find method traverses up the tree from the node until the root is found.
  // A root node is self-referential: the index in the id-array equals its entry.
  find(p) {
    while (p !== this.id_array[p]) {
      p = this.id_array[p];
    }
    return p;
  }

  union(p, q) {
    let i = this.find(p);
    let j = this.find(q);

    // If two sites are already connected, return
    if (i === j) {
      return;
    }
    // Point root node of p to root node of q to merge components
    this.id_array[i] = j;
    this.componentCount--;
  }

  connected(p, q) {
    return (this.find(p) === this.find(q));
  }

  count() {
    return this.componentCount;
  }

}

module.exports = QuickUnionUF;
