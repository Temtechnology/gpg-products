/* ============================================
   GPG HERBAL TEA — Main JavaScript
   FAQ accordion, video handler, scroll effects
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Scroll-reveal ── */
  const revealEls = document.querySelectorAll(
    '.benefit-card, .ingredient-card, .tcard, .how-step, .faq-item'
  );
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

});

// Carousel
  var track = document.querySelector('.carousel-track');
  var dots = document.querySelectorAll('.dot');
  var current = 0;
  var total = 2;

  function goToSlide(index) {
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d) { d.classList.remove('active'); });
    dots[current].classList.add('active');
  }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { goToSlide(i); });
  });

  // Auto rotate every 3 seconds
  setInterval(function() {
    goToSlide((current + 1) % total);
  }, 3000);

  // Swipe support for mobile
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) goToSlide((current + 1) % total);
    if (diff < -50) goToSlide((current - 1 + total) % total);
  });