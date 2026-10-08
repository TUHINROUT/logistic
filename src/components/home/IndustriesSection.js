import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import RedBar from '@/components/ui/RedBar';
import { INDUSTRIES } from '@/data/home';

export default function IndustriesSection() {
  return (
    <section className="relative bg-ink py-16 text-white">
      <RedBar className="top-16" />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_2fr]">
        <div>
          <SectionHeading light label="Industries We Serve" title={<>Specialized Solutions<br />for Every Industry</>} />
          <p className="mb-6 max-w-xs text-sm text-slate-300">We understand industry-specific challenges and deliver tailored logistics solutions with logistics experts, business moving.</p>
          <Button href="/contact">Explore All Industries <ArrowRight size={16} /></Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {INDUSTRIES.map(([t, ico, img]) => (
            <Link key={t} href="/contact" className="group relative flex h-36 flex-col justify-between overflow-hidden rounded-xl p-4">
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/30" />
              <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-white/40 bg-white/10 backdrop-blur"><Icon name={ico} size={18} /></span>
              <span className="relative flex items-center justify-between text-sm font-bold">{t}<ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
