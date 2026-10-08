import { ArrowRight, Headset, SlidersHorizontal, BadgeDollarSign, Globe, LifeBuoy } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const perks = [[SlidersHorizontal, 'Customised Solutions'], [BadgeDollarSign, 'Competitive Rates'], [Globe, 'Global Reach'], [LifeBuoy, 'Dedicated Support']];

export default function CtaBanner() {
  return (
    <section className="relative bg-cover bg-center py-14 text-white" style={{ backgroundImage: "url('/images/global-partner.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" />
      <Container className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">Let&apos;s Move Forward Together</p>
          <h2 className="mb-2 text-3xl font-extrabold sm:text-4xl">Your Global Logistics Partner</h2>
          <p className="mb-6 text-sm text-slate-300">Get in touch with our experts to discuss your logistics needs.</p>
          <div className="flex flex-wrap gap-3"><Button href="/contact">Get a Quote <ArrowRight size={16} /></Button><Button href="/contact" variant="ghost">Talk to an Expert <Headset size={16} /></Button></div>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">{perks.map(([I, t]) => (
          <li key={t} className="flex flex-col items-center gap-2 text-center text-xs font-medium"><I size={26} className="text-white" />{t}</li>
        ))}</ul>
      </Container>
    </section>
  );
}
