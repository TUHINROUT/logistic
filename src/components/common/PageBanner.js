import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function PageBanner({ title, image, crumbs = [] }) {
  return (
    <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 to-ink/40" />
      <Container className="relative">
        <h1 className="mb-2 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="text-sm text-slate-300"><Link href="/" className="hover:text-white">Home</Link>{crumbs.map((c) => <span key={c.label}> / {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : c.label}</span>)}</p>
      </Container>
    </section>
  );
}
