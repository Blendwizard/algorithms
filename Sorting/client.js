const fs = require('fs');
const path = require('path');
const Selection_Sort = require('./Selection-Sort.js');
const Insertion_Sort = require('./Insertion-Sort.js');
const Shellsort = require('./Shell-Sort.js');
const Mergesort = require('./Merge-Sort.js');
const Quicksort = require('./Quick-Sort.js');
const QS_DuplicateKeys = require('./Quick-Sort.js');


try {
  const filepath = path.join(__dirname,'Input_Data/24KDuplicateInts.txt');
  let data = fs.readFileSync(filepath, 'utf8');
  data = data.split('\n');

  // Map array of strings to integers
  data = data.map((str) => {
    return Number(str);
  })

  // Using rough timing mechanism to estimate runtime
  console.time('mark');

  // Choose algorithm
  // Selection_Sort(data);
  // Insertion_Sort(data);
  // Shellsort(data);
  // Mergesort(data);
  Quicksort(data);


  console.timeEnd('mark');

} catch (err) {
  console.error(err);
}
