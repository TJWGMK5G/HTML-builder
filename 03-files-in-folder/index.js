const fs = require('fs')
const path = require('path')
fs.readdir('secret-folder', (err, data) => {
    console.log(data);
    data.forEach( file => {
        console.log(file+" "+path.extname(file));
        console.log(fs.statSync("secret-folder/"+file).size+" "+'byte');
    });
});
