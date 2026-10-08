'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import SectionHeading from './SectionHeading';

export default function Carousel({ label, title, cta, ctaHref, sub, children }) {
  const ref = useRef(null);
  const go = (d) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: 'smooth' });
  const arrow = 'grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition hover:bg-brand hover:text-white';
  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionHeading label={label} title={title} className="!mb-0" />
          {sub && <p className="mt-2 text-sm text-muted">{sub}</p>}
        </div>
        <div className="flex items-center gap-3">
          {cta && <Button href={ctaHref} variant="outline" className="!px-4 !py-2 text-xs">{cta}</Button>}
          <button aria-label="Previous" onClick={() => go(-1)} className={arrow}><ChevronLeft size={18} /></button>
          <button aria-label="Next" onClick={() => go(1)} className={arrow}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div ref={ref} className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
    </>
  );
}
