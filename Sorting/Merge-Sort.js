const less = require('./helpers/less.js');
const exchange = require('./helpers/exchange.js');

/*
Mergesort is considered a classic sort algorithm.

Implementation: Divide array into 2 halves. Recursively sort each half. Merge the two sorted halves.

The following algorithm first defines the merge functionality which will be used to join 2 sorted subarrays together.
It works by first copying the elements from our input array into an auxiliary array.
From our auxiliary array, we will copy back the elements to our original array, but in the correct sorted order.

Merge variable explanations:
I find that it is helpful to think of these variables as pointers (in the sense that they "point" at a location to place or compare values).
'k' is the pointer (index) which moves along our original array from left to right to keep track of where to place our compared value.
'i' is the pointer (index) which moves along the left subarray (a[lo] - a[mid]) and which will be compared against a value in the right subarray.
'j' is the pointer (index) which moves along the right subarray (a[mid+1] - a[hi]) and which will be compared against a value in the left subarray.



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

module.exports = Mergesort;