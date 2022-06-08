const less = require('./helpers/less.js');
const exchange = require('./helpers/exchange.js');

/*
Mergesort is considered a classic sort algorithm.

Implementation: Divide array into 2 halves. Recursively sort each half. Merge the two sorted halves.

The following algorithm first defines the merge functionality which will be used to join 2 sorted subarrays together.
It works by first copying the elements from our input array into an auxiliary array.
From our auxiliary array, we will copy back the elements to our original array, but in the correct sorted order.

Merge() variable and parameter explanation:
'arr' is the input array we want to sort.
'aux' is the initially empty array we will use to hold our unsorted array elements.
'lo' is the left most location in our array or subarray.
'mid' is the midpoint of of our array, where we will divide it into 2 halves.
'hi' is the right most location in our array or subarray.

I find that it is helpful to think of the variables (k, i, j) as pointers (in the sense that they "point" at a location to place or to compare values).
'k' is the pointer (index) which moves along our original array from left to right to keep track of where to place our compared value.
'i' is the pointer (index) which moves along the left subarray (a[lo] - a[mid]) and which will be compared against a value in the right subarray.
'j' is the pointer (index) which moves along the right subarray (a[mid+1] - a[hi]) and which will be compared against a value in the left subarray.

Performance:
Best Case: 1/2(n lg n)
Average Case: (n lg n)
Worst Case: (n lg n)

Notes: The merge is considered an abstract in-place merge. In-place merge does exist but is too complex to be used in practice.

Optimizations:
1. Mergesort has high overhead cost for small subarrays. Solution? Use Insertion Sort after a certain array-size cutoff point.
2. Stop if already sorted: If the biggest item in the left half <= the smallest item in the right half.


Below Mergesort is another implementation known as Bottom-Up Mergesort which does not rely on recursion and instead merges subarrays
of size 1, 2, 4, 8, 16, ...

BU-Mergesort uses the same merge method but sorts without recursion by using 2 for-loops: the outer loop is the size of the subarray which
is executed log n times until we get to 'n' (the array length).



*/

const Mergesort = (array) => {

  const merge = (arr, aux, lo, mid, hi) => {
    // Copy to auxiliary array
    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k];
    }

    // Get starting points for left and right subarrays
    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      // If left subarray is exhausted
      if (i > mid) {
        arr[k] = aux[j++];
      } else if (j > hi) {
      // If right subarray is exhausted
        arr[k] = aux[i++];
      } else if (less(aux[j], aux[i])) {
      // If the right subarray value is less then the left subarray value, move the value over and increment the index 'j'
        arr[k] = aux[j++];
      } else {
        arr[k] = aux[i++];
      }
    }
  }


  const sort = (arr, aux, lo, hi) => {
    if (hi <= lo) {
      return;
    }
    let mid = lo + (Math.floor((hi - lo) / 2));
    // Sort first half
    sort(arr, aux, lo, mid);
    // Sort second half
    sort(arr, aux, mid+1, hi);
    // Merge both halves
    merge(arr, aux, lo, mid, hi);

    return arr;
  }

  // Call sort method with starting arguments
  let aux = [];
  return sort(array, aux, 0, array.length - 1);

}



// Bottom-up Mergesort without recursion
const bu_Mergesort = (array) => {

  const merge = (arr, aux, lo, mid, hi) => {
    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k];
    }

    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        arr[k] = aux[j++];
      } else if (j > hi) {
        arr[k] = aux[i++];
      } else if (less(aux[j], aux[i])) {
        arr[k] = aux[j++];
      } else {
        arr[k] = aux[i++];
      }
    }
  }

  const sort = (arr) => {
    let n = arr.length;
    let aux = [];

    for (let size = 1; size < n; size *= 2) {
      for (let  lo = 0; lo < n - size; lo += size + size) {
        merge(arr, aux, lo, lo + size - 1, Math.min(lo + size + size - 1, n - 1));
      }
    }
    return arr;
  }

  return sort(array);
}

module.exports = Mergesort;