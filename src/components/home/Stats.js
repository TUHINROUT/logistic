import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { STATS } from '@/data/home';

export default function Stats() {
  return (
    <Container className="grid grid-cols-2 gap-8 pb-6 pt-40 sm:pt-28 lg:grid-cols-4">
      {STATS.map(([n, l, i]) => (
        <div key={l} className="flex items-center justify-center gap-4">
          <Icon name={i} size={36} className="shrink-0 text-brand" />
          <div><strong className="block text-2xl font-extrabold">{n}</strong><span className="text-xs text-muted">{l}</span></div>
        </div>
      ))}
    </Container>
  );
}
