export default function RedBar({ className = 'top-10' }) {
  return <span aria-hidden className={`absolute left-0 hidden h-14 w-2 rounded-r bg-brand md:block ${className}`} />;
}
