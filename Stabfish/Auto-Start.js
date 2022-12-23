var listener = document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() == "escape") {
    clearInterval(timer);
    document.removeEventListener("keydown", listener);
    return;
  }
});
var timer = setInterval(function() {
  document.querySelector('.btn-100.btn-primary.btn').click();
}, 500);
