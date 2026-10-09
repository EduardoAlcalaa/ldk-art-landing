import Container from '../components/Container.jsx';
import CTAButton from '../components/CTAButton.jsx';
import { BRAND } from '../data/content.js';
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-title" className="py-20 lg:py-28">
      <title>{`Página não encontrada — ${BRAND.name}`}</title>
      <Container className="flex flex-col items-center text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">Erro 404</p>
        <h1 id="not-found-title" className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-ink sm:text-[40px]">
          Página não encontrada
        </h1>
        <p className="mt-3 max-w-[440px] text-[16px] leading-relaxed text-body">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <CTAButton as={Link} to="/" size="lg" className="mt-8">
          Voltar ao início
        </CTAButton>
      </Container>
    </section>
  );
}
