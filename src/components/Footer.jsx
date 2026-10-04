import Container from './Container.jsx';
import Logo from './Logo.jsx';
import InstagramIcon from './InstagramIcon.jsx';
import { BRAND, NAV_LINKS } from '../data/content.js';

const linkClass = 'text-white/90 transition-opacity duration-150 hover:opacity-60';

export default function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-8 pb-12 pt-14 md:flex-row md:items-center md:justify-between md:pb-14 md:pt-[62px]">
        <Logo variant="light" />
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px]">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
            <li aria-hidden="true" className="hidden w-5 md:block" />
            <li>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${linkClass}`}
              >
                <InstagramIcon size={16} />
                {BRAND.instagramHandle}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-white/10 py-6 text-[13px] text-white/50">
        © {new Date().getFullYear()} {BRAND.name}. {BRAND.tagline}
      </Container>
    </footer>
  );
}
