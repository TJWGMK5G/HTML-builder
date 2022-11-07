const { stdin, stdout } = process; 
const fs = require('fs'); 

stdout.write('Привет!\n')
stdin.on('data', data => {
  const name = data.toString();
  fs.writeFile("textfile1.txt", name, function(err) { 
    if(err) { 
        return console.log(err);
    }
    process.exit();
  });
});

