import Link from 'next/link';

const variants = {
  red: 'bg-brand text-white hover:bg-brand-dark',
  dark: 'bg-ink text-white hover:bg-black',
  outline: 'border border-brand bg-white text-brand hover:bg-brand hover:text-white',
  ghost: 'border border-white/40 text-white hover:bg-white/10',
};

export default function Button({ href, variant = 'red', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`;
  return href ? <Link href={href} className={cls} {...rest}>{children}</Link> : <button className={cls} {...rest}>{children}</button>;
}
