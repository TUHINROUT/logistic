import { Play, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import RedBar from '@/components/ui/RedBar';
import { ABOUT_STATS } from '@/data/home';

export default function AboutSection() {
  return (
    <section className="relative py-16">
      <RedBar className="top-16" />
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_260px]">
        <div>
          <SectionHeading label="About Cargora Logistics" title={<>Connecting Possibilities<br />Across Every Border</>} />
          <p className="mb-6 max-w-sm text-sm text-muted">Cargora Logistics is a global, integrated logistics solutions provider, delivering reliable, efficient and sustainable supply chain services across the world. With a strong network, advanced technology and a customer-first approach, we help businesses move forward without limits.</p>
          <Button href="/about">Discover Our Story <ArrowRight size={16} /></Button>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <img src="/images/warehousing.png" alt="Cargora warehouse" className="h-[340px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand shadow-lg"><Play size={22} fill="currentColor" /></span>
            <span><strong className="block text-sm">Watch Our Story</strong><small className="text-xs text-white/80">See how we move the world</small></span>
          </div>
        </div>
        <div className="grid gap-6 rounded-2xl bg-ink p-6 text-white">
          {ABOUT_STATS.map(([n, l, i]) => (
            <div key={l} className="flex items-center gap-4"><Icon name={i} size={30} className="text-brand" /><div><strong className="block text-2xl font-extrabold">{n}</strong><span className="text-xs text-slate-300">{l}</span></div></div>
          ))}
        </div>
      </Container>
    </section>
  );
}
