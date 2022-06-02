const fs = require('fs');
const QuickFindUF = require('./QuickFindUF.js');
const path = require('path')


/*
This program reads one of the text files from the inputData folder and executes our Quick Find algorithm on the input. Specifically, it will read the first integer from the chosen text file, and create a new UF instance with that integer, before iterating through the integer-pairs while establishing and looking for connections.
*/

try {
  const filepath = path.join(__dirname,'inputData/mediumUF.txt');
  let data = fs.readFileSync(filepath, 'utf8');
  data = data.split('\n');

  // Number of "sites" or objects (sites in an electrical circuit, friends in a social network, etc)
  let n = data[0];

  let uf = new QuickFindUF(n);

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

} catch (err) {
  console.error(err);
}