const less = require('./helpers/less.js');
const exchange = require('./helpers/exchange.js');
const KnuthShuffle = require('./Shuffle/shuffle.js');

/*
Quick Sort is considered as one of the top 10 algorithms of the 20th century in science and engineering.
Used in critical computational infrastructure.

Implementation: Shuffle the array. Partition the array so that for some 'j':
1. The entry a[j] is in place.
2. There is no larger entry to the left of 'j'.
3. There is no smaller entry to the right of 'j'.
Then sort each partitioned piece recursively.


2 main points of functionality: Partition and Sort.

Partition Explanation:
Choose first element in our array to be the partitioning element (an arbitrary random element after shuffling array).
Pointer 'i' will scan from left-to-right while a[i] < a[lo] (while the element at pointer 'i' is less than the partitioning element).
Pointer 'j' will scan from right-to-left while a[j] > a[lo]. (while the element at pointer 'j' is greater than the partitioning element).
When both pointers stop, we exchange the elements at 'i' and at 'j' with each other.
By making these exchanges, we maintain the invariant that nothing to the left of 'i' is greater than the partitioning element and
nothing to the right of 'j' is less than the partitioning element.

After the 2 pointers cross, we exchange our partitioning element with our 'j' pointer element so that nothing to left is greater and
nothing to the right is less.

We finally return 'j', which points to our partition element in the array where everything to the left is <= 'j' and everything to the right
is >= 'j'.


Quick Sort Highlights:
Quick Sort partitions in place: Gives it an advantage over Merge Sort by using less space.
Terminating the loop: Checking whether the 2 pointers have crossed can be tricky to implement.
Staying in bounds: The (j === lo) test is redundant (it will touch the partitioning element before that) but the (i === hi)
test is not.
Preserving randomness: Shuffling the array is needed for performance guarantee.
Equal keys: When duplicate keys are present, it is (counter-intuitively) better to stop on keys equal to the partitioning item's key.

Best Case: ~(N lg N)
Average Case: ~(1.39*N lg N) -> 39% more compares than Merge Sort but faster in practice due to less data movement.
Worst Case: ~(1/2*N^2) if array is shuffled and ends up in perfect sorted order (higher probability of your computer being struck by lightning).

Optimizations:
1. Large overhead for small subarrays means we can switch to Insertion Sort at a certain cutoff point.
2. Rather than use the first element at the partition element, use the estimated median element (sample the items, then take the median).


Sedgewick Lesson 1: Good algorithms are better than supercomputers.
Sedgewick Lesson 2: Great algorithms are better than good algorithms.

*/


const Quicksort = (array) => {

  const partition = (arr, lo, hi) => {
    let i = lo;
    let j = hi + 1;

    while (true) {
      while (less(arr[++i], arr[lo])) { // Find item on left to swap
        if (i === hi) { // Avoid going past right array boundaries
          break;
        }
      }
      while(less(arr[lo], arr[--j])) { // Find item on right to swap
        if (j === lo) {
          break;
        }
      }

      if (i >= j) { // If pointers have crossed each other, break out of loop
        break;
      }
      exchange(arr, i, j); // Swap left and right elements after finding them
    }
    exchange(arr, lo, j); // Swap partition element with 'j'
    return j; // Return index of item now known to be in place
  }

  const sort = (arr, lo, hi) => {
    if (hi <= lo) {
      return;
    }
    // Get partition
    let j = partition(arr, lo, hi);
    // Sort left partition
    sort(arr, lo, j-1);
    // Sort right partition
    sort(arr, j+1, hi);

    return arr;
  }

  // Shuffle our array
  KnuthShuffle(array);
  return sort(array, 0, array.length - 1);
}

module.exports = Quicksort;