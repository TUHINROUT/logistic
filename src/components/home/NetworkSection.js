import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import RedBar from '@/components/ui/RedBar';
import { NETWORK_STATS } from '@/data/home';

const dots = [[120, 120], [210, 95], [330, 150], [430, 105], [520, 175], [610, 120], [700, 200], [260, 230], [480, 260], [650, 290]];

export default function NetworkSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white">
      <RedBar className="top-16" />
      <svg aria-hidden viewBox="0 0 800 340" className="absolute inset-0 h-full w-full object-cover opacity-70" preserveAspectRatio="xMidYMid slice">
        <defs><radialGradient id="g"><stop offset="0" stopColor="#E30613" stopOpacity=".9" /><stop offset="1" stopColor="#E30613" stopOpacity="0" /></radialGradient></defs>
        <path d="M120 120 Q210 20 330 150 T520 175 T700 200 M210 95 Q330 40 430 105 T610 120 M260 230 Q380 180 480 260 T650 290" fill="none" stroke="#E30613" strokeOpacity=".6" strokeWidth="1.2" />
        {dots.map(([x, y]) => (<g key={x}><circle cx={x} cy={y} r="18" fill="url(#g)" /><circle cx={x} cy={y} r="3" fill="#fff" /></g>))}
      </svg>
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading light label="Our Global Network" title={<>A Stronger,<br />More Connected World</>} />
          <p className="mb-6 max-w-sm text-sm text-slate-300">With a presence in 180+ countries, we connect businesses to new markets through our extensive network of partners, hubs and logistics experts.</p>
          <Button href="/about">Explore Our Network <ArrowRight size={16} /></Button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {NETWORK_STATS.map(([n, l, i]) => (
            <div key={l} className="flex items-center gap-4"><Icon name={i} size={30} className="shrink-0 text-brand" /><div><strong className="block text-2xl font-extrabold">{n}</strong><span className="text-xs text-slate-300">{l}</span></div></div>
          ))}
        </div>
      </Container>
    </section>
  );
}
