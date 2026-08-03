const tabBtns = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

// Tab filtering
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    projectCards.forEach(card => {
      card.style.display = card.getAttribute('data-category') === filter ? 'block' : 'none';
    });
    setTimeout(() => { if (window.instgrm) window.instgrm.Embeds.process(); }, 100);
  });
});

// Show only ads by default
window.addEventListener('DOMContentLoaded', () => {
  projectCards.forEach(card => {
    if (card.getAttribute('data-category') !== 'ads') card.style.display = 'none';
  });
  if (window.instgrm) window.instgrm.Embeds.process();
});

// Video modal
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoIframe');

if (modal && iframe) {
  document.querySelectorAll('.project-card[data-video-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-video-id');
      const h  = card.getAttribute('data-video-h');
      iframe.src = `https://player.vimeo.com/video/${id}?h=${h}&autoplay=1&title=0&byline=0&portrait=0`;
      modal.style.display = 'flex';
    });
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      iframe.src = '';
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { iframe.src = ''; modal.style.display = 'none'; }
  });
}
