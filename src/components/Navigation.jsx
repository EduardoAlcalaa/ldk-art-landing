import NavItem from './NavItem.jsx';
import { NAV_LINKS } from '../data/content.js';

export default function Navigation({ className = '', linkClassName = '', onNavigate }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map(({ label, to }) => (
        <li key={label}>
          <NavItem
            to={to}
            onClick={onNavigate}
            className={`transition-opacity duration-150 hover:opacity-60 ${linkClassName}`}
          >
            {label}
          </NavItem>
        </li>
      ))}
    </ul>
  );
}
