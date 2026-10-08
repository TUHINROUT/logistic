import { notFound } from 'next/navigation';
import ServicePage from '@/components/common/ServicePage';
import { SERVICES } from '@/data/services';

export const generateStaticParams = () =>
  Object.entries(SERVICES).flatMap(([service, s]) => Object.keys(s.subs).map((sub) => ({ service, sub })));

export default async function SubService({ params }) {
  const { service, sub } = await params;
  const s = SERVICES[service];
  const p = s?.subs[sub];
  if (!p) notFound();
  const side = Object.entries(s.subs).map(([k, v]) => ({ label: v.title, href: `/${service}/${k}` }));
  return (
    <ServicePage title={p.title} image={s.image} intro={p.intro} points={p.points} faqs={p.faqs} side={side}
      crumbs={[{ label: s.title, href: `/${service}` }, { label: p.title }]} />
  );
}
