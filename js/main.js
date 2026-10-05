(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
  });

  // Order estimate
  var zone = document.getElementById('zone');
  var qty = document.getElementById('qty');
  var total = document.getElementById('total');
  function update() {
    var q = Math.max(0, parseInt(qty.value, 10) || 0);
    total.textContent = 'Ksh ' + (q * Number(zone.value)).toLocaleString('en-KE');
  }
  zone.addEventListener('change', update);
  qty.addEventListener('input', update);
  update();

  // Respect reduced motion: show the still poster instead of playing the video
  var video = document.querySelector('.bg-video');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { video.pause(); video.removeAttribute('autoplay'); }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
