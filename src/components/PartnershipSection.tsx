import React from 'react';
import { ArrowRight, ShieldCheck, Target, Award } from 'lucide-react';

interface PartnershipSectionProps {
  onPartnerClick: () => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onPartnerClick }) => {
  const sponsors = [
    {
      name: 'YANGO',
      color: 'text-red-600',
      tag: 'Ride-Hailing & Logistics',
      note: 'Sponsored Unlocking Urban Transport Series',
    },
    {
      name: 'VISA',
      color: 'text-blue-700 font-serif italic',
      tag: 'Digital Payments',
      note: 'Exclusive Sponsor: Pakistan Cashless Future Deep Dive',
    },
    {
      name: 'ENGRO',
      color: 'text-emerald-700',
      tag: 'Fertilizers, Energy & Petrochem',
      note: 'Agri-Transformation & Food Security Partner',
    },
    {
      name: 'MCB FUNDS',
      color: 'text-amber-600',
      tag: 'Asset Management & Mutual Funds',
      note: 'Wealth Preservation & High-Yield Fixed Income Series',
    },
    {
      name: 'SYNGENTA',
      color: 'text-teal-700',
      tag: 'Agro-Chemicals & Crop Protection',
      note: 'Modern Crop Yields & Seed Science Partner',
    },
    {
      name: 'REON ENERGY',
      color: 'text-sky-700',
      tag: 'Industrial Captive Solar',
      note: 'Industrial Energy Transition Series',
    },
  ];

  return (
    <section id="partners" className="bg-graph-paper py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header matching Screenshot 5 */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase">
            Reach The People Driving
          </p>

          <div className="inline-block relative">
            <div className="bg-white border-3 border-slate-900 px-6 sm:px-8 py-2.5 shadow-[6px_6px_0px_#0d9488]">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                Pakistan's Economy
              </h2>
            </div>
          </div>
        </div>

        {/* 3 Grid Paper Cards matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AUDIENCE */}
          <div className="bg-white/80 bg-graph-paper-dense border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#000000] space-y-4 hover:shadow-[7px_7px_0px_#10b981] transition-all">
            <span className="inline-block px-3 py-1 bg-white border-2 border-emerald-600 text-emerald-800 text-xs font-black tracking-wider uppercase rounded-xs">
              Audience
            </span>

            <h3 className="text-xl font-black text-slate-900 leading-snug uppercase">
              Direct access to decision-makers across Pakistan's top sectors
            </h3>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Our community includes managing directors, treasury officers, tech founders, and industrial plant owners who make capital allocation decisions daily.
            </p>
          </div>

          {/* Card 2: TRUST */}
          <div className="bg-white/80 bg-graph-paper-dense border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#000000] space-y-4 hover:shadow-[7px_7px_0px_#f59e0b] transition-all">
            <span className="inline-block px-3 py-1 bg-white border-2 border-amber-500 text-amber-800 text-xs font-black tracking-wider uppercase rounded-xs">
              Trust
            </span>

            <h3 className="text-xl font-black text-slate-900 leading-snug uppercase">
              Your brand alongside credible, independent analysis
            </h3>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              We never do unresearched puff pieces. Every corporate partnership is grounded in macroeconomic context, rigorous data charts, and transparent methodology.
            </p>
          </div>

          {/* Card 3: BRAND LEADERSHIP */}
          <div className="bg-white/80 bg-graph-paper-dense border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#000000] space-y-4 hover:shadow-[7px_7px_0px_#f97316] transition-all">
            <span className="inline-block px-3 py-1 bg-white border-2 border-orange-500 text-orange-800 text-xs font-black tracking-wider uppercase rounded-xs">
              Brand Leadership
            </span>

            <h3 className="text-xl font-black text-slate-900 leading-snug uppercase">
              Brand leadership: built into the content itself
            </h3>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Position your leadership as category thought-leaders with dedicated documentary episodes, custom research data decks, and executive roundtable webinars.
            </p>
          </div>
        </div>

        {/* Trusted By Sponsor Carousel Grid matching Screenshot 3 */}
        <div className="pt-8 space-y-6">
          <div className="text-center">
            <p className="text-sm font-black tracking-widest text-slate-800 uppercase">
              Trusted By:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.map((sp, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-900 p-4 rounded-xs shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#f59e0b] hover:-translate-y-0.5 transition-all text-center flex flex-col justify-center items-center h-24"
              >
                <div className={`text-xl font-black tracking-tighter ${sp.color}`}>
                  {sp.name}
                </div>
                <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase truncate max-w-full">
                  {sp.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onPartnerClick}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm tracking-wide rounded-xs border-2 border-slate-900 shadow-[4px_4px_0px_#10b981] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Partnership Tiers &amp; Media Kit</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
