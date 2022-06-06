const Selection_Sort = require('./Selection-Sort.js');
const Insertion_Sort = require('./Insertion-Sort.js');
const Shellsort = require('./Shell-Sort.js');

let data = [];
for (let x = 0; x < 10000; x++) {
  data.push(Math.floor(Math.random() * 10000));
}



console.log(Shellsort(data))
