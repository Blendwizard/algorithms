const fs = require('fs');
const QuickFindUF = require('./QuickFindUF.js');


try {
  let x= 10;
  let data = fs.readFileSync('./inputData/tinyUF.txt', 'utf8');
  data = data.split('\n');

  let n = data[0];

  let uf = new QuickFindUF(n);
  console.log('BEFORE connections: ', uf.id_array);

  for (let x = 1; x < data.length; x++) {
    let p = data[x][0];
    let q = data[x][2];

    if (!uf.connected(p, q)) {
      uf.union(p, q);
      console.log(p, q)
    }
  }
  console.log('AFTER connections: ', uf.id_array);

} catch (err) {
  console.error(err);
}