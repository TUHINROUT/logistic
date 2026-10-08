export default function SectionHeading({ label, title, light = false, className = '' }) {
  return (
    <div className={`mb-8 ${className}`}>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">{label}</p>
      <h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
    </div>
  );
}
