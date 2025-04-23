const fs = require('fs');
const path = require('path');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

async function writeFile(fileName, content) {
  try {
    await fs.promises.mkdir(path.dirname(fileName), { recursive: true });
    const path = path.join(__dirname, fileName);
    const fileStream = fs.createWriteStream(path);
    await fileStream.write(content, (err) => {
      if (err) return reject(err);
      return resolve(`File "${fileName}" has been successfully written.`);
    });
  } catch (error) {
    return reject(error);
  }
}

readFile('config.json').then(data => {
  writeFile('config.json', JSON.stringify(data, null, 2));
}).catch(console.error);
