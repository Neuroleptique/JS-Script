const fs = require('fs')
const filename = process.argv[2];
const name = process.argv[3]
let greeting = `console.log(Hello ${name})`

fs.writeFile(filename, greeting, (err) => {
  if (err) throw err;
  console.log(`Data has been written`)
})