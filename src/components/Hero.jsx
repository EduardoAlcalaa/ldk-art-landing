import Container from './Container.jsx';
import CTAButton from './CTAButton.jsx';

export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-8 pt-10 md:grid-cols-[1fr_1fr] md:gap-4 lg:pt-8">
        <div>
          <h1
            id="hero-title"
            className="text-[34px] font-bold uppercase leading-[1.02] tracking-[-0.018em] text-ink sm:text-[42px] lg:text-[58px]"
          >
            Suas ideias
            <br />
            materializadas
            <br />
            em 3D
          </h1>
          <p className="mt-6 max-w-[380px] text-[17px] leading-[1.75] text-body lg:mt-7 lg:text-[18px]">
            Bonecos, presentes, acessórios e projetos personalizados, impressos em 3D.
          </p>
          <CTAButton href="#produtos" size="lg" className="mt-8">
            Ver produtos
          </CTAButton>
        </div>

        <div className="md:-mr-6 lg:-mr-10">
          <img
            src="/assets/hero-bust.png"
            alt="Busto clássico branco impresso em 3D sobre pedestal, ao lado de um cubo azul"
            width="834"
            height="836"
            className="mx-auto w-full max-w-[460px] md:ml-auto md:mr-0 md:max-w-[470px]"
          />
        </div>
      </Container>
    </section>
  );
}
