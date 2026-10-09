import { Lightbulb, Paintbrush, Printer } from 'lucide-react';
import Container from './Container.jsx';

const STEPS = [
  {
    icon: Lightbulb,
    title: 'Ideia',
    text: 'Você conta o que imagina: um presente, um personagem, uma peça útil ou algo totalmente único.',
  },
  {
    icon: Printer,
    title: 'Impressão',
    text: 'Modelamos e imprimimos em 3D, camada por camada, com materiais escolhidos para cada projeto.',
  },
  {
    icon: Paintbrush,
    title: 'Acabamento',
    text: 'Lixamos, pintamos e revisamos cada detalhe até a peça ficar pronta para ser sua.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-card">
            <img
              src="/assets/projects/bancada-impressora.webp"
              alt="Impressora 3D imprimindo um coelho, ao lado de várias peças coloridas impressas sobre uma mesa"
              width="1920"
              height="1281"
              loading="lazy"
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
          <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-ink shadow-sm backdrop-blur sm:bottom-6 sm:left-6">
            Feito sob medida, peça por peça
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">Sobre a LDK ART</p>
          <h2
            id="about-title"
            className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]"
          >
            Da sua ideia a um objeto real.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.75] text-body lg:text-[17px]">
            Na LDK ART, ideias viram objetos reais. Criamos bonecos, presentes, acessórios e projetos sob medida com
            impressão 3D, cuidando de cada detalhe, da ideia ao acabamento.
          </p>

          <ol className="mt-8 grid gap-5">
            {STEPS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-ink">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
