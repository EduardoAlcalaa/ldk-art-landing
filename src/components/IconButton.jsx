export default function IconButton({ label, icon: Icon, className = '', ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`grid h-10 w-10 cursor-pointer place-items-center rounded-full text-ink transition-colors duration-150 hover:bg-black/5 ${className}`}
      {...props}
    >
      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}
