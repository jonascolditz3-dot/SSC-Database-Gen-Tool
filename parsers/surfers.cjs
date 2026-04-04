const fs = require('fs');
const path = require('path');
const { surferNames, skinNames, skinNameToId } = require('../utils/names.cjs');

function parseSurfersAndSkins(gamedataDir) {
  const surfersData = JSON.parse(fs.readFileSync(path.join(gamedataDir, 'surfers.json'), 'utf8')).surfers;
  const skinsData = JSON.parse(fs.readFileSync(path.join(gamedataDir, 'surferskins.json'), 'utf8')).skins;

  const skinsBySurferIdentifier = {};
  for (const skin of skinsData) {
    const parts = skin.localizationKey.split('.');
    if (parts.length >= 3) {
      const identifier = parts[1];
      if (!skinsBySurferIdentifier[identifier]) {
        skinsBySurferIdentifier[identifier] = [];
      }
      const skinName = skinNames[skin.dataTag] || parts[2];
      skinsBySurferIdentifier[identifier].push({
        ...skin,
        name: skinName
      });
    }
  }

  const surfersDict = {};
  const skinsDict = {};

  for (const surfer of surfersData) {
    const surferId = surfer.dataTag.toString();
    const surferName = surferNames[surferId] || `Unknown_${surferId}`;
    
    const nameNoSpaces = surferName.toLowerCase().replace(/ /g, '');
    const nameUnderscores = surferName.toLowerCase().replace(/ /g, '_');
    
    let surferSkins = [...(skinsBySurferIdentifier[nameNoSpaces] || skinsBySurferIdentifier[nameUnderscores] || [])];
    
    let defaultSkin = surferSkins.find(s => s.unlockType === 0 || s.name.toUpperCase().includes('STANDARD') || s.name.toUpperCase().includes('DEFAULT'));
    let defaultSkinId = defaultSkin ? defaultSkin.dataTag.toString() : "0";
    let defaultSkinName = defaultSkin ? defaultSkin.name : `${surferName.toUpperCase()} STANDARD`;
    
    if (!surferSkins.some(s => s.dataTag.toString() === defaultSkinId)) {
      surferSkins.push({
        dataTag: parseInt(defaultSkinId) || 0,
        localizationKey: `skins.${nameNoSpaces}.${defaultSkinName.toLowerCase().replace(/ /g, '_')}`,
        name: defaultSkinName,
        available: true,
        unlockType: 0
      });
    }
    
    surferSkins.sort((a, b) => a.name.localeCompare(b.name));
    
    for (const skin of surferSkins) {
      skinsDict[skin.dataTag] = {
        name: skin.name,
        localizationKey: skin.localizationKey,
        available: skin.available !== undefined ? skin.available : true,
        unlockType: skin.unlockType,
        surferId: surfer.dataTag
      };
    }
    
    surfersDict[surfer.dataTag] = {
      name: surferName,
      defaultSkinId: defaultSkinId,
      available: surfer.available !== undefined ? surfer.available : true,
      unlockType: surfer.unlockType,
      skinIds: surferSkins.map(s => s.dataTag)
    };
  }

  return { surfers: surfersDict, skins: skinsDict };
}

module.exports = { parseSurfersAndSkins };
