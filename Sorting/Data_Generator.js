const fs = require('fs');
const path = require('path');

const GenerateData = () => {

  // Number of integers
  const n = 24000;

  // Largest possible random integer
  const upperLimit = 10;


  let filepath = path.join(__dirname,'Input_Data/24KDuplicateInts.txt');
  for (let x = 0; x < n; x++) {
    let content = Math.floor(Math.random() * upperLimit);
    content += '\n';
    fs.writeFile(filepath, content, { flag: 'a+' },  err => {
      if (err) {
        console.log(err);
      }
    })
  }
}

GenerateData();