const fs = require('fs');

const filePath = 'output.txt';
const data = 'Hello, World!';

// Write to file asynchronously
fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File has been written successfully');
    }
});