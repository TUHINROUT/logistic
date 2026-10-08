import PageBanner from '@/components/common/PageBanner';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = { title: 'Contact Us | Cargora Logistics' };

const field = 'w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition focus:border-brand';
const industries = ['Automotive', 'Retail & E-commerce', 'Pharma & Healthcare', 'Manufacturing', 'Energy & Chemicals', 'FMCG', 'Others'];
const services = ['Custom Clearance', 'Freight Forwarding', 'Warehousing', 'Transportation Management', 'Shipping Services'];

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" image="/images/global-partner.png" crumbs={[{ label: 'Contact Us' }]} />
      <section className="py-16">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.6fr_1fr]">
          <form action="mailto:info@cargoralogistics.com" method="post" encType="text/plain" className="grid gap-4 sm:grid-cols-2">
            <h2 className="text-3xl font-extrabold sm:col-span-2 sm:text-4xl">Get a quote</h2>
            <select name="industry" defaultValue="" className={field}><option value="" disabled>Industry</option>{industries.map((i) => <option key={i}>{i}</option>)}</select>
            <select name="service" defaultValue="" className={field}><option value="" disabled>Service</option>{services.map((i) => <option key={i}>{i}</option>)}</select>
            <input name="name" placeholder="Full name" required className={field} />
            <input name="company" placeholder="Company name" className={field} />
            <input name="email" type="email" placeholder="Email address" required className={field} />
            <input name="phone" placeholder="Phone number" className={field} />
            <textarea name="message" rows={5} placeholder="Tell us about your shipment" className={`${field} sm:col-span-2`} />
            <Button type="submit" className="sm:col-span-2">Send enquiry</Button>
          </form>
          <aside className="rounded-2xl bg-soft p-7">
            <h3 className="mb-3 text-lg font-bold">Cargora Logistics Pvt. Ltd.</h3>
            <p className="mt-2 text-muted">Mumbai, Maharashtra, India</p><p className="mt-2 text-muted">+91 22 4567 8900</p><p className="mt-2 text-muted">info@cargoralogistics.com</p>
          </aside>
        </Container>
      </section>
    </>
  );
}
