export interface SectorFeasibility {
  id: string;
  name: string;
  icon: string;
  defaultCapexPKR: number; // in Millions PKR
  minCapexPKR: number;
  maxCapexPKR: number;
  annualRevenueMultiplier: number; // relative to capex
  netMarginMin: number;
  netMarginMax: number;
  defaultExportRatio: number; // 0 to 1
  paybackYearsBase: number;
  keyCosts: { item: string; sharePercent: number }[];
  regulatoryBodies: string[];
  courseId: string;
  summary: string;
}

export const SECTOR_FEASIBILITIES: SectorFeasibility[] = [
  {
    id: 'mango-pulping',
    name: 'Industrial Mango Pulping Facility',
    icon: '🥭',
    defaultCapexPKR: 120, // 120M PKR
    minCapexPKR: 60,
    maxCapexPKR: 250,
    annualRevenueMultiplier: 1.45,
    netMarginMin: 22,
    netMarginMax: 34,
    defaultExportRatio: 0.75,
    paybackYearsBase: 2.8,
    keyCosts: [
      { item: 'Raw Mango Procurement (Seasonal)', sharePercent: 44 },
      { item: 'Aseptic Bag-in-Drum Packaging', sharePercent: 22 },
      { item: 'Power, Steam & Energy Utilities', sharePercent: 16 },
      { item: 'Cold Storage & Port Logistics', sharePercent: 11 },
      { item: 'Labor & Operations', sharePercent: 7 },
    ],
    regulatoryBodies: ['SECP (Incorporation)', 'DPP (Department of Plant Protection)', 'PSQCA', 'Halal Food Authority', 'SBP (LTFF Facility)'],
    courseId: 'mango-pulping',
    summary: 'High-value agro-processing plant operating across 90-day peak mango season with multi-fruit (guava, tomato) off-season capacity.',
  },
  {
    id: 'shrimp-farming',
    name: 'Coastal Vannamei Shrimp Farm (25 Acres)',
    icon: '🦐',
    defaultCapexPKR: 85, // 85M PKR
    minCapexPKR: 40,
    maxCapexPKR: 200,
    annualRevenueMultiplier: 1.7,
    netMarginMin: 32,
    netMarginMax: 48,
    defaultExportRatio: 0.9,
    paybackYearsBase: 2.2,
    keyCosts: [
      { item: 'Commercial Pellet Feed (42% Protein)', sharePercent: 46 },
      { item: 'Electricity & Aeration Diesel Backup', sharePercent: 20 },
      { item: 'Post-Larvae (PL) Seed from Hatchery', sharePercent: 14 },
      { item: 'Water Salinity Testing & Probiotics', sharePercent: 11 },
      { item: 'Harvest Labor & Biosecurity', sharePercent: 9 },
    ],
    regulatoryBodies: ['Sindh Coastal Development Authority', 'Balochistan Coastal Dev Agency', 'Marine Fisheries Dept (MFD)', 'Customs Chilled Cargo'],
    courseId: 'shrimp-farming',
    summary: 'Two crops per year along Thatta or Gwadar coastal belt with 4-5 tons/acre yield and direct refrigerated container export to China and GCC.',
  },
  {
    id: 'it-export-agency',
    name: 'Export-Oriented AI & Software Studio',
    icon: '💻',
    defaultCapexPKR: 25, // 25M PKR
    minCapexPKR: 10,
    maxCapexPKR: 80,
    annualRevenueMultiplier: 2.6,
    netMarginMin: 38,
    netMarginMax: 55,
    defaultExportRatio: 0.95,
    paybackYearsBase: 1.2,
    keyCosts: [
      { item: 'Senior Software & AI Engineering Salaries', sharePercent: 58 },
      { item: 'US/EU Client Acquisition & Outbound Sales', sharePercent: 18 },
      { item: 'Cloud Compute, GPUs & SaaS Subscriptions', sharePercent: 12 },
      { item: 'Office Infrastructure & Fiber Bandwidth', sharePercent: 8 },
      { item: 'Legal & International Corporate Entity', sharePercent: 4 },
    ],
    regulatoryBodies: ['PSEB (Pakistan Software Export Board)', 'State Bank of Pakistan (FE Circular 02)', 'FBR (Section 65F / 100C Exemptions)', 'Delaware / UAE Registry'],
    courseId: 'it-exports-roadmap',
    summary: 'High net-margin digital agency providing dedicated engineering teams, generative AI agents, and enterprise cloud solutions to overseas clients.',
  },
  {
    id: 'solar-cni',
    name: 'Commercial & Industrial Solar (500 kW Captive)',
    icon: '☀️',
    defaultCapexPKR: 55, // 55M PKR
    minCapexPKR: 25,
    maxCapexPKR: 180,
    annualRevenueMultiplier: 0.45, // direct bill offset
    netMarginMin: 75,
    netMarginMax: 88,
    defaultExportRatio: 0.0,
    paybackYearsBase: 2.4,
    keyCosts: [
      { item: 'Tier-1 N-Type TOPCon Solar Modules', sharePercent: 52 },
      { item: 'Grid-Tie Inverters (Huawei / Sungrow)', sharePercent: 19 },
      { item: 'Mounting Structure & Lightning Protection', sharePercent: 14 },
      { item: 'Civil Foundation, Cabling & Switchgear', sharePercent: 10 },
      { item: 'NEPRA Green Meter & DISCO Testing', sharePercent: 5 },
    ],
    regulatoryBodies: ['NEPRA (Net Metering Regulation 2015)', 'DISCO (K-Electric, LESCO, FESCO)', 'AEDB Certification (Level V1)'],
    courseId: 'solar-distributed-generation',
    summary: 'Rooftop solar installation designed for textile, pharma, or manufacturing plants to hedge against peak industrial grid tariffs (Rs 65+/kWh).',
  },
  {
    id: 'halal-meat',
    name: 'Modern Chilled Halal Meat Packing Unit',
    icon: '🥩',
    defaultCapexPKR: 110, // 110M PKR
    minCapexPKR: 50,
    maxCapexPKR: 220,
    annualRevenueMultiplier: 1.55,
    netMarginMin: 18,
    netMarginMax: 29,
    defaultExportRatio: 0.85,
    paybackYearsBase: 2.9,
    keyCosts: [
      { item: 'Live Bull & Feeder Cattle Sourcing', sharePercent: 58 },
      { item: 'Chilled Air Cargo Freight to UAE/Saudi', sharePercent: 18 },
      { item: 'Blast Freezing & Cold Storage Power', sharePercent: 12 },
      { item: 'Vacuum Barrier Packing & Primal Cut Labeling', sharePercent: 7 },
      { item: 'Veterinary Inspection & Quarantine', sharePercent: 5 },
    ],
    regulatoryBodies: ['Ministry of National Food Security', 'Pakistan Halal Authority (PHA)', 'GCC SFDA / MOCCAE Approved Facility', 'PIA & Gulf Air Cargo'],
    courseId: 'halal-meat-export',
    summary: 'Value-added slaughterhouse and cold room facility producing vacuum-sealed primal cuts with 48-hour farm-to-Gulf supermarket delivery.',
  },
];
