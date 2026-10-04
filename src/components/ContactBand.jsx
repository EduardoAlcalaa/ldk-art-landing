import { MessageCircle } from 'lucide-react';
import Container from './Container.jsx';
import CTAButton from './CTAButton.jsx';
import InstagramIcon from './InstagramIcon.jsx';
import { BRAND, GENERAL_WHATSAPP_MESSAGE, whatsappLink } from '../data/content.js';

export default function ContactBand() {
  return (
    <section id="contato" aria-labelledby="contact-title">
      <Container className="flex flex-col gap-6 pt-12 md:flex-row md:items-center md:justify-between md:pt-[44px]">
        <div>
          <h2 id="contact-title" className="text-[24px] font-semibold tracking-[-0.02em] lg:text-[28px]">
            Vamos materializar sua ideia?
          </h2>
          <p className="mt-2 text-[15px] text-white/70">Peça seu orçamento ou acompanhe nossos trabalhos.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            href={whatsappLink(GENERAL_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="h-[50px] gap-2 px-6"
          >
            <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
            Chamar no WhatsApp
          </CTAButton>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-ink transition-opacity duration-150 hover:opacity-85"
          >
            <InstagramIcon size={18} />
            {BRAND.instagramHandle}
          </a>
        </div>
      </Container>
    </section>
  );
}
