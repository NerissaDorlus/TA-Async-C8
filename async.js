import fs from 'fs';

const filename = 'file.txt';
let data = fs.readFile(filename, 'utf8', function (err, data) {
  console.log(data);
});
data = fs.readFile(filename, 'utf8').then((err, data) => {
  console.log(data);
});
