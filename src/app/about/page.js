import PageBanner from '@/components/common/PageBanner';
import CtaBanner from '@/components/common/CtaBanner';
import Container from '@/components/ui/Container';
import Stats from '@/components/home/Stats';

export const metadata = { title: 'About Cargora | Cargora Logistics' };

export default function About() {
  return (
    <>
      <PageBanner title="About Cargora" image="/images/3pl-logistics.png" crumbs={[{ label: 'About Cargora' }]} />
      <section className="py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">Connecting possibilities across every border</h2>
            <p className="max-w-2xl text-muted">Cargora Logistics is a global, integrated logistics provider delivering reliable, efficient and sustainable supply chain services. With a strong network, advanced technology and a customer-first approach, we help businesses move forward without limits.</p>
          </div>
          <img src="/images/warehousing.png" alt="Cargora warehouse" className="h-72 w-full rounded-2xl object-cover" />
        </Container>
      </section>
      <Stats />
      <div className="h-10" />
      <CtaBanner />
    </>
  );
}
