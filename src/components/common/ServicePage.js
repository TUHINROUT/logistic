import Link from 'next/link';
import Container from '@/components/ui/Container';
import PageBanner from './PageBanner';
import CtaBanner from './CtaBanner';

export default function ServicePage({ title, image, crumbs, intro, points = [], cards = [], faqs, side }) {
  return (
    <>
      <PageBanner title={title} image={image} crumbs={crumbs} />
      <section className="py-16">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <p className="mb-6 max-w-2xl text-muted">{intro}</p>
            {points.length > 0 && (
              <ul className="space-y-3">{points.map((p) => (
                <li key={p} className="relative pl-8 font-medium before:absolute before:left-0 before:top-0.5 before:grid before:h-5 before:w-5 before:place-items-center before:rounded-full before:bg-brand before:text-[11px] before:text-white before:content-['✓']">{p}</li>
              ))}</ul>
            )}
            {cards.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">{cards.map((c) => (
                <Link key={c.href} href={c.href} className="rounded-xl border border-line p-5 transition duration-500 hover:-translate-y-1 hover:shadow-lift"><h3 className="mb-2 font-bold">{c.label}</h3><span className="text-xs font-semibold text-brand">Learn more</span></Link>
              ))}</div>
            )}
            {faqs && <div className="mt-8 space-y-3">{faqs.map(([q, a]) => (
              <details key={q} className="rounded-xl border border-line p-4"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-2 text-muted">{a}</p></details>
            ))}</div>}
          </div>
          <aside>
            <img src={image} alt={title} className="mb-4 h-72 w-full rounded-2xl object-cover" />
            {side && <ul className="space-y-2">{side.map((s) => (
              <li key={s.href}><Link href={s.href} className="block rounded-lg bg-soft px-4 py-3 font-semibold transition duration-300 hover:bg-brand hover:text-white">{s.label}</Link></li>
            ))}</ul>}
          </aside>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
