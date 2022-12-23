var lcs = JSON.parse(localStorage.getItem('stabfishLocalSettings'));
lcs.bgm = Number(prompt("Enter a value (0-1 is normal)", 100));
lcs.sfx = Number(prompt("Enter a value (0-1 is normal)", 100));
localStorage.setItem('stabfishLocalSettings', JSON.stringify(lcs));
window.location.reload();
