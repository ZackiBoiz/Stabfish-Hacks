javascript: var unlocks = {
  "unlockedHats": 37,
  "unlockedMasters": 58,
  "unlockedFaces": 45,
  "unlockedBodies": 58
};
for (var [unlock, amt] of Object.entries(unlocks)) {
  var val = JSON.parse(localStorage[unlock]);
  var filled = new Array(amt + 1).fill(true);
  localStorage[unlock] = JSON.stringify(filled);
}
window.location.reload();
