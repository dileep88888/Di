export interface CourseItem {
  id: string;
  title: string;
  slug: string;
  category: 'deck' | 'webinar_recording' | 'upcoming_webinar' | 'masterclass';
  categoryLabel: string;
  pricePKR: number;
  originalPricePKR?: number;
  rating: number;
  reviewsCount: number;
  duration: string;
  level: 'Executive & Investor' | 'Founder & Operator' | 'SME Owner';
  badge: string;
  instructor: {
    name: string;
    title: string;
    company: string;
    bio: string;
    avatarInitials: string;
  };
  coInstructor?: {
    name: string;
    title: string;
    company: string;
    avatarInitials: string;
  };
  shortDescription: string;
  fullDescription: string;
  keyStats: { label: string; value: string }[];
  deliverables: string[];
  slides: {
    title: string;
    subtitle: string;
    highlight: string;
    details: string[];
  }[];
  curriculum: {
    module: string;
    duration: string;
    lessons: string[];
  }[];
  tags: string[];
  colorTheme: 'emerald' | 'amber' | 'coral' | 'magenta' | 'teal';
  featured?: boolean;
}

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'mango-pulping',
    title: 'UNLOCKING THE MANGO PULPING BUSINESS IN PAKISTAN',
    slug: 'mango-pulping-business',
    category: 'webinar_recording',
    categoryLabel: 'WEBINAR RECORDINGS',
    pricePKR: 3500,
    originalPricePKR: 6000,
    rating: 4.9,
    reviewsCount: 142,
    duration: '2h 45m Recording + 42-Slide Financial Model Deck',
    level: 'Founder & Operator',
    badge: 'FLAGSHIP MASTERCLASS',
    instructor: {
      name: 'Saad Malik',
      title: 'Head of Finance',
      company: 'Döhler Group Pakistan',
      bio: 'Over 14 years evaluating agro-processing plants, export economics, and FMCG fruit supply chains across South Asia and the Middle East.',
      avatarInitials: 'SM',
    },
    coInstructor: {
      name: 'Khuram I.',
      title: 'Head of Sales & Marketing',
      company: 'Simta Foods',
      avatarInitials: 'KI',
    },
    shortDescription: 'This webinar explores why mango pulping is one of Pakistan’s most overlooked agro-processing opportunities. Covers plant capex, cold chain logistics, export margins to EU/GCC, and regulatory compliance.',
    fullDescription: 'Pakistan is the 5th largest producer of mangoes globally with over 1.8 million tons harvested annually, yet less than 6% is commercially processed into pulp and purees. In this masterclass recording, industry operators break down the actual capex requirements (Rs 80M - Rs 180M), energy consumption per metric ton, SBP financing schemes, aseptic packaging procurement, and how to secure multi-year purchase orders from international beverage conglomerates.',
    keyStats: [
      { label: 'Export Gross Margin', value: '34% - 41%' },
      { label: 'Typical Payback', value: '2.8 Years' },
      { label: 'Global Market Size', value: '$2.1 Billion' },
      { label: 'Harvest Window', value: '90 Days Peak' },
    ],
    deliverables: [
      'Complete 42-Slide Executive PDF Deck',
      'Downloadable Dynamic Financial Feasibility Model (Excel .xlsx with macro sensitivity)',
      'List of 18 pre-vetted aseptic drum suppliers & cold store providers in Sindh/Punjab',
      'SBP LTFF (Long Term Financing Facility) concessionary credit application blueprint',
      'Certificate of Completion from DISC Learning',
    ],
    slides: [
      {
        title: 'SLIDE 01: THE AGRO-PROCESSING BOTTLENECK',
        subtitle: 'Production vs Commercial Value Realization',
        highlight: '94% of Pakistan mango yield sold raw with 35% post-harvest spoilage',
        details: [
          'Raw mango farmgate price: Rs 65-90/kg vs Aseptic pulp export price: $1,250-$1,480/MT',
          'Value enhancement ratio: 2.8x after factoring processing and packaging overhead',
          'Primary destination markets: Germany, UAE, UK, Netherlands, Saudi Arabia',
        ],
      },
      {
        title: 'SLIDE 02: 5-TON/HOUR PROCESSING UNIT CAPEX',
        subtitle: 'Equipment Sourcing & Utility Infrastructure',
        highlight: 'Estimated Total Unit Capex: Rs 145 Million (excluding land)',
        details: [
          'Washing, destoning, and enzymatic inactivation line: Rs 55M (Local + Italian components)',
          'Continuous aseptic sterilization and bag-in-drum filler: Rs 48M',
          'Effluent treatment and steam boiler setup: Rs 22M',
          'Grid connection + backup industrial diesel generator: Rs 20M',
        ],
      },
      {
        title: 'SLIDE 03: CASH FLOW & SEASONALITY SENSITIVITY',
        subtitle: 'Multi-fruit utilization strategy',
        highlight: 'Extending season from 3 months to 8 months with guava and tomato paste',
        details: [
          'June - August: Chaunsa, Sindhri, and Anwar Ratol processing',
          'September - November: Pink Guava pulp line conversion',
          'December - March: Industrial tomato paste processing for domestic sauce makers',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: The Raw Material Advantage & Supply Sourcing',
        duration: '42 mins',
        lessons: [
          'Farmgate procurement dynamics in Multan, Rahim Yar Khan, and Mirpurkhas',
          'Quality grading: Brix levels, acidity ratios, and pulp recovery benchmarks',
          'Contract farming agreements: hedging against harvest price spikes',
        ],
      },
      {
        module: 'Module 2: Plant Architecture, Machinery & Utilities',
        duration: '50 mins',
        lessons: [
          'Turnkey plant blueprints vs Modular equipment procurement',
          'Steam boiler sizing and water demineralization requirements',
          'Aseptic bagging standards (FSSC 22000 & Halal export compliance)',
        ],
      },
      {
        module: 'Module 3: Unit Economics, Working Capital & Financing',
        duration: '45 mins',
        lessons: [
          'Detailed line-by-line breakdown of raw fruit, drum packaging, electricity, and labor',
          'Working capital buffer for 90-day seasonal procurement cycle',
          'Accessing subsidized financing: SBP SME Asaan and LTFF schemes',
        ],
      },
      {
        module: 'Module 4: Global Offtake & Buyer Outreach',
        duration: '28 mins',
        lessons: [
          'How European juice re-packers qualify new suppliers',
          'Testing protocols: pesticide residues, microbiology, and shelf-life assays',
          'Pricing terms: FOB Karachi vs CIF Rotterdam contracts',
        ],
      },
    ],
    tags: ['Agro-Processing', 'Exports', 'Manufacturing', 'Supply Chain'],
    colorTheme: 'amber',
    featured: true,
  },
  {
    id: 'shrimp-farming',
    title: 'COMMERCIAL SHRIMP FARMING IN SINDH & BALOCHISTAN',
    slug: 'commercial-shrimp-farming',
    category: 'deck',
    categoryLabel: 'INDUSTRY DATA DECKS',
    pricePKR: 4500,
    originalPricePKR: 7500,
    rating: 4.95,
    reviewsCount: 98,
    duration: '56-Slide In-Depth Deck + Land Feasibility Checklist',
    level: 'Executive & Investor',
    badge: 'HIGH-GROWTH EXPORT',
    instructor: {
      name: 'Dr. Tariq Zaman',
      title: 'Aquaculture Advisor & Consultant',
      company: 'Coastal Blue Horizon',
      bio: 'Managed 250+ acres of Penaeus Vannamei commercial aquaculture ponds across Thatta, Badin, and Gwadar coastlines.',
      avatarInitials: 'TZ',
    },
    shortDescription: 'Comprehensive technical and financial roadmap for establishing commercial Vannamei shrimp aquaculture ponds in coastal Pakistan. Water salinity management, seed hatchery sourcing, and export revenue modeling.',
    fullDescription: 'With over 1,000 km of coastline and ideal tropical salinity conditions, Pakistan holds massive competitive advantages over regional players in white-leg shrimp (Vannamei). This data deck breaks down a 25-acre commercial pond setup, stocking density, feed conversion ratios (FCR), aerator electrical consumption, harvest cycles (2 crops per year), and direct sales channels to Chinese and Gulf seafood traders.',
    keyStats: [
      { label: 'Harvest Yield', value: '4 - 5 Tons / Acre' },
      { label: 'Export Value', value: '$5,800 - $7,200 / Ton' },
      { label: 'IRR', value: '44.5%' },
      { label: 'Gross Margin', value: '52%' },
    ],
    deliverables: [
      '56-Slide Master Data Deck (High-Res PDF)',
      '25-Acre Earthwork & Polyethylene Lining Cost Calculator (Excel)',
      'Water testing parameter tolerances (pH, Salinity, Ammonia, DO)',
      'Hatchery PL (Post-Larvae) seed procurement contacts',
    ],
    slides: [
      {
        title: 'SLIDE 01: GLOBAL AQUACULTURE LANDSCAPE',
        subtitle: 'Pakistan Coastal Opportunity',
        highlight: 'Pakistan exports under $120M vs Vietnam & India surpassing $3.5B+ each',
        details: [
          'Natural water temperature along Thatta/Badin supports optimal growth cycles',
          'Zero antibiotic residue advantages for EU market access',
          'Low cost of coastal lease land compared to Southeast Asia',
        ],
      },
      {
        title: 'SLIDE 02: POND CIVIL ENGINEERING & AERATION',
        subtitle: 'Capital allocation for 10x 1-hectare ponds',
        highlight: 'Total initial earthwork & infrastructure capex: Rs 68 Million',
        details: [
          'HDPE geomembrane lining (500 micron): Rs 18M',
          'Paddle wheel aerators & roots blowers: Rs 14M',
          'Solar PV hybrid pumping station (reduces diesel opex by 65%): Rs 16M',
          'Biosecurity fencing and bird netting: Rs 6M',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: Site Selection & Salinity Profiling',
        duration: '35 mins',
        lessons: ['Testing soil clay content and groundwater saline aquifers', 'Tidal canal intake design and sedimentation ponds', 'Coastal Development Authority leasing procedures'],
      },
      {
        module: 'Module 2: Stocking, Nutrition & Water Biosecurity',
        duration: '45 mins',
        lessons: ['Acclimatization of Post-Larvae seed (PL-10 to PL-15)', 'Commercial feed formulations and automated feeding timers', 'Managing dissolved oxygen spikes and night-time aeration'],
      },
      {
        module: 'Module 3: Harvest, Cold Chain & Processing Export',
        duration: '40 mins',
        lessons: ['Partial harvesting vs Final drag harvest technique', 'Slush ice preservation to prevent melanosis', 'Customs export rebate and SBP rebate documentation'],
      },
    ],
    tags: ['Aquaculture', 'Exports', 'Agriculture', 'Coastal Economy'],
    colorTheme: 'teal',
    featured: true,
  },
  {
    id: 'it-exports-roadmap',
    title: 'PAKISTAN IT EXPORTS & AI WORKFORCE ROADMAP',
    slug: 'pakistan-it-exports-ai-roadmap',
    category: 'deck',
    categoryLabel: 'INDUSTRY DATA DECKS',
    pricePKR: 5000,
    originalPricePKR: 8500,
    rating: 4.88,
    reviewsCount: 215,
    duration: '64-Slide Strategic Report + Talent Salary Matrix 2026',
    level: 'Executive & Investor',
    badge: 'TECH & SERVICES',
    instructor: {
      name: 'Jehan Ara',
      title: 'Founder & Tech Ecosystem Pioneer',
      company: 'Katalyst Labs',
      bio: 'Over two decades advising tech founders, SBP, and Ministry of IT on software exports, venture capital, and cross-border digital taxation.',
      avatarInitials: 'JA',
    },
    shortDescription: 'How Pakistan’s software and digital services sector can scale from $3.2B to $10B. Deep data on talent billability, overseas entities in Delaware/Dubai, SBP digital account rules, and AI agency pivots.',
    fullDescription: 'Pakistan is now the 2nd largest provider of online freelance talent on major platforms, with corporate IT firms delivering cloud infrastructure, generative AI applications, and enterprise ERP solutions worldwide. This deck breaks down company profit margins, FX retention rules (allowing 50% retention in foreign currency), customer acquisition costs in the US and UK, and unit economics of building a 50-person specialized engineering studio.',
    keyStats: [
      { label: 'Current IT Exports', value: '$3.2 Billion' },
      { label: 'YoY Growth Rate', value: '+28.4%' },
      { label: 'Avg Hourly Rate', value: '$28 - $65 / hr' },
      { label: 'SBP FX Retention', value: 'Up to 50%' },
    ],
    deliverables: [
      '64-Slide Strategic Intelligence Report',
      '2026 Pakistan Engineering & AI Talent Salary Benchmark Spreadsheet',
      'Dual-Company Corporate Structure Guide (Delaware C-Corp + Pakistan Pvt Ltd)',
      'Sales Playbook for Enterprise Outbound to US B2B Clients',
    ],
    slides: [
      {
        title: 'SLIDE 01: EXPORT GROWTH TRAJECTORY',
        subtitle: 'Software vs Traditional Service Sector Comparison',
        highlight: 'Net foreign exchange inflow ratio exceeds 88% due to minimal imported raw materials',
        details: [
          'IT exports are now Pakistan’s fastest growing FX earner after Textiles',
          'Shift from low-margin maintenance contracts to high-value AI agent workflows',
          'Top 100 exporters account for 62% of formal channel remittances',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: Corporate Structuring & Tax Optimization',
        duration: '50 mins',
        lessons: ['Dual-entity structure: Holding company vs Operating subsidiary', 'Section 65F / 100C tax exemptions with FBR', 'Setting up Stripe and Mercury Bank accounts legitimately'],
      },
      {
        module: 'Module 2: The Transition to High-Value AI & Cloud Services',
        duration: '45 mins',
        lessons: ['Moving from $15/hr staff augmentation to $60/hr solutions engineering', 'Training local engineers on LLM fine-tuning and retrieval pipelines', 'Building proprietary IP and SaaS spin-offs from client projects'],
      },
    ],
    tags: ['Tech', 'IT Services', 'Foreign Exchange', 'Venture Capital'],
    colorTheme: 'emerald',
    featured: true,
  },
  {
    id: 'electric-geysers-efficiency',
    title: 'ELECTRIC GEYSERS & ENERGY HEATING INDUSTRY IN-DEPTH',
    slug: 'electric-geysers-energy-heating',
    category: 'deck',
    categoryLabel: 'INDUSTRY DATA DECKS',
    pricePKR: 3000,
    originalPricePKR: 5000,
    rating: 4.75,
    reviewsCount: 76,
    duration: '48-Slide Sector Deck + BOM Cost Breakdown',
    level: 'SME Owner',
    badge: 'CLEANTECH & APPLIANCES',
    instructor: {
      name: 'Engr. Bilal Hashmi',
      title: 'Principal Energy Auditor & Consultant',
      company: 'Pakistan Energy Council',
      bio: 'Advised NEPRA and appliance manufacturers in Gujranwala and Lahore on seasonal heating energy standards.',
      avatarInitials: 'BH',
    },
    shortDescription: 'As natural gas tariffs rise and winter supplies dwindle, Pakistan’s heating market is transitioning rapidly to high-efficiency instant electric and solar heat-pump geysers. Sizing the Rs 45B transition.',
    fullDescription: 'Gujranwala and fan/appliance clusters produce over 1.2M water heaters annually. With winter gas loadshedding and soaring gas tariffs, demand has shifted toward hybrid electric-solar water heaters and polyurethane-insulated heat pump boilers. This report provides complete Bill of Materials (BOM) analysis, sheet metal stamping tooling costs, thermostat sourcing from China, and distributor retail margin structures across Punjab and Sindh.',
    keyStats: [
      { label: 'Addressable Market', value: 'Rs 45 Billion' },
      { label: 'Shift to Electric', value: '+310% in 2 Years' },
      { label: 'BOM Production Cost', value: 'Rs 12,400 / unit' },
      { label: 'Retail Gross Margin', value: '26% - 32%' },
    ],
    deliverables: [
      '48-Slide Technical & Market Sizing Deck',
      'Comprehensive Bill of Materials (BOM) Sheet with Chinese vendor parts list',
      'Distribution channel map (Lahore, Karachi, Rawalpindi, Peshawar wholesale hubs)',
    ],
    slides: [
      {
        title: 'SLIDE 01: TARIFF DIVERGENCE & CONSUMER BEHAVIOR',
        subtitle: 'Natural Gas Crises Driving Electrification',
        highlight: 'Winter heating bills on gas jumped 4.5x since 2022, accelerating electric switch',
        details: [
          'Average payback for high-efficiency electric geyser: 4.2 months in saved gas surcharges',
          'Demand spikes: October to January inventory stocking cycles',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: Appliance Cluster Dynamics in Gujranwala',
        duration: '35 mins',
        lessons: ['Sheet metal press shops, enamel coating, and PUF insulation lines', 'Safety standards: Pressure relief valves and thermostat certifications', 'Supply chain lead times for copper heating elements from Ningbo'],
      },
    ],
    tags: ['Energy', 'Manufacturing', 'Consumer Goods', 'SME'],
    colorTheme: 'coral',
    featured: false,
  },
  {
    id: 'halal-meat-export',
    title: 'HALAL MEAT SUPPLY CHAIN: FEEDLOT TO GCC RETAIL',
    slug: 'halal-meat-export-value-chain',
    category: 'webinar_recording',
    categoryLabel: 'WEBINAR RECORDINGS',
    pricePKR: 3800,
    originalPricePKR: 6500,
    rating: 4.89,
    reviewsCount: 110,
    duration: '3h 10m Recording + 50-Slide Operational Guide',
    level: 'Founder & Operator',
    badge: 'LIVESTOCK & AGRO',
    instructor: {
      name: 'Naveed Akhtar',
      title: 'Operations Director',
      company: 'Zenith Meat Packers',
      bio: 'Ex-head of slaughterhouse operations shipping 120 metric tons of chilled beef and mutton weekly to Saudi Arabia and the UAE.',
      avatarInitials: 'NA',
    },
    shortDescription: 'How Pakistani meat exporters capture high-margin carcass and vacuum-packed chilled beef/mutton markets in Dubai, Riyadh, and Doha. Feedlot fattening protocols, quarantine compliance, and air freight logistics.',
    fullDescription: 'Pakistan produces world-class beef and mutton, but historically sold basic hanging carcasses via air cargo with compressed margins. This masterclass demonstrates how modern processors achieve 35%+ gross margins through vacuum packaging, primal cuts, feedlot weight-gain optimization, and direct supermarket shelf partnerships across the GCC.',
    keyStats: [
      { label: 'Pakistan Meat Exports', value: '$500M+ Record' },
      { label: 'Chilled Air Freight', value: '48hr Farm-to-Shelf' },
      { label: 'Feedlot FCR', value: '6.2 kg feed / kg gain' },
      { label: 'GCC Market Share', value: 'Top 3 Supplier' },
    ],
    deliverables: [
      '50-Slide Full Masterclass Slide Deck',
      'Feedlot Ration Formulation Calculator (corn silage, wheat straw, molasses mix)',
      'GCC Chilled Meat Import Specifications & Halal Certificate Guide',
    ],
    slides: [
      {
        title: 'SLIDE 01: LOGISTICS ADVANTAGE OVER BRAZIL & AUSTRALIA',
        subtitle: 'Geographic proximity to the Arabian Gulf',
        highlight: 'Pakistan delivers chilled (never frozen) carcass in under 24 hours by air',
        details: [
          'Chilled meat commands a 40% price premium over frozen Indian buffalo meat',
          'Daily cargo flights from Karachi, Lahore, and Sialkot directly to Gulf hubs',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: Feedlot Fattening Unit Economics',
        duration: '50 mins',
        lessons: ['Sourcing feeder bulls from Cholistan and Southern Punjab', 'Disease vaccination schedules and weight gain monitoring', 'Daily feed cost calculation and slaughter readiness criteria'],
      },
    ],
    tags: ['Livestock', 'Exports', 'Halal Food', 'Gulf Trade'],
    colorTheme: 'magenta',
    featured: false,
  },
  {
    id: 'solar-distributed-generation',
    title: 'SOLAR ROOFTOP & INDUSTRIAL DISTRIBUTED GENERATION',
    slug: 'solar-rooftop-industrial-generation',
    category: 'upcoming_webinar',
    categoryLabel: 'UPCOMING WEBINARS',
    pricePKR: 4200,
    originalPricePKR: 7000,
    rating: 5.0,
    reviewsCount: 88,
    duration: 'Live Interactive Session + Q&A with NEPRA Advisors',
    level: 'Executive & Investor',
    badge: 'LIVE ON NOV 12, 2026',
    instructor: {
      name: 'Kashif Mehmood',
      title: 'Solar EPC Director',
      company: 'Indus Solar Power Systems',
      bio: 'Commissioned over 65MW of commercial and industrial (C&I) solar installations for textile mills and pharmaceutical plants in Karachi and Faisalabad.',
      avatarInitials: 'KM',
    },
    shortDescription: 'Navigating NEPRA net metering regulations, bilateral PPA contracts, battery energy storage systems (BESS), and financing industrial solar arrays in Pakistan.',
    fullDescription: 'With grid electricity rates crossing Rs 60-70/kWh for peak industrial tariffs, commercial rooftop solar has become an existential requirement for Pakistani manufacturers. This live webinar covers the transition to Gross Metering debates, sizing solar installations for textile and spinning mills, wheeling regulations through DISCOs, and calculating return on battery storage.',
    keyStats: [
      { label: 'Industrial Grid Tariff', value: 'Rs 62 - 74 / kWh' },
      { label: 'Solar LCOE', value: 'Rs 12 - 16 / kWh' },
      { label: 'Typical Payback', value: '2.1 - 2.9 Years' },
      { label: 'C&I Capacity Added', value: '1,800+ MW' },
    ],
    deliverables: [
      'Live Access to 3-hour Webinar with real-time speaker Q&A',
      'Industrial PPA Contract Template (Commercial Power Purchase Agreement)',
      'Solar + BESS Financial Sensitivity Sheet (NPV, IRR, Levelized Cost)',
      'Recording replay link with lifetime access',
    ],
    slides: [
      {
        title: 'SLIDE 01: POWER TARIFF PRESSURES ON INDUSTRY',
        subtitle: 'Grid Tariff vs Self-Generation Economics',
        highlight: 'Solar reduces energy overhead from 24% of cost of goods to under 9%',
        details: [
          'Industrial mills without captive solar face negative cash flow on export orders',
          'Net metering vs Zero-export limiters when DISCO approvals stall',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: Regulatory Policy & DISCO Friction',
        duration: '45 mins',
        lessons: ['Current NEPRA regulations on wheeling and net metering', 'Navigating DISCO green meter issuance and transformer upgrades', 'Structuring Third-Party Opex / Capex models'],
      },
    ],
    tags: ['Solar', 'Renewable Energy', 'Manufacturing', 'Tariff Policy'],
    colorTheme: 'amber',
    featured: false,
  },
  {
    id: 'sme-macro-survival',
    title: 'MACROECONOMIC SURVIVAL GUIDE FOR PAKISTAN SMES',
    slug: 'macroeconomic-survival-guide-smes',
    category: 'masterclass',
    categoryLabel: 'EXECUTIVE MASTERCLASSES',
    pricePKR: 0,
    originalPricePKR: 2500,
    rating: 4.96,
    reviewsCount: 340,
    duration: '1h 30m Free Foundation Briefing + Macro Primer PDF',
    level: 'SME Owner',
    badge: 'FREE COMMUNITY ACCESS',
    instructor: {
      name: 'Ali Khizar',
      title: 'Senior Economist & Head of Research',
      company: 'DISC Technology / DISC Learning',
      bio: 'Leading economic commentator with 18+ years analyzing Pakistan’s monetary policy, IMF programs, current account deficits, and fiscal budgets.',
      avatarInitials: 'AK',
    },
    shortDescription: 'Free essential briefing on inflation hedging, currency devaluation defense, interest rate cycles, and working capital preservation for business owners operating in Pakistan.',
    fullDescription: 'In an economy navigating inflation, IMF reviews, and currency adjustments, business survival requires understanding macroeconomic signals before they hit your income statement. This free briefing breaks down SBP monetary policy signals, debt structuring in high-KIBOR environments, and pricing strategies to protect your operating margins.',
    keyStats: [
      { label: 'Enrolled Business Owners', value: '4,200+' },
      { label: 'Access Cost', value: '100% Free' },
      { label: 'Format', value: 'Video + 32-page PDF' },
      { label: 'Updated For', value: 'Fiscal Year 2026' },
    ],
    deliverables: [
      'Full 1h 30m Video Masterclass Access',
      '32-page Pakistan Macroeconomic Primer PDF',
      'Monthly Economic Dashboard updates via Pakistan & Counting Dispatch',
    ],
    slides: [
      {
        title: 'SLIDE 01: INFLATION & SPREAD DEFENSE',
        subtitle: 'Protecting Operating Margins',
        highlight: 'How proactive inventory purchasing beats passive cash holding in high-inflation cycles',
        details: [
          'Working capital buffer calculations during SBP interest rate shifts',
          'Managing dollar exposure when importing equipment or raw ingredients',
        ],
      },
    ],
    curriculum: [
      {
        module: 'Module 1: Interpreting SBP & IMF Signals',
        duration: '45 mins',
        lessons: ['How to read SBP monetary policy statements', 'Understanding current account balance impacts on PKR/USD rates', 'Hedging against sudden import quota controls'],
      },
    ],
    tags: ['Economy', 'Finance', 'SME', 'Inflation'],
    colorTheme: 'emerald',
    featured: false,
  },
];
