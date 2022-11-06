const { stdin, stdout } = process;
const fs = require('fs');
const output = fs.createWriteStream('destination.txt');
const input = fs.createReadStream('destination.txt', 'utf-8');

stdout.write('Привет!\n')
stdin.on('data', data => {
  const name = data.toString();
  process.exit();
});
input.on('data', chunk => output.write(chunk));
input.on('error', error => console.log('Error', error.message));





