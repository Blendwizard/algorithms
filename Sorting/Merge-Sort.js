const less = require('./helpers/less.js');
const exchange = require('./helpers/exchange.js');

const Mergesort = (array) => {

  const merge = (arr, aux, lo, mid, hi) => {
    // Copy to auxiliary array
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