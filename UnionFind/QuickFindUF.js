/* Below is an implementation for Quick Find.

Cost-model: Number of array accesses (for read or write).
(algorithm) (initialize) (union) (find)
quick-find      N           N       1

Draw-backs:
Union is too expensive: It takes N^2 array accesses to process a sequence of
N union commands on N objects.

Quadratic algorithms will not scale with increasing problem size.
*/

class QuickFindUF {
  // 'n' is the number of objects. Our constructor will create a data structure containing that number of objects.
  constructor(n) {
    this.id_array = [];
    // Set id of each object to itself (populate array) (N-array accesses)
    for (let x = 0; x < n; x++) {
      this.id_array[x] = x;
    }
  }

  // Check if objects are within same component (2 array accesses)
  connected = (p, q) => {
    return this.id_array[p] === this.id_array[q];
  }

  // Change all objects with id[p] to id[q]
  union = (p, q) => {
    let pID = this.id_array[p];
    let qID = this.id_array[q];

    // Iterate through IDs, changing pIDs to be part of qID component. (At most, 2N+2 array accesses)
    for (let x = 0; x < this.id_array.length; x++) {
      if (this.id_array[x] === pID) {
        this.id_array[x] = qID;
      }
    }
  }


}

module.exports = QuickFindUF;
