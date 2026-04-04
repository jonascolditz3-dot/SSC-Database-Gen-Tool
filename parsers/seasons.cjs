const fs = require('fs');
const path = require('path');

function parseSeasons(gamedataDir) {
  const seasonpassData = JSON.parse(fs.readFileSync(path.join(gamedataDir, 'seasonpass.json'), 'utf8'));
  const seasonsDict = {};

  for (const season of seasonpassData.seasons) {
    seasonsDict[season.id] = {
      name: season.seasonKey,
      start: season.startDate,
      end: season.endDate
    };
  }

  return { seasons: seasonsDict };
}

module.exports = { parseSeasons };
