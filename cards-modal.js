document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('card-modal');
  const titleEl = document.getElementById('card-title');
  const contentEl = document.getElementById('card-content');

  const openModal = (title, html) => {
    titleEl.textContent = title || 'Detail Kartu';
    contentEl.innerHTML = html || '';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop') || e.target.dataset.close === 'true') {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Delegasi klik: pastikan ambil kartu yang diklik (bukan kartu pertama)
  const grid = document.querySelector('#kartu .card-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if (!card) return;
      const title = card.dataset.title || card.querySelector('h4')?.textContent || 'Detail Kartu';
      const rulesEl = card.querySelector('.card-rules');
      const html = rulesEl ? rulesEl.innerHTML : '<p>Belum ada aturan detail.</p>';
      openModal(title, html);
    });
  }
});