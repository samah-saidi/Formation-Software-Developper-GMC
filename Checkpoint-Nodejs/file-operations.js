const fs = require('fs');

// 1. Create welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');
console.log('welcome.txt created');

// 2. Read from hello.txt (make sure hello.txt exists)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
  } else {
    console.log('Data from hello.txt:', data);
  }
});
