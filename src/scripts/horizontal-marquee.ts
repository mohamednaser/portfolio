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

  /*
   * The seamless loop needs the list twice, but shipping it twice in the HTML
   * puts every testimonial and logo on the page twice for crawlers. Clone at
   * runtime instead: the served markup has one of each, and the copy is hidden
   * from assistive tech and kept out of the tab order.
   */
  if (track.dataset.cloned !== 'true') {
    for (const node of [...track.children]) {
      const copy = node.cloneNode(true) as HTMLElement;
      copy.setAttribute('aria-hidden', 'true');
      copy.setAttribute('inert', '');
      copy.dataset.marqueeClone = 'true';
      track.appendChild(copy);
    }
    track.dataset.cloned = 'true';
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /**
   * In an RTL container `scrollLeft` runs from 0 down to a negative maximum, so
   * every offset below is expressed in "logical" units and multiplied by `sign`.
   */
  const rtl = getComputedStyle(viewport).direction === 'rtl';
  const sign = rtl ? -1 : 1;
  let paused = false;

  const getStep = () => {
    const item = track.querySelector<HTMLElement>('.marquee__item');
    return item ? item.offsetWidth + CARD_GAP : 320 + CARD_GAP;
  };

  const logicalScroll = () => viewport.scrollLeft * sign;

  const normalizeScroll = () => {
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    if (logicalScroll() >= half) {
      viewport.scrollLeft -= sign * half;
    }
  };

  const scrollByStep = (direction: 1 | -1) => {
    const step = getStep();
    let target = logicalScroll() + direction * step;
    if (direction === -1 && logicalScroll() <= 1) {
      target = track.scrollWidth / 2 - step;
    }
    viewport.scrollTo({ left: target * sign, behavior: 'smooth' });
    window.setTimeout(normalizeScroll, 350);
  };

  const tick = () => {
    if (!paused && !reducedMotion) {
      viewport.scrollLeft += sign * AUTO_SPEED;
      normalizeScroll();
    }
    requestAnimationFrame(tick);
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
    // Arrow keys follow what the user sees, not the logical order.
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByStep(rtl ? 1 : -1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByStep(rtl ? -1 : 1);
    }
  });

  if (!reducedMotion) {
    requestAnimationFrame(tick);
  }
}

function initAll() {
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach(initMarquee);
}

initAll();
