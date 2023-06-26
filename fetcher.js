/* Takes 2 CLI; URL and local file path
download resource at URL to local path on machine
print out msg like "Downloaded and saved 1235 bytes to ./index.html"
*/

const request = require ('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv [2];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }
})