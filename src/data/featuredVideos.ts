export interface FeaturedVideo {
  id: string;
  title: string;
  guest: string;
  organization: string;
  duration: string;
  views: string;
  published: string;
  tag: string;
  summary: string;
  keyTakeaways: string[];
  chapters: { time: string; title: string }[];
  youtubeId?: string;
  badge: string;
}

export const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: 'select-tech-cfo-xiaomi',
    title: 'Select Technologies CFO on Xiaomi, IPO & Manufacturing in Pakistan',
    guest: 'Muhammad Naveed',
    organization: 'CFO, Select Technologies (Air Link Communication)',
    duration: '42:15',
    views: '412K',
    published: 'Recently Published',
    tag: 'Mobile Assembly & Manufacturing',
    badge: 'FLAGSHIP EPISODE',
    summary: 'A rare, inside look into mobile smartphone assembly economics in Pakistan, domestic value addition percentages, local vendor component ecosystems, and how Air Link plans its upcoming capital market expansions.',
    keyTakeaways: [
      'Pakistan manufactures over 21 million mobile handsets locally per year under the Mobile Manufacturing Policy.',
      'Transitioning from CKD (Completely Knocked Down) kit assembly to SMD (Surface Mount Device) board manufacturing increases local value addition from 6% to over 22%.',
      'Exporting Pakistani-assembled smartphones to African and Central Asian markets is becoming viable with SBP drawback facilities.',
      'Capital market listing: how tech and electronics manufacturers access growth capital on the Pakistan Stock Exchange (PSX).',
    ],
    chapters: [
      { time: '00:00', title: 'Introduction: The Rise of Domestic Smartphone Assembly' },
      { time: '04:20', title: 'How Select Technologies brought Xiaomi to Lahore' },
      { time: '12:45', title: 'The True Bill of Materials: Where does value addition lie?' },
      { time: '22:10', title: 'Taxes, Duties & SBP Foreign Exchange Constraints' },
      { time: '31:50', title: 'Why an IPO is essential for electronics manufacturers' },
      { time: '38:15', title: 'Can Pakistan ever export electronics regionally?' },
    ],
  },
  {
    id: 'padel-courts-sports-economy',
    title: "Padel Courts – Pakistan's $300M Untapped Urban Sports Market",
    guest: 'Kamran Siddiqui',
    organization: 'Founder, Padel Arena Karachi & Islamabad',
    duration: '28:40',
    views: '285K',
    published: 'Top Trending',
    tag: 'Urban Real Estate & Leisure',
    badge: 'RAPID GROWTH',
    summary: 'How an obscure racket sport turned into Pakistan’s highest-yield urban commercial real estate monetization model, generating 40%+ cash-on-cash annual returns on idle land.',
    keyTakeaways: [
      'Average court construction capex: Rs 4.5M - Rs 6.5M including panoramic tempered glass and turf.',
      'Court rental yields: Rs 4,000 - Rs 7,500/hour with 70%+ weekend occupancy rates.',
      'Sponsorship, café concessions, and equipment retailing add another 25% to gross court revenues.',
      'Payback period in DHA Karachi and Gulberg Lahore averages under 14 months.',
    ],
    chapters: [
      { time: '00:00', title: 'The explosion of Padel across Karachi, Lahore & Islamabad' },
      { time: '05:30', title: 'Unit economics of a 3-court facility on leased land' },
      { time: '14:15', title: 'Glass, turf & LED floodlight procurement costs' },
      { time: '21:00', title: 'Monetization beyond court hourly fees: tournaments & F&B' },
    ],
  },
  {
    id: 'dairy-fruit-market-to-psx',
    title: 'From Fruit Market to Stock Market: The Real Unit Economics of Dairy',
    guest: 'Suleman Chawla',
    organization: 'Dairy Industry Analyst & Ex-VP FPCCI',
    duration: '35:10',
    views: '340K',
    published: 'Essential Watch',
    tag: 'Agribusiness & FMCG',
    badge: 'INDUSTRY DEEP DIVE',
    summary: 'Pakistan produces 60+ billion liters of milk annually, ranking 4th globally, yet only 10% enters the formal packaged supply chain. What prevents formalization and where does the margin go?',
    keyTakeaways: [
      'The traditional Gawala and Dodhi intermediary chain captures up to 40% of retail milk margin.',
      'Modern corporate dairy farms face rising corn silage feed costs, requiring genomic breeding to boost yield past 30 liters/cow/day.',
      'The sales tax exemption withdrawal on packaged milk created severe price distortions between loose and packaged milk.',
      'Processing opportunities: UHT milk, mozzarella cheese, and whey protein powder for pharma.',
    ],
    chapters: [
      { time: '00:00', title: 'Pakistan’s milk paradox: massive production, minimal processing' },
      { time: '07:40', title: 'Fattening vs Milking: breed genetics that actually survive the heat' },
      { time: '18:20', title: 'Why informal loose milk still commands 90% market share' },
      { time: '29:05', title: 'The path forward for corporate dairy on the PSX' },
    ],
  },
];
