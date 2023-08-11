const fs = require('fs')
const filename = process.argv[2];
const personName = process.argv[3]
let greeting = `Hello ${personName}`

fs.writeFile(filename, greeting, (err) => {
  if (err) throw err;
  console.log("Message has been written")
})