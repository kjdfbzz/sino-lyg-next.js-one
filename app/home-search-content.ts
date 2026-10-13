export type HomeSearchContent = {
  hero: { eyebrow: string; title: string; description: string };
  introduction: { title: string; description: string };
  origins: Array<{
    id: string;
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  }>;
  routeCards: Array<{
    id: string;
    title: string;
    ports: string;
    description: string;
    destinations: string[];
    href: string;
    linkLabel: string;
  }>;
  quoteChecklist: {
    title: string;
    intro: string;
    items: string[];
    href: string;
    linkLabel: string;
  };
  faqs: Array<{ question: string; answer: string }>;
};

// The same English copy is rendered on /en and used by its structured data.
// Rates, sailings and destination services need shipment-specific confirmation.
export const homeSearchContentEn: HomeSearchContent = {
  hero: {
    eyebrow: 'For overseas importers & China exporters',
    title: 'Freight forwarding from Lianyungang & Qingdao, China',
    description:
      'Buying from a Chinese factory or arranging an export shipment? Bryce Lee at Global View Logistics helps connect your supplier, origin transport and ocean booking. Discuss FCL, LCL, air freight, customs and documentation from Lianyungang and Qingdao to India, the Middle East and Latin America.',
  },
  introduction: {
    title: 'Connect your China supplier with a workable shipping plan',
    description:
      'Share the factory pickup address and the consignee’s delivery location. We can compare origin arrangements, booking options and the documents needed before cargo leaves China. For an overseas importer, the starting point is the purchase terms and what your supplier has agreed to handle; for a China exporter, it is the cargo ready date, destination and delivery responsibility.',
  },
  origins: [
    {
      id: 'lianyungang',
      title: 'Shipping from Lianyungang',
      description:
        'Our Lianyungang contact coordinates shipment planning with the supplier. Compare factory pickup, container loading, export clearance and the available ocean connection together. For India-bound cargo, confirm the receiving port and inland destination before choosing the departure option.',
      href: '/en/routes/lianyungang-to-india-fcl-shipping',
      linkLabel: 'Lianyungang to India planning guide',
    },
    {
      id: 'qingdao',
      title: 'Shipping from Qingdao',
      description:
        'Qingdao is another origin option for China exports. Compare the factory-to-port transport cost, sailing availability, documentation cut-off and destination charges with the Lianyungang option. For Latin America, start with the exact port and final delivery city rather than a regional rate alone.',
      href: '/en/routes/china-to-south-america-shipping',
      linkLabel: 'Qingdao and Latin America route planning',
    },
  ],
  routeCards: [
    {
      id: 'india',
      title: 'China to India ocean freight',
      ports: 'Kolkata · Nhava Sheva · Mundra',
      description:
        'Plan FCL or LCL from Lianyungang or Qingdao around the importer’s receiving port, clearance arrangements and inland delivery. Compare the ocean rate with origin and destination local charges, and confirm carrier space and document cut-offs for the cargo ready date.',
      destinations: ['India'],
      href: '/en/routes/china-to-india-shipping',
      linkLabel: 'Read the India shipping guide',
    },
    {
      id: 'middle-east',
      title: 'China to the Middle East',
      ports: 'Jebel Ali, UAE · Dammam, Saudi Arabia',
      description:
        'Confirm the consignee, receiving port and import requirements before booking. Machinery, building materials and chemical cargo need the correct cargo description and documents; dangerous goods also require classification and carrier acceptance. Check what the quotation includes at both ends.',
      destinations: ['United Arab Emirates', 'Saudi Arabia'],
      href: '/en/routes/china-to-jebel-ali-shipping',
      linkLabel: 'Read the Jebel Ali shipping guide',
    },
    {
      id: 'latin-america',
      title: 'China to Latin America',
      ports: 'Brazil · Argentina · Chile · Peru · Mexico',
      description:
        'Compare the specific destination port, direct or transshipment routing, import documentation and inland delivery scope. Ask for current sailing and cost options for your shipment, including the agreed services and local charges at both ends.',
      destinations: ['Brazil', 'Argentina', 'Chile', 'Peru', 'Mexico'],
      href: '/en/routes/china-to-mexico-chile-peru-shipping',
      linkLabel: 'Read the Mexico, Chile & Peru guide',
    },
  ],
  quoteChecklist: {
    title: 'Prepare a China freight quote request',
    intro:
      'A useful comparison needs the same cargo, route and service scope. Send these details so ocean freight, origin charges and any quoted destination services can be identified clearly.',
    items: [
      'Supplier pickup address in China and preferred departure port, if known.',
      'Destination port, final delivery city and consignee’s receiving requirements.',
      'Cargo name, package count, gross weight and dimensions or total cubic metres.',
      'FCL container type and quantity, or LCL package measurements; note oversized or dangerous cargo.',
      'Cargo ready date, purchase Incoterm and the services you need at origin and destination.',
      'Your email or phone, plus packing list, cargo photos or technical documents when relevant.',
    ],
    href: '/en/requirements/fcl-export-checklist',
    linkLabel: 'Full container shipping checklist',
  },
  faqs: [
    {
      question: 'What information do you need to quote shipping from China?',
      answer:
        'Please send the factory pickup address, departure and destination ports, final delivery city, cargo name, package count, gross weight, dimensions or volume, and cargo ready date. For FCL, include container type and quantity; for LCL, include the size and weight of each package. State the purchase Incoterm and whether you need pickup, export customs, ocean freight or destination services.',
    },
    {
      question: 'Should I choose Lianyungang or Qingdao as the departure port?',
      answer:
        'Compare both ports using your factory location, ready date, container or cargo requirements, available sailings, inland transport cost and destination. The lowest ocean rate alone may not give the lowest total cost. We can discuss both origin options once the supplier address and receiving port are known.',
    },
    {
      question: 'Can you work with my supplier if I am an overseas importer?',
      answer:
        'Yes. Share your supplier’s China pickup address, the cargo details and the purchase terms. We can discuss the origin services required and coordinate the agreed shipping steps with the supplier. Confirm who is responsible for export documents, cargo loading, freight payment and destination clearance before booking.',
    },
    {
      question: 'How long does shipping take and what is the current freight rate?',
      answer:
        'Transit time and rates need confirmation for the exact port pair, cargo ready date, carrier, container type and service scope. A sailing may be direct or involve transshipment, and the quoted port-to-port time does not include factory pickup or destination clearance. Ask for the available sailing, cut-off dates, estimated arrival and quotation validity for your shipment.',
    },
    {
      question: 'Are destination customs and local charges included in the quote?',
      answer:
        'Only the services and charges stated in the quotation are included. Confirm destination terminal and documentation charges, customs clearance, duties and taxes, storage, demurrage, detention and inland delivery with the responsible party. The purchase Incoterm and the agreed forwarding scope should make the payer and responsibilities clear.',
    },
    {
      question: 'What extra details are needed for machinery or dangerous goods?',
      answer:
        'For machinery, provide packed dimensions, gross weight, lifting or securing requirements and photos so container suitability can be assessed. For dangerous goods, provide the safety data sheet and the applicable UN number, class and packing details. Acceptance, documents and the transport arrangement must be checked with the carrier for the actual cargo before booking.',
    },
  ],
};
