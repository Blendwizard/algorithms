const Selection_Sort = require('./Selection-Sort.js');
const Insertion_Sort = require('./Insertion-Sort.js');

let data = [];
for (let x = 0; x < 100; x++) {
  data.push(Math.floor(Math.random() * 1000));
}



console.log(Insertion_Sort(data))
