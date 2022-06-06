/*
Rather than move elements or entries 1 position at a time as in Insertion or Selection Sort, Shellsort seeks to move them more than 1 position at a time by "H-sorting" the array.

Implementation: Use Insertion Sort but make the stride length = H instead of 1.

Q: Why Insertion Sort?
A: Big increments = subarrays are small (Which Insertion Sort works well with). Small increments = partially sorted (Insertion Sort is fast here).

Shellsort gains efficiency by moving elements less and less with each H-iteration or pass. An example might be to H-sort the array by 7, then 3 on the second pass, and then 1 on the final pass. (h = 7 => 3 => 1). If h = 1; then we are now using a standard Insertion Sort.

Q: How do we determine what sequence to use for H?
A: 1. Powers of 2? No. Elements in even positions will not be compared with elements in odd positions until h = 1 which leads to poor performance.
2. Powers of 2 minus 1? Works OK.
3. 3x + 1? OK, easy to compute. (1, 4, 13, 40, 121, 400)
4. Sedgewick's Sequence?: Good, more complicated to implement.
The best sequence is not known and continues to elude researchers.


Proposition: The worst-case number of compares used by Shellsort with the (3x + 1) increment sequence is O(N^3/2).
Property: In practice, number of compares used with this sequence is at most by a small multiple of N times the # of increments used.
Remark: No accurate model has been proven as of yet.

Pros: Very fast with certain data sets, small code footprint (used in embedded systems), beats sophisticated methods for medium-sized arrays.
Cons: Not efficient with massive arrays. Average-case performance? Optimized increment sequence (open problem)?


*/

// Shellsort implementation using (3x + 1) increment sequence

const Shellsort = (array) => {

  const less = (a, b) => {
    return a < b;
  }

  const exchange = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  const sort = (array) => {
    const length = array.length;
    let h = 1;

    // Get the starting increment position (for example, start at 364 and then move down from there)
    while (h < length / 3) {
      h = Math.floor((3 * h) + 1); // -> 1, 4, 13, 40, 121, 364, 1093
    }
    // h-sort the array
    while (h >= 1) {
      // Insertion Sort, starting at 'h'
      for (let i = h; i < length; i++) {

        // 'j' must be decremented by 'h' to stride by that amount.
        for (let j = i; j >= h && less(array[j], array[j-h]); j -= h) {
          exchange(array, j, j - h);
        }
      }
      // Move to next increment down
      h = Math.floor(h / 3);
    }
    return array;
  }
  return sort(array);
}

module.exports = Shellsort;