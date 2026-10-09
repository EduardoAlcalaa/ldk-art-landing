import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './Container.jsx';
import { PROJECTS } from '../data/projects.js';

const AUTOPLAY_MS = 4500;

const ARROW =
  'flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-ink';

export default function ProjectsCarousel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  const getStep = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const update = useCallback(() => {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return;
    setPerView(Math.max(1, Math.round((track.clientWidth + 1) / step)));
    setIndex(Math.round(track.scrollLeft / step));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const pages = Math.max(1, PROJECTS.length - perView + 1);
  const current = Math.min(index, pages - 1);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(pages - 1, i));
    trackRef.current?.scrollTo({ left: clamped * getStep(), behavior: 'smooth' });
  };

  // Autoplay: avança a cada 4,5s e volta ao início no fim. Pausa enquanto o usuário interage.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || pages < 2) return undefined;
    const id = setInterval(() => goTo(current >= pages - 1 ? 0 : current + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, current, pages]);

  const prev = (extra = '') => (
    <button type="button" aria-label="Projeto anterior" className={`${ARROW} ${extra}`} disabled={current === 0} onClick={() => goTo(current - 1)}>
      <ChevronLeft size={20} />
    </button>
  );
  const next = (extra = '') => (
    <button type="button" aria-label="Próximo projeto" className={`${ARROW} ${extra}`} disabled={current >= pages - 1} onClick={() => goTo(current + 1)}>
      <ChevronRight size={20} />
    </button>
  );

  return (
    <section id="projetos" aria-labelledby="projects-title" className="pt-16 lg:pt-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 id="projects-title" className="text-[26px] font-medium tracking-[-0.02em] text-ink lg:text-[28px]">
              Projetos que ganharam vida
            </h2>
            <p className="mt-2 max-w-[520px] text-[15px] text-body">
              Confira alguns exemplos do que podemos criar através da impressão 3D.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {prev()}
            {next()}
          </div>
        </div>

        <ul
          ref={trackRef}
          onScroll={update}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p) => (
            <li
              key={p.title}
              className="w-full shrink-0 snap-start"
            >
              <figure className="overflow-hidden rounded-2xl bg-card">
                <div className="aspect-[4/3] w-full overflow-hidden bg-card sm:aspect-[16/9] lg:aspect-[5/2]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    draggable="false"
                    style={p.position ? { objectPosition: p.position } : undefined}
                    className="h-full w-full object-cover"
                  />
                </div>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-center gap-4">
          {prev('sm:hidden')}
          <div className="flex gap-2">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para o projeto ${i + 1}`}
                aria-current={i === current}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-200 ${i === current ? 'w-6 bg-brand' : 'w-2 bg-ink/20'}`}
              />
            ))}
          </div>
          {next('sm:hidden')}
        </div>
      </Container>
    </section>
  );
}
