/*
  Insertion Sort is similar to Selection Sort in that it utilizes a pointer which moves through our array from left-to-right and also considers everything to the left of the pointer as sorted. However, the implementation differs in the following ways: We use the index 'i' to maintain a reference to our position while sorting, which 'j' will follow as we traverse our array. The second for-loop checks if the current value we are looking at is less than the value before, and if so, swaps them and checks again. If the value is not less than the previous, then it is considered to be in the correct place (for the time being). This way, any lesser values will be moved from right-to-left towards the beginning of the array while satisfying the conditions and we will only consider the next value to the right of 'i' after sorting the current value.

  ~(1/4N^2) Compares and ~(1/4N^2) Exchanges on average.

  Note: Unlike Selection Sort, Insertion Sort does depend on the original order of entries.
  Best Case: Array is in ascending order, N-1 compares, and 0 exchanges.
  Worst Case: Reverse-sorted array (must bring every entry to the beginning) ~1/2N^2 compares ~1/2N^2 exchanges.

  Definitions
  Item: Single data row/object
  Key: What we use to sort a collection of items (example: first or last name, grade, or DOB for a student)
  Inversion: Pair of keys that are out-of-order

  Pros: Twice as fast as Selection Sort.
  Cons: Still quadratic in the worst-case.
*/

const Insertion_Sort = (array) => {

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

    for (let i = 0; i < length; i++) {

      for (let j = i; j > 0 && less(array[j], array[j-1]); j--) {
        exchange(array, j, j-1);
      }
    }
    return array;
  }

  return sort(array);
}

module.exports = Insertion_Sort;