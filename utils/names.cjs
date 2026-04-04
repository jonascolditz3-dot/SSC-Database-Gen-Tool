const fs = require('fs');
const path = require('path');

const customNamesPath = path.join(__dirname, '..', 'custom_names.json');
const customNames = JSON.parse(fs.readFileSync(customNamesPath, 'utf8'));

const surferNames = customNames.SURFER_NAMES;
const skinNames = customNames.SKIN_NAMES;
const boardNames = customNames.BOARD_NAMES;

const skinNameToId = {};
for (const [id, name] of Object.entries(skinNames)) {
  skinNameToId[name] = id;
}

module.exports = {
  surferNames,
  skinNames,
  boardNames,
  skinNameToId
};
