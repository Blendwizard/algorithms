const fs = require('fs');
const path = require('path');

const GenerateData = () => {

  // Number of integers
  const n = 8000;

  // Largest possible random integer
  const upperLimit = 8000;


  let filepath = path.join(__dirname,'Input_Data/8KInts.txt');
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