const mk = (title, intro, points, faqs) => ({ title, intro, points, faqs });

export const SERVICES = {
  'custom-clearance': {
    title: 'Custom Clearance',
    short: 'Hassle-free and compliant customs solutions',
    image: '/images/custom-clearance.png',
    intro: 'Our licensed customs experts handle documentation, duties and inspections so your cargo clears ports and borders without delay.',
    highlights: ['Licensed customs brokers', 'Accurate HS code classification', 'Duty and tax optimisation', 'Real-time clearance updates'],
    subs: {
      'import-custom-clearance': mk('Import Custom Clearance', 'Fast, compliant clearance for goods entering the country.', ['Bill of entry filing', 'Duty and tax calculation', 'Port and terminal coordination', 'Delivery after clearance']),
      'export-custom-clearance': mk('Export Custom Clearance', 'Complete export documentation and shipping bill handling.', ['Shipping bill filing', 'Export incentive documentation', 'Certificate of origin support', 'Port gate-in coordination']),
      'custom-clearance-process-faqs': mk('Custom Clearance Process & FAQs', 'How clearance works, step by step, and answers to common questions.', ['Submit invoice, packing list and bill of lading', 'We classify goods and file the declaration', 'Duties are paid and cargo is examined if selected', 'Cargo is released for delivery'], [
        ['Which documents are required?', 'Commercial invoice, packing list, bill of lading or airway bill, and any licences specific to your goods.'],
        ['How long does clearance take?', 'Most shipments clear within 24 to 72 hours once documents are complete.'],
        ['Can you handle duty payments?', 'Yes. We calculate duties in advance and pay them on your behalf.'],
      ]),
    },
  },
  'freight-forwarding': {
    title: 'Freight Forwarding',
    short: 'Global air, ocean and land freight forwarding',
    image: '/images/freight-forwarding.png',
    intro: 'Door-to-door freight across air, ocean and road, planned around your timeline and budget.',
    highlights: ['Air, ocean and land options', 'Competitive carrier rates', 'Cargo insurance', 'Shipment tracking'],
    subs: {
      'full-container-load': mk('Full Container Load', 'Dedicated container space for large shipments.', ['20ft, 40ft and high-cube containers', 'Secure seal and lock', 'Port-to-door delivery', 'Priority loading']),
      'less-than-container-load': mk('Less Than Container Load', 'Share container space and pay only for what you ship.', ['Weekly consolidation', 'Cost-effective for small volumes', 'Cargo handling at origin and destination', 'Flexible schedules']),
      'import-export-shipments': mk('Import & Export Shipments', 'End-to-end handling for goods moving in and out of the country.', ['Booking and documentation', 'Customs coordination', 'Multimodal transport', 'Last-mile delivery']),
    },
  },
  warehousing: {
    title: 'Warehousing',
    short: 'Secure, scalable and strategic storage',
    image: '/images/warehousing.png',
    intro: 'Secure, modern facilities close to ports and highways, with inventory control you can see in real time.',
    highlights: ['24/7 security and CCTV', 'Inventory management system', 'Pick, pack and dispatch', 'Scalable space'],
    subs: {
      'general-warehousing': mk('General Warehousing', 'Flexible storage for all kinds of general cargo.', ['Racked and floor storage', 'Stock reconciliation', 'Pick, pack and label', 'Short and long term plans']),
      'import-cargo-storage': mk('Import Cargo Storage', 'Store imported cargo safely until you are ready to move it.', ['Bonded storage options', 'Port-adjacent locations', 'Container devanning', 'Quality checks on arrival']),
      'export-cargo-storage': mk('Export Cargo Storage', 'Consolidate and prepare cargo before it ships.', ['Cargo consolidation', 'Palletising and packing', 'Export labelling', 'Timed dispatch to port']),
    },
  },
  'transportation-management': {
    title: 'Transportation Management',
    nav: 'Transportation',
    short: 'Efficient and reliable transport solutions',
    image: '/images/transportation-management.png',
    intro: 'A managed fleet network that moves cargo safely on time, with live visibility for every trip.',
    highlights: ['Pan-India fleet network', 'GPS tracked vehicles', 'Route optimisation', 'Trained drivers'],
    subs: {
      'road-transportation': mk('Road Transportation', 'Reliable full and part truckload movement.', ['Full truckload and part load', 'Open and closed vehicles', 'Live GPS tracking', 'Proof of delivery']),
      'container-transportation': mk('Container Transportation', 'Container haulage between ports, depots and factories.', ['Trailers for 20ft and 40ft containers', 'Port pickups and returns', 'Empty container repositioning', 'Detention monitoring']),
      'port-transportation': mk('Port Transportation', 'Quick turnaround for cargo moving in and out of ports.', ['Terminal gate coordination', 'Dedicated port shuttles', 'Priority slots', 'Same-day dispatch']),
    },
  },
  'shipping-services': {
    title: 'Shipping Services',
    nav: 'Shipping',
    short: 'Worldwide shipping solutions',
    image: '/images/shipping-services.png',
    intro: 'Ocean freight on major trade lanes with reliable schedules and clear pricing.',
    highlights: ['Major carrier partnerships', 'Weekly sailings', 'Transparent pricing', 'Booking to delivery support'],
    subs: {
      'ocean-freight': mk('Ocean Freight', 'Global sea freight for cargo of every size.', ['Port-to-port and door-to-door', 'Hazardous and special cargo', 'Route and carrier selection', 'Bill of lading handling']),
      fcl: mk('FCL', 'Full container shipping for larger volumes.', ['Exclusive container use', 'Lower per-unit cost', 'Faster handling', 'Container tracking']),
      lcl: mk('LCL', 'Consolidated shipping for smaller volumes.', ['Pay by volume or weight', 'Regular consolidation', 'Secure cargo handling', 'Deconsolidation at destination']),
    },
  },
};
