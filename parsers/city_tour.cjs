const fs = require('fs');
const path = require('path');

function parseCityTour(gamedataDir) {
  const filePath = path.join(gamedataDir, 'city_tour.json');
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: ${filePath} not found.`);
    return { cityTour: {} };
  }

  const rawData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(rawData);
  const tree = {};

  if (!data.goals) {
    return { cityTour: {} };
  }

  for (const goal of data.goals) {
    // Expected ID format: district1_modeNormal_chapter1_stage1_goal1
    const parts = goal.id.split('_');
    if (parts.length !== 5) continue;

    const district = parts[0];
    const mode = parts[1];
    const chapter = parts[2];
    const stage = parts[3];
    const goalNumStr = parts[4].replace('goal', '');
    const goalIndex = parseInt(goalNumStr, 10) - 1; // 0-indexed array

    if (!tree[district]) tree[district] = {};
    if (!tree[district][mode]) tree[district][mode] = {};
    if (!tree[district][mode][chapter]) tree[district][mode][chapter] = {};
    if (!tree[district][mode][chapter][stage]) tree[district][mode][chapter][stage] = [];

    // Assign the boolean value to the correct index in the array
    tree[district][mode][chapter][stage][goalIndex] = goal.completed;
  }

  // Optional: Clean up any nulls in arrays if goal IDs skipped numbers (e.g. goal1, goal3)
  // JSON.stringify will turn empty array slots into nulls, which is fine, but we can explicitly set them to false.
  for (const d in tree) {
    for (const m in tree[d]) {
      for (const c in tree[d][m]) {
        for (const s in tree[d][m][c]) {
          const arr = tree[d][m][c][s];
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
              arr[i] = false;
            }
          }
        }
      }
    }
  }

  return { cityTour: tree };
}

module.exports = { parseCityTour };
