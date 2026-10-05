(function () {
  // Order estimate (Delivery page only)
  var zone = document.getElementById('zone');
  var qty = document.getElementById('qty');
  var total = document.getElementById('total');
  if (zone && qty && total) {
    var update = function () {
      var q = Math.max(0, parseInt(qty.value, 10) || 0);
      total.textContent = 'Ksh ' + (q * Number(zone.value)).toLocaleString('en-KE');
    };
    zone.addEventListener('change', update);
    qty.addEventListener('input', update);
    update();
  }

  // Respect reduced motion: show the still poster instead of playing the video
  var video = document.querySelector('.bg-video');
  if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause(); video.removeAttribute('autoplay');
  }

  // Photo viewer (Our Work page)
  var box = document.getElementById('lightbox');
  if (box && box.showModal) {
    document.querySelectorAll('.gallery img').forEach(function (img) {
      img.addEventListener('click', function () {
        box.querySelector('img').src = img.src;
        box.querySelector('img').alt = img.alt;
        box.querySelector('p').textContent = img.alt;
        box.showModal();
      });
    });
    box.addEventListener('click', function (e) { if (e.target !== box.querySelector('img')) box.close(); });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
