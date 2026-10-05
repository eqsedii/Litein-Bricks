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

  // YouTube and TikTok pop up after 30 seconds on a page
  var pop = document.getElementById('popSocial');
  if (pop) setTimeout(function () { pop.classList.add('show'); }, 30000);

  // Scroll reveal: sections slide and fade in as they come into view
  var targets = document.querySelectorAll('.section, .highlights, .cta-band, .menu a, .gallery figure, .features li, .steps li, .zone-list li, .scroll-cue');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add('in');
        io.unobserve(el);
        // hand control back to normal styles so hover effects stay snappy
        setTimeout(function () { el.classList.remove('reveal', 'in'); }, 1400);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      if (el.matches('.menu a, .gallery figure, .features li, .steps li, .zone-list li')) {
        el.style.setProperty('--d', ((Array.prototype.indexOf.call(el.parentNode.children, el)) * 0.08) + 's');
      }
      io.observe(el);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
