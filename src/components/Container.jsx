// Shared horizontal gutter + max width so every section sits on the same grid
// while section backgrounds span the full screen.
export default function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-10 lg:px-16 ${className}`}>{children}</div>;
}
