import Container from './Container.jsx';
import CTAButton from './CTAButton.jsx';

// Full-screen video hero; the home Header floats over it (see Header.jsx).
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <video
        src="/assets/hero-printer.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Darker on the left where the text sits, lighter on the right so the printer stays visible. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

      <Container className="pb-16 pt-32">
        <h1
          id="hero-title"
          className="text-[34px] font-bold uppercase leading-[1.02] tracking-[-0.018em] text-white sm:text-[42px] lg:text-[58px]"
        >
          Suas ideias
          <br />
          materializadas
          <br />
          em 3D
        </h1>
        <p className="mt-6 max-w-[380px] text-[17px] leading-[1.75] text-white/85 lg:mt-7 lg:text-[18px]">
          Bonecos, presentes, acessórios e projetos personalizados, impressos em 3D.
        </p>
        <CTAButton href="#produtos" size="lg" className="mt-8">
          Ver produtos
        </CTAButton>
      </Container>
    </section>
  );
}
