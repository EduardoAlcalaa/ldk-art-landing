import { NAV_LINKS } from '../data/content.js';

export default function Navigation({ className = '', linkClassName = '', onNavigate }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onNavigate}
            className={`transition-opacity duration-150 hover:opacity-60 ${linkClassName}`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
