import Container from '@/components/ui/Container';
import { BRANDS } from '@/data/home';

export default function BrandsStrip() {
  return (
    <section className="pb-12 pt-4">
      <Container>
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">Trusted by Leading Businesses</p>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          {BRANDS.map(([b, c]) => <span key={b} className={`text-xl font-extrabold tracking-tight sm:text-2xl ${c}`}>{b}</span>)}
        </div>
      </Container>
    </section>
  );
}
