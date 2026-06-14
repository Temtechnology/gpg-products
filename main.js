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
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Video: load local file ── */
  const videoInput  = document.getElementById('videoFileInput');
  const videoPlayer = document.getElementById('testimonialVideo');
  const placeholder = document.getElementById('videoPlaceholder');

  if (videoInput) {
    videoInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      videoPlayer.src = url;
      placeholder.style.display = 'none';
      videoPlayer.style.display = 'block';
      videoPlayer.play();
    });
  }

  /* ── Scroll-reveal: simple fade-in on scroll ── */
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
