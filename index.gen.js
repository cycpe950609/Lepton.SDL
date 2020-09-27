const srcFolder = './src/';
const fs = require('fs');
const path = require('path');

const getFileName = (input) => {
    const name = input.split(path.sep).pop();
    const FileSepName = name.split('.');
    return FileSepName[FileSepName.length - 2];
};

//Create file
fs.writeFile('index.js', '', function (err) {
    if (err) return console.log(err);
    console.log('Create index.js');
});


let srcLogger = fs.createWriteStream('index.js', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})

srcLogger.write(`
'use strict'

let sdl2 = {
	require(name) {
		return require('./src/' + name)
    },
`
)

fs.readdirSync(srcFolder).forEach(file => {
    let filename = getFileName(file)
  //console.log(file);
  srcLogger.write("     get " + filename + "() {\n");
  srcLogger.write("         return require('./src/" + filename + "')\n" );
  srcLogger.write("     },\n")
});

srcLogger.write(`
get font() {
    return require('sdl2-ttf').class('ttf')
},
get image() {
    return require('sdl2-image').class('image')
}
}

module.exports = sdl2`)


srcLogger.end();
