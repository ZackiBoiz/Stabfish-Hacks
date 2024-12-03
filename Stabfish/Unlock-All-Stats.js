const unlocks = {
  "unlockedHats": 39,
  "unlockedMasters": 61,
  "unlockedFaces": 46,
  "unlockedBodies": 61
};
const spears = 6;
const spear_levels = 3;

for (var [unlock, amt] of Object.entries(unlocks)) {
  var val = JSON.parse(localStorage[unlock]);
  var filled = new Array(amt + 1).fill(true);
  localStorage[unlock] = JSON.stringify(filled);
}
localStorage.unlockedSpears = JSON.stringify(new Array(spears).fill(spear_levels));
window.location.reload();
