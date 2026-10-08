import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Carousel from '@/components/ui/Carousel';
import RedBar from '@/components/ui/RedBar';
import { CASES } from '@/data/home';

export default function CaseStudies() {
  return (
    <section className="relative pb-6 pt-10">
      <RedBar className="top-10" />
      <Container>
        <Carousel label="Success Stories" title="Delivering Real Impact" sub="See how we help businesses overcome challenges and achieve their logistics goals." cta="View All Case Studies" ctaHref="/about">
          {CASES.map(([t, d, img]) => (
            <Link key={t} href="/about" className="flex w-[88%] shrink-0 snap-start gap-4 rounded-xl border border-line bg-white p-4 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-lift md:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)]">
              <img src={img} alt={t} className="h-28 w-24 shrink-0 rounded-lg object-cover" />
              <div><h3 className="mb-1 text-sm font-bold leading-snug">{t}</h3><p className="mb-2 text-xs text-muted">{d}</p><span className="flex items-center gap-1 text-xs font-semibold text-brand">Read Case Study <ArrowRight size={13} /></span></div>
            </Link>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
