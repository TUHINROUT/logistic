import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Carousel from '@/components/ui/Carousel';
import Icon from '@/components/ui/Icon';
import RedBar from '@/components/ui/RedBar';
import { SERVICE_CARDS } from '@/data/home';

export default function ServicesGrid() {
  return (
    <section className="relative py-16">
      <RedBar className="top-16" />
      <Container>
        <Carousel label="Our Services" title={<>End-to-End Logistics<br />Solutions</>} cta="View All Services" ctaHref="/custom-clearance">
          {SERVICE_CARDS.map(([slug, t, d, img, ico]) => (
            <Link key={t} href={`/${slug}`} className="group w-[72%] shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-white shadow-card transition duration-500 hover:-translate-y-1.5 hover:shadow-lift sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)] xl:w-[calc((100%-80px)/6)]">
              <img src={img} alt={t} className="h-36 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-4">
                <span className="mb-3 grid h-8 w-8 place-items-center rounded-md bg-brand text-white"><Icon name={ico} size={16} /></span>
                <h3 className="mb-1 text-sm font-bold leading-snug">{t}</h3>
                <p className="mb-3 min-h-[3.2em] text-xs text-muted">{d}</p>
                <span className="flex items-center gap-1 text-xs font-semibold text-brand">Learn More <ArrowRight size={13} /></span>
              </div>
            </Link>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
