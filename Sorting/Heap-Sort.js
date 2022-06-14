/*
Heap Sort uses our new Binary Heap data structure to implement an efficient sort algorithm.
Implementation: Create a max-heap with all N keys. Repeatedly remove the maximum key.

Because Heap Sort takes an unsorted array as input, we modify our exchange and less methods to handle 0-indexed arrays instead of 1-indexed.

Performance and Comparison:
Heap construction: <= 2N compares and exchanges.
Heapsort: <= 2N lg N compares and exchanges.

Significance: In-place sorting algorithm with N log N worst-case.
Mergesort: takes linear extra space.
Quicksort: takes quadratic time in the worst case (unlikely given shuffling prior to sort).
Heapsort: in place and guaranteed N log N compares.

In practice: Sedgewick states that heapsort is not used often. Heapsort is optimal for time and space but:
Inner loop is more complex than quicksort's.
Makes poor use of cache memory (references to memory are scattered, and because heapsort looks far away at memory, it can reduce performance).
Not stable.
*/



const Heapsort = (pq) => {
  let n = pq.length;

  const exchange = (arr, x, y) => {
    let temp = arr[x - 1];
    arr[x - 1] = arr[y - 1];
    arr[y - 1] = temp;
  }

  const less = (arr, a, b) => {
    return arr[a - 1] < arr[b - 1];
  }

  const swim = (k) => {
    while (k > 1 && less(pq, Math.floor(k / 2), k)) {
      exchange(pq, k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  const sink = (pq, k, n) => {
    while (2*k <= n) {
      let j = 2*k;
      if (j < n && less(pq, j, j + 1)) {
        j++;
      }
      if (!less(pq, k, j)) {
        break;
      }
      exchange(pq, k, j);
      k = j;

    }
  }
  // Build max heap using bottom-up method
  for (let k = Math.floor(n / 2); k >=1; k--) {
    sink(pq, k, n);
  }
  while (n > 1) {
    // Exchange the first element with the last, then decrement the heap
    exchange(pq, 1, n);
    sink(pq, 1, --n);
  }
}
