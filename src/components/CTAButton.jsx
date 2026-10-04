const SIZES = {
  lg: 'h-[52px] px-9 text-[16px]',
  md: 'h-[38px] px-6 text-[14px]',
  sm: 'h-[46px] px-5 text-[13px]',
};

export default function CTAButton({ as: Tag = 'a', size = 'md', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand font-bold uppercase tracking-[-0.01em] text-white transition-colors duration-150 hover:bg-brand-hover ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
