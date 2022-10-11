import fs from 'fs';

const filename = 'file.txt';
//callback
fs.readFile(filename, 'utf8', function (err, data) {
  console.log(data);
});

//promise/.then
fs.readFile(filename, 'utf8').then((err, data) => {
  console.log(data);
});

//async
async function showText() {
  const data = await fs.readFileSync(filename, 'utf8');
  return data;
}
console.log(showText());
