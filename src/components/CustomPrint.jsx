import { MessageCircle } from 'lucide-react';
import Container from './Container.jsx';
import CTAButton from './CTAButton.jsx';
import { CUSTOM_PROJECT_MESSAGE } from '../data/projects.js';
import { whatsappLink } from '../data/content.js';

export default function CustomPrint() {
  return (
    <section id="personalizado" aria-labelledby="custom-title" className="pt-16 lg:pt-20">
      <Container>
        <div className="rounded-3xl bg-dark px-6 py-12 text-center text-white sm:px-12 lg:px-20 lg:py-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">Impressão 3D personalizada</p>
          <h2 id="custom-title" className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            Você imagina. <span className="text-brand">A gente imprime.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-relaxed text-white/75">
            Tem uma ideia em mente? Nós transformamos sua ideia em uma peça real através da impressão 3D. Criamos produtos
            personalizados de acordo com o que você precisa, desde objetos funcionais e decorativos até miniaturas,
            protótipos e projetos exclusivos.
          </p>
          <p className="mt-6 text-[20px] font-medium tracking-[-0.01em]">O limite é a sua imaginação.</p>
          <CTAButton
            href={whatsappLink(CUSTOM_PROJECT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-8 gap-2"
          >
            <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
            Solicitar um projeto
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
