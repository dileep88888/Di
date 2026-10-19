import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    "PADEL COURTS — PAKISTAN'S $300M UNTAPPED MARKET",
    "IT EXPORTS CROSS $3B MILESTONE",
    "NEW: COMMERCIAL SHRIMP FARMING BLUEPRINT",
    "267K+ YOUTUBE SUBSCRIBERS & OPERATORS REACHED",
    "MANGO PULPING WEBINAR RECORDING NOW AVAILABLE",
    "NATURAL GAS SHORTAGE: THE RS 45B ELECTRIC GEYSER BOOM",
    "HALAL MEAT EXPORTS TO GCC SURGE PAST $500M",
    "INDUSTRIAL SOLAR NET METERING REGULATIONS EXPLAINED",
  ];

  return (
    <div className="bg-amber-50 border-y-2 border-slate-900 py-2.5 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-black tracking-wider uppercase text-slate-800">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="hover:text-emerald-700 transition-colors cursor-pointer">
              {item}
            </span>
            <span className="w-2 h-2 bg-emerald-600 rotate-45 inline-block shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
