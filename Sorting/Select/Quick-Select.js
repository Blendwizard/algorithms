const less = require('../helpers/less.js');
const exchange = require('../helpers/exchange.js');
const KnuthShuffle = require('../Shuffle/shuffle.js');

/*
Selection Problem: Given an array of N items, find the Kth largest element.
Example: Find the minimum (k = 0), Find the maximum (k = N - 1), Find the median (k = N / 2) where N = a.length - 1.


Partition the array as in Quick Sort. Then, only enter the partition where we can find 'k'.
Keep searching until 'j' === 'k' (continue until we have one element).

*/

const Quickselect = (array, k) => {

  const partition = (arr, lo, hi) => {
    let i = lo;
    let j = hi + 1;
    while (true) {
      while (less(arr[++i], arr[lo])) {
        if (i === hi) {
          break;
        }
      }
      while(less(arr[lo], arr[--j])) {
        if (j === lo) {
          break;
        }
      }

      if (i >= j) {
        break;
      }
      exchange(arr, i, j);
    }
    exchange(arr, lo, j);
    return j;
  }

  KnuthShuffle(array);
  let lo = 0;
  let hi = array.length - 1;

  while (hi > lo) {
    let j = partition(array, lo, hi);
    if (j < k) {
      lo = j + 1;
    } else if (j > k) {
      hi = j - 1;
    } else {
      return array[k];
    }
    console.log(array)
  }
  console.log("END:::", array)
  return array[k];
}

const input = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(Quickselect(input, 5));
