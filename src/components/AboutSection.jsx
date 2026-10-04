import Container from './Container.jsx';

export default function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="pt-16 lg:pt-12">
      <Container className="grid items-end gap-10 md:grid-cols-[1fr_0.68fr] md:gap-12">
        <div className="self-start md:pt-3">
          <h2 id="about-title" className="text-[26px] font-medium tracking-[-0.02em] text-ink lg:text-[28px]">
            Sobre a LDK ART
          </h2>
          <p className="mt-5 max-w-[430px] text-[16px] leading-[1.75] text-body lg:text-[17px]">
            Na LDK ART, ideias viram objetos reais. Criamos bonecos, presentes, acessórios e projetos sob medida com
            impressão 3D, cuidando de cada detalhe, da ideia ao acabamento.
          </p>
        </div>

        <div className="overflow-hidden rounded-t-[10px] bg-card">
          <img
            src="/assets/about-bust.png"
            alt="Busto clássico preto fosco impresso em 3D"
            width="608"
            height="494"
            loading="lazy"
            className="block aspect-[304/247] w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
