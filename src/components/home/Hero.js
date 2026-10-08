import Link from 'next/link';
import { Package, MapPin, Calculator, Search, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const actions = [[Package, 'Book a Shipment', 'Schedule your cargo pickup'], [MapPin, 'Track Shipment', 'Real-time tracking'], [Calculator, 'Get an Estimate', 'Instant rate calculator'], [Search, 'Serviceable Pincode', 'Check availability']];

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 sm:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/global-partner.png')] bg-cover bg-[70%_center]" />
        <video className="absolute inset-0 h-full w-full object-cover" src="/video/hero.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-white from-40% to-white/50 lg:bg-gradient-to-r lg:from-white lg:from-30% lg:via-white/70 lg:via-50% lg:to-transparent lg:to-80%" />
      </div>
      <Container className="relative pb-40 sm:pb-44">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">Global Logistics Partner</p>
        <h1 className="mb-5 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[64px]">Moving Business<span className="block text-brand">Beyond <span className="text-ink">Borders</span></span></h1>
        <p className="mb-8 max-w-md text-[15px] text-slate-700">End-to-end logistics solutions across air, ocean, land and supply chain, connecting businesses, markets and opportunities worldwide.</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Get a Quote <ArrowRight size={16} /></Button>
          <Button href="/shipping-services" variant="dark">Our Services</Button>
        </div>
        <div className="absolute right-0 top-4 hidden rounded-xl border border-white/30 bg-white/20 px-5 py-3 text-sm font-bold leading-tight text-white backdrop-blur lg:block">Your Global<br />Logistics Partner</div>
      </Container>
      <Container className="relative z-10 grid translate-y-1/2 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map(([I, t, s]) => (
          <Link key={t} href="/contact" className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><I size={20} /></span>
            <span className="flex-1"><strong className="block text-sm">{t}</strong><small className="text-xs text-muted">{s}</small></span>
            <ArrowRight size={16} className="text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
          </Link>
        ))}
      </Container>
    </section>
  );
}
