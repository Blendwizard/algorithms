const fs = require('fs');
const QuickFindUF = require('./QuickFindUF.js');
const path = require('path') // <-- import path module to use absolute path.



try {
  const filepath = path.join(__dirname,'inputData/tinyUF.txt');
  console.log(filepath)
  let data = fs.readFileSync(filepath, 'utf8');
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