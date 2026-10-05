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

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
