/*
  Selection Sort works by examining each entry in array, locating the smallest value and swapping it with the first entry. It then locates the second smallest entry and swaps it with the second entry, continuing until it reaches the end of the array.

  The algorithm is implemented using a pointer which maintains a reference to the beginning of the array with the position moving to the right every time a swap occurs. This guarantees that the everything to the left of the pointer is sorted and will not be looked at again, while everything to the right will need to be iterated over to find the next minimum value.

  Selection Sort uses ~(N^2/2) compares and (N) exchanges to sort an array of length N.

  Pros: Easy to implement and understand, useful for small arrays.
  Cons: Quadratic time complexity means that Selection Sort will not scale properly with large inputs.

*/

const Selection_Sort = (array) => {

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
    for (let x = 0; x < length; x++) {
      let min = x;

      for (let y = x + 1; y < length; y++) {
        if (less(array[y], array[min])) {
          // Store the location of the lowest value found
          min = y;
        }
      }
      // After iterating through all remaining entries, swap the pointer value with our new-found lowest value.
      exchange(array, x, min);
    }
    return array;
  }

  return sort(array);
}



module.exports = Selection_Sort;