const fs = require('fs');
const QuickFindUF = require('./QuickFindUF.js');
const QuickUnionUF = require('./QuickUnionUF.js');
const WeightedQuickUnionUF = require('./WeightedQuickUnion.js');
const path = require('path')


/*
This program reads one of the text files from the inputData folder and executes one of our Union Find algorithms on the input. Specifically, it will read the first integer from the chosen text file, and create a new UF instance with that integer, before iterating through the integer-pairs while establishing and looking for connections using one of the chosen algorithms specified at the top of this file.
*/

try {
  const filepath = path.join(__dirname,'inputData/tinyUF.txt');
  let data = fs.readFileSync(filepath, 'utf8');
  data = data.split('\n');

  // Number of "sites" or objects (sites in an electrical circuit, friends in a social network, etc)
  let n = data[0];

  // Using rough timing mechanism to estimate runtime
  console.time('mark');

  // To test different algorithms, simply change the class below to any of the UF algos being required in
  let uf = new WeightedQuickUnionUF(n);

  for (let x = 1; x < data.length; x++) {

    let pair = data[x].split(' ')
    let p = parseInt(pair[0]);
    let q = parseInt(pair[1])

    // If the pair is NOT connected, connect them, and then print the pair, otherwise ignore and move to next pair
    if (!uf.connected(p, q)) {
      uf.union(p, q);
      console.log(p, q)
    }
  }
  console.log(uf.count() + ' components')
  console.timeEnd('mark');

} catch (err) {
  console.error(err);
}
