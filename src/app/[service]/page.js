import { notFound } from 'next/navigation';
import ServicePage from '@/components/common/ServicePage';
import { SERVICES } from '@/data/services';

export const generateStaticParams = () => Object.keys(SERVICES).map((service) => ({ service }));

export default async function Service({ params }) {
  const { service } = await params;
  const s = SERVICES[service];
  if (!s) notFound();
  const cards = Object.entries(s.subs).map(([k, v]) => ({ label: v.title, href: `/${service}/${k}` }));
  return <ServicePage title={s.title} image={s.image} crumbs={[{ label: s.title }]} intro={s.intro} points={s.highlights} cards={cards} side={cards} />;
}
