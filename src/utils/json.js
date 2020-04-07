const fs = require('fs');

function readJSON(filePath) {
  const content = fs.readFileSync(filePath);
  return JSON.parse(content);
}

function updateJSON(filePath, key, value, method = '') {
  const appConfig = readJSON(filePath);

  if (method) {
    appConfig[key][method](value);
  } else {
    appConfig[key] = value;
  }

  fs.writeFileSync(filePath, JSON.stringify(appConfig, null, 2));
}

exports.readJSON = readJSON;
exports.updateJSON = updateJSON;