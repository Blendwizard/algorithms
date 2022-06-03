
/*
The second optimization for Union Find which attaches smaller trees to larger trees during Union operations.
With this optimization, we can successfully evaluate the largeUF.txt file within a reasonable amount of time.

Performance characteristics:
(algorithm)             (initialize)      (union)      (find)
weighted quick-union         N             log n        log n
*/

class WeightedQuickUnionUF {
  constructor(n) {
     // Parent links (site-indexed)
    this.id_array = [];

    // Size of component for roots (site-indexed)
    this.size_array = [];

    // Inititialize links array and size of components
    for (let x = 0; x < n; x++) {
      this.id_array[x] = x;
      this.size_array[x] = 1;
    }
    this.componentCount = n;
  }

  union(p, q) {
    let i = this.find(p);
    let j = this.find(q);

    // If two sites are already connected, return
    if (i === j) {
      return;
    }

    // Make smaller component point to larger component
    if (this.size_array[i] < this.size_array[j]) {
      this.id_array[i] = j;
      // Update component size to reflect new combined size
      this.size_array[j] += this.size_array[i];
    } else {
      this.id_array[j] = i;
      this.size_array[i] += this.size_array[j];
    }
    this.componentCount--;
  }

  find(p) {
    while (p !== this.id_array[p]) {
      p = this.id_array[p];
    }

    return p;
  }

  connected(p, q) {
    return (this.find(p) === this.find(q));
  }

  count() {
    return this.componentCount;
  }
}

module.exports = WeightedQuickUnionUF;
