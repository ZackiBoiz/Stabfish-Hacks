setInterval(function() {
  if (document.querySelector('div.align-items-center.d-flex > .btn-sm.btn-orange.btn')) {
    try {
      document.querySelector('div.align-items-center.d-flex > .btn-sm.btn-orange.btn').click();
      setTimeout(function() {
        document.querySelector('.mt-2.justify-content-center.d-flex > .btn-sm.btn-orange.btn').click();
      }, 250);
    } catch (e) {}
  }
});
