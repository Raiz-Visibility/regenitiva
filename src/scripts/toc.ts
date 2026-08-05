const article = document.querySelector('.al-grid article');
const tocTargets = document.querySelectorAll('[data-toc-target]');

if (article && tocTargets.length) {
  const headings = article.querySelectorAll('h2[id]');

  headings.forEach((h2) => {
    tocTargets.forEach((target) => {
      const link = document.createElement('a');
      link.textContent = h2.textContent;
      link.href = '#' + h2.id;
      link.className = 'al-toc-link';
      link.dataset.section = h2.id;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        h2.scrollIntoView({ behavior: 'smooth' });
        const details = link.closest('details');
        if (details) details.open = false;
      });

      target.appendChild(link);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.al-toc-link').forEach((link) => {
            const active = (link as HTMLElement).dataset.section === entry.target.id;
            link.classList.toggle('active', active);
          });
        }
      });
    },
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  );

  headings.forEach((h2) => observer.observe(h2));
}
