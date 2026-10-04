import { BRAND } from '../data/content.js';

// The logo file is black ink on transparency; the light variant inverts it for dark backgrounds.
export default function Logo({ variant = 'dark', href = '#home' }) {
  return (
    <a href={href} className="flex shrink-0 items-center" aria-label={`${BRAND.name} — início`}>
      <img
        src="/assets/brand/ldk-art-logo.png"
        alt={BRAND.name}
        width="615"
        height="240"
        className={`h-10 w-auto sm:h-12 ${variant === 'light' ? 'invert' : ''}`}
      />
    </a>
  );
}
