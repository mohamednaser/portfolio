const CARD_GAP = 24;
const AUTO_SPEED = 0.6;

function initMarquee(root: HTMLElement) {
  if (root.dataset.initialized === 'true') return;

  const viewport = root.querySelector<HTMLElement>('[data-viewport]');
  const track = root.querySelector<HTMLElement>('[data-track]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-direction="prev"]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-direction="next"]');

  if (!viewport || !track || !prevBtn || !nextBtn) return;

  root.dataset.initialized = 'true';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let paused = false;
  let rafId = 0;

  const getStep = () => {
    const item = track.querySelector<HTMLElement>('.marquee__item');
    return item ? item.offsetWidth + CARD_GAP : 320 + CARD_GAP;
  };

  const normalizeScroll = () => {
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    if (viewport.scrollLeft >= half) {
      viewport.scrollLeft -= half;
    }
  };

  const scrollByStep = (direction: 1 | -1) => {
    const step = getStep();
    let target = viewport.scrollLeft + direction * step;
    if (direction === -1 && viewport.scrollLeft <= 1) {
      target = track.scrollWidth / 2 - step;
    }
    viewport.scrollTo({ left: target, behavior: 'smooth' });
    window.setTimeout(normalizeScroll, 350);
  };

  const tick = () => {
    if (!paused && !reducedMotion) {
      viewport.scrollLeft += AUTO_SPEED;
      normalizeScroll();
    }
    rafId = requestAnimationFrame(tick);
  };

  root.addEventListener('mouseenter', () => {
    paused = true;
  });
  root.addEventListener('mouseleave', () => {
    paused = false;
  });

  prevBtn.addEventListener('click', () => scrollByStep(-1));
  nextBtn.addEventListener('click', () => scrollByStep(1));

  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByStep(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByStep(1);
    }
  });

  if (!reducedMotion) {
    rafId = requestAnimationFrame(tick);
  }

  document.addEventListener(
    'astro:before-swap',
    () => {
      cancelAnimationFrame(rafId);
    },
    { once: true },
  );
}

function initAll() {
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach(initMarquee);
}

initAll();
document.addEventListener('astro:page-load', initAll);
