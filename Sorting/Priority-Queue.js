const less = require('./helpers/less.js');
const exchange = require('./helpers/exchange.js');
/*
A Priority Queue (PQ) is used as a variant of sorting while providing a flexible data structure used in many applications.
Similar to the basic Queue in our Fundamentals section, the Priority Queue implements the same overall structure with one key difference:
Instead of operating a FIFO strategy when removing items, the PQ considers the items to have a total order and we want to remove
the largest or smallest item instead each time.

Sedgewick's Example Use Case:
Suppose a credit card company is processing billions or trillions of transactions in a short amount of time and cannot feasibly store all transactions.
The company wants to look at the M largest items from the transaction stream.

Implementation Ideas:
sort -> time = N log N; space = N (not feasible in this example)
elementary PQ -> time = M*N; space = M (what we will implement in this file, straight-forward, but too slow)
binary heap -> time = N log M; space = M (ideal, uses DS known as a binary heap)

The below implementation is an unordered variation which removes the maximum each time delete is called however,
you could also use an ordered array variation which improves on order-of-growth for N items.

Order-of-growth for operations:
unordered array -> insertion = O(1); delete max = O(N); find max O(N)
ordered array -> insertion = O(N); delete max = O(1); find max O(1)
goal => log N for all operations
*/

class UnorderedMaxPQ {
  constructor() {
    this.queue = [];
    this.n = 0;
  }

  isEmpty() {
    return n === 0;
  }

  insert(key) {
    this.queue[this.n++] = key;
  }

  deleteMax() {
    let max = 0;
    for (let i = 1; i < this.n; i++) {
      if (less(max, i)) {
        max = i;
      }
      exchange(max, this.n - 1);
      return this.queue[this.n];
    }
  }


}
