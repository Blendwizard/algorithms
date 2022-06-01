const fs = require('fs');

const content = 'Testing newer content to be written to file';

try {
  fs.writeFileSync('../UnionFind/test.txt', content);
  console.log('Successfully wrote to text file')
} catch (err) {
  console.error(err);
}
