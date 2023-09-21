const fs = require('fs');
const readline = require('readline');

const readStream = fs.createReadStream(filePath)
const writeStream = fs.createWriteStream('output.txt', { encoding: "utf8"} )

const role = process.argv[2];
const personName = process.argv[3]
const company = process.argv[4]
const filePath = process.argv[5] + 'txt' || 'defaultTemplate.txt'

const rd = readline.createInterface({
  input: readStream,
  output: writeStream
});


rd.on('line', function(line) {
  let newContent = line.toString()
                        .replaceAll('{ROLE}', role)
                        .replaceAll('{COMPANY}', company)
                        .replaceAll('{NAME}', personName)

  writeStream.write(newContent , (err) => {
      if (err) throw err;
      console.log("Message has been written")
    })
});