import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import RedBar from '@/components/ui/RedBar';
import { GREEN } from '@/data/home';

export default function SustainabilitySection() {
  return (
    <section className="relative py-16">
      <RedBar className="top-16" />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_2fr]">
        <div>
          <SectionHeading label="Industries We Serve" title={<>Greener Logistics<br />for a Brighter Tomorrow</>} />
          <p className="mb-6 max-w-xs text-sm text-muted">We are committed to reducing our environmental impact through sustainable practices, cleaner fuels and smarter supply chains.</p>
          <Button href="/about" variant="outline">Our Sustainability Journey</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {GREEN.map(([t, d, ico, img]) => (
            <div key={t} className="overflow-hidden rounded-xl border border-line bg-white shadow-card transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <img src={img} alt={t} className="h-28 w-full object-cover" />
              <div className="p-4"><span className="mb-2 grid h-8 w-8 place-items-center rounded-md bg-green-50 text-green-600"><Icon name={ico} size={17} /></span><h3 className="text-sm font-bold">{t}</h3><p className="text-xs text-muted">{d}</p></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
