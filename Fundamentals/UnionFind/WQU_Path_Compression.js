const WeightedQuickUnionUF = require('./WeightedQuickUnion.js');

/* This final optimization aims to flatten the trees using a simple 1-Pass variant of path compression which
halves the path length to the root node.

For this example, we simply extend the Weighted Quick Union class to our Weighted Quick Union with Path Compression class and only slightly change our 'find' functionality.
*/

class WQU_Path_Compression extends WeightedQuickUnionUF {

  find(p) {
    while (p !== this.id_array[p]) {
      this.id_array[p] = this.id_array[this.id_array[p]];
      p = this.id_array[p];
    }
    return p;
  }
}

module.exports = WQU_Path_Compression;