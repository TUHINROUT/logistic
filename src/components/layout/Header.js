'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Search, X, ArrowRight, Globe } from 'lucide-react';
import { NAV } from '@/data/navigation';
import Button from '@/components/ui/Button';

const SLOW = 'duration-[900ms] ease-slow';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState(null);
  const path = usePathname();

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  const active = (h) => (h === '/' ? path === '/' : path.startsWith(h));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white">
        <div className="mx-auto flex h-[76px] w-[95%] max-w-[1400px] items-center justify-between gap-6">
          <Link href="/" className="shrink-0"><img src="/images/logo.png" alt="Cargora Logistics" className="h-11 w-auto max-w-none" /></Link>

          <nav aria-label="Main" className="hidden xl:flex">
            {NAV.map((n) => (
              <div key={n.href} className="group">
                <Link href={n.href} className={`relative flex h-[76px] items-center gap-1 whitespace-nowrap px-3 text-[13px] font-semibold transition-colors hover:text-brand ${active(n.href) ? 'text-brand' : 'text-ink'}`}>
                  {n.navLabel || n.label}
                  {n.children && <ChevronDown size={13} className="transition-transform duration-500 group-hover:rotate-180" />}
                  {active(n.href) && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-brand" />}
                </Link>
                {n.children && (
                  <div className="invisible absolute left-1/2 top-full grid w-[min(860px,92vw)] -translate-x-1/2 translate-y-3 grid-cols-[240px_1fr] gap-8 rounded-b-3xl bg-white p-7 opacity-0 shadow-lift transition-all duration-500 ease-slow group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <img src={n.image} alt={n.label} className="h-full min-h-[200px] w-full rounded-2xl object-cover" />
                    <div>
                      <h4 className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em]"><span className="h-0.5 w-11 bg-brand" />{n.label}</h4>
                      <ul>{n.children.map((c) => (
                        <li key={c.href}><Link href={c.href} className="block py-2 text-sm text-slate-600 transition-all duration-300 hover:pl-2 hover:text-brand">{c.label}</Link></li>
                      ))}</ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/*<button aria-label="Search" className="hidden h-9 w-9 place-items-center rounded-full text-muted hover:text-brand xl:grid"><Search size={18} /></button>*/}
            {/*<button className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold xl:flex"><Globe size={14} />EN<ChevronDown size={12} /></button>*/}
            <Button href="/contact" className="hidden !px-5 !py-2.5 text-xs xl:inline-flex">Get a Quote <ArrowRight size={14} /></Button>
            <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="p-1.5 xl:hidden"><Menu size={26} /></button>
          </div>
        </div>
      </header>

      <div onClick={() => setOpen(false)} className={`fixed inset-0 z-[90] bg-ink/55 transition-all ${SLOW} ${open ? 'visible opacity-100' : 'invisible opacity-0'}`} />
      <aside aria-hidden={!open} className={`fixed right-0 top-0 z-[100] flex h-dvh w-[min(88vw,400px)] flex-col bg-white shadow-[-20px_0_60px_rgba(0,0,0,.2)] transition-all ${SLOW} ${open ? 'visible translate-x-0' : 'invisible translate-x-[105%]'}`}>
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <img src="/images/logo.png" alt="Cargora Logistics" className="h-9 w-auto" />
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-1.5"><X size={26} /></button>
        </div>
        <ul className="flex-1 overflow-y-auto px-5 py-2">
          {NAV.map((n, i) => (
            <li key={n.href} style={{ transitionDelay: open ? `${350 + i * 80}ms` : '0ms' }} className={`border-b border-line transition-all duration-[800ms] ease-slow ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              {n.children ? (
                <>
                  <button onClick={() => setAcc(acc === i ? null : i)} className="flex w-full items-center justify-between py-4 text-left font-semibold">
                    {n.label}<ChevronDown size={18} className={`transition-transform duration-500 ${acc === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-700 ease-slow ${acc === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <ul className="overflow-hidden">{n.children.map((c) => (
                      <li key={c.href}><Link href={c.href} className="mb-2 block border-l-2 border-brand py-2 pl-4 text-sm text-muted">{c.label}</Link></li>
                    ))}</ul>
                  </div>
                </>
              ) : <Link href={n.href} className="block py-4 font-semibold">{n.label}</Link>}
            </li>
          ))}
        </ul>
        <div className="border-t border-line p-5"><Button href="/contact" className="w-full">Get a Quote</Button></div>
      </aside>
    </>
  );
}
