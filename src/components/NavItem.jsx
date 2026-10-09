import { Link, NavLink } from 'react-router';

// Route links get NavLink (aria-current on the active page); anchor links like "/#sobre" use a plain Link.
export default function NavItem({ to, className = '', children, ...props }) {
  const Tag = to.includes('#') ? Link : NavLink;
  return (
    <Tag to={to} end={Tag === NavLink ? true : undefined} className={className} {...props}>
      {children}
    </Tag>
  );
}
