const request = require('request');
const fs = require("fs");

const localPath = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }

  fs.writeFile(`${localPath}`, body, function (error) {
    if (error) {
      console.log('error', error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${localPath}`);
    }
  });
});

