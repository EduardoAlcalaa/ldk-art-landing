import CTAButton from './CTAButton.jsx';
import { whatsappLink } from '../data/content.js';

export default function CollectionCard({ title, image, alt, message }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir ${title} pelo WhatsApp (abre em nova aba)`}
      className="group flex h-full flex-col items-center rounded-[10px] bg-card px-6 pb-6 pt-4 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="flex h-[240px] w-full items-center justify-center lg:h-[250px]">
        <img src={image} alt={alt} className="h-full w-auto max-w-full object-contain" loading="lazy" />
      </div>
      <h3 className="mt-5 text-center text-[22px] font-medium tracking-[-0.01em] text-ink">{title}</h3>
      <CTAButton as="span" size="md" className="mt-3.5 group-hover:bg-brand-hover">
        Encomendar
      </CTAButton>
    </a>
  );
}
