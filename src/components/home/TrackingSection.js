'use client';
import { useState } from 'react';
import { Check, Search, Truck, MapPin, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import RedBar from '@/components/ui/RedBar';

const tabs = ['Track Shipment', 'Get an Estimate', 'Schedule Pickup'];
const holders = ['Enter Tracking Number (e.g. CAR0125455)', 'Enter origin and destination', 'Enter pickup pincode'];
const steps = [['Pickup', '10 Oct, 08:00'], ['In Transit', '11 Oct, 14:20'], ['At Hub', '12 Oct, 08:10'], ['Out for Delivery', '12 Oct, 14:30']];
const points = ['Real-time Shipment Tracking', 'AI-powered Route Optimization', 'Proactive Alerts & Notifications', 'Integrated Supply Chain Visibility'];

export default function TrackingSection() {
  const [tab, setTab] = useState(0);
  return (
    <section className="relative py-16">
      <RedBar className="top-16" />
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <SectionHeading label="Real-Time Visibility" title={<>Track Your Shipment<br />Anytime, Anywhere</>} />
          <p className="mb-5 max-w-sm text-sm text-muted">Get real-time updates and complete control across your supply chain with our advanced tracking system.</p>
          <ul className="mb-7 space-y-3">{points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm font-medium"><span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-white"><Check size={12} /></span>{p}</li>
          ))}</ul>
          <Button href="/contact">Track Your Shipment <ArrowRight size={16} /></Button>
        </div>
        <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <div className="mb-4 flex flex-wrap gap-2">{tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className={`rounded-lg px-4 py-2 text-xs font-semibold transition duration-300 ${i === tab ? 'bg-ink text-white' : 'bg-soft text-muted hover:bg-line'}`}>{t}</button>
          ))}</div>
          <div className="mb-6 flex flex-col gap-2 sm:flex-row">
            <label className="flex flex-1 items-center gap-2 rounded-lg border border-line px-3"><Search size={16} className="text-muted" /><input className="w-full py-3 text-sm outline-none" placeholder={holders[tab]} /></label>
            <Button className="!py-3">{tab === 0 ? 'Track' : tab === 1 ? 'Estimate' : 'Schedule'}</Button>
          </div>
          <ol className="relative mb-6 grid grid-cols-4 text-center">
            <span className="absolute left-[12%] right-[12%] top-[10px] h-0.5 bg-green-500" />
            {steps.map(([s, d]) => (
              <li key={s} className="relative"><span className="mx-auto mb-2 grid h-5 w-5 place-items-center rounded-full bg-green-500 text-white"><Check size={11} /></span><strong className="block text-[11px] sm:text-xs">{s}</strong><small className="text-[10px] text-muted sm:text-[11px]">{d}</small></li>
            ))}
          </ol>
          <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr]">
            <div className="relative h-44 overflow-hidden rounded-xl bg-emerald-50">
              <svg viewBox="0 0 300 180" className="h-full w-full"><path d="M0 120 Q60 90 100 110 T200 80 T300 60 M40 0 Q80 60 70 180 M180 0 Q170 80 230 180" stroke="#cfe3d8" strokeWidth="10" fill="none" /><path d="M60 140 Q110 60 170 110 T260 50" stroke="#E30613" strokeWidth="3" fill="none" /><circle cx="60" cy="140" r="6" fill="#E30613" /></svg>
              <Truck size={26} className="absolute right-[26%] top-[38%] text-brand" />
              <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-semibold shadow"><MapPin size={12} className="text-brand" />Live Location: Mumbai, India</span>
            </div>
            <div className="flex gap-3 rounded-xl border border-line p-3 text-xs">
              <div className="flex-1 space-y-1"><strong className="block text-sm">Shipment Details</strong><p className="font-bold">CAR0125455</p><p className="text-muted">Electronics</p><p className="text-muted">500 kg | 12 Packages</p><p className="text-muted">Estimated Delivery<br /><b className="text-ink">12 Oct 2026, 14:30</b></p></div>
              <img src="/images/3pl-logistics.png" alt="Shipment" className="h-24 w-20 rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
