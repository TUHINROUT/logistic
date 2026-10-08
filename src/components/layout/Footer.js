import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import { SERVICES } from '@/data/services';

const quick = [['Home', '/'], ['About Us', '/about'], ['Services', '/custom-clearance'], ['Industries', '/'], ['Global Network', '/'], ['Sustainability', '/'], ['Insights', '/'], ['Careers', '/'], ['Contact', '/contact']];
const support = [['Track Shipment', '/'], ['Get a Quote', '/contact'], ['Serviceable Pincode', '/'], ['FAQs', '/custom-clearance/custom-clearance-process-faqs'], ['Documentation', '/'], ['Customer Support', '/contact']];

const Col = ({ title, children }) => (<div><h5 className="mb-4 text-sm font-bold">{title}</h5><ul className="space-y-2 text-[13px] text-muted">{children}</ul></div>);

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container className="grid gap-10 border-t border-line py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1.4fr]">
        <div>
          <img src="/images/logo.png" alt="Cargora Logistics" className="mb-4 h-12 w-auto" />
          <p className="mb-5 max-w-[240px] text-[13px] text-muted">Moving businesses. Delivering possibilities. Cargora Logistics is a global integrated logistics partner.</p>
          <div className="flex gap-2.5">{[Linkedin, Twitter, Facebook, Instagram, Youtube].map((I, i) => (
            <a key={i} href="#" aria-label="Social link" className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white transition hover:bg-brand"><I size={14} /></a>
          ))}</div>
        </div>
        <Col title="Quick Links">{quick.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-brand">{l}</Link></li>)}</Col>
        <Col title="Our Services">
          {Object.entries(SERVICES).map(([s, v]) => <li key={s}><Link href={`/${s}`} className="hover:text-brand">{v.title}</Link></li>)}
          <li><Link href="/warehousing" className="hover:text-brand">3PL Logistics</Link></li>
        </Col>
        <Col title="Support">{support.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-brand">{l}</Link></li>)}</Col>
        <Col title="Contact Us">
          <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" />BHIVE Workspace - No.112, AKR Tech Park, "A" and "B" Block, 7th Mile Hosur Rd, 
Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068 </li>
  <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" />Cargora Logistic LLP
Second Floor, Office No.3, Saini Arcade, Plot No. 25, Sector 8
Gandhidham, Kachchh, Gujarat, 370201 </li>
          <li className="flex gap-2"><Phone size={16} className="shrink-0 text-brand" />+91 22 4567 8900</li>
          <li className="flex gap-2"><Mail size={16} className="shrink-0 text-brand" />info@cargoralogistics.com</li>
        </Col>
      </Container>
      <div className="bg-ink py-4 text-xs text-slate-300">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <span>© 2026 Cargora Logistics Pvt. Ltd. All rights reserved.</span>
          <span className="flex flex-wrap gap-5">{['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Sitemap'].map((t) => <a key={t} href="#" className="hover:text-white">{t}</a>)}</span>
          <span>Designed for a Smarter, Connected World</span>
        </Container>
      </div>
    </footer>
  );
}
