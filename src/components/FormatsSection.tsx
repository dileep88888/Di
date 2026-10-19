import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FormatsSectionProps {
  onSelectFormat: (formatId: string) => void;
}

export const FormatsSection: React.FC<FormatsSectionProps> = ({ onSelectFormat }) => {
  const formats = [
    {
      num: '01',
      title: 'UNLOCKING GROWTH',
      tag: 'FLAGSHIP SERIES',
      gridBg: 'bg-grid-emerald',
      description: 'Documentary video essays and industry roadmaps mapping high-potential economic sectors.',
      stat: '10M+ Total Views',
      categoryTarget: 'all',
    },
    {
      num: '02',
      title: 'INDUSTRY REPORTS',
      tag: 'DEEP DIVES',
      gridBg: 'bg-grid-amber',
      description: 'Sector-by-sector visual data presentations, unit economics, capex estimates, and value chain maps.',
      stat: '40+ Commercial Decks',
      categoryTarget: 'deck',
    },
    {
      num: '03',
      title: 'PODCASTS',
      tag: 'CONVERSATIONS',
      gridBg: 'bg-grid-orange',
      description: 'Long-form candid discussions with industrial leaders, tech founders, and economic policymakers.',
      stat: '60+ Executive Guests',
      categoryTarget: 'webinar_recording',
    },
    {
      num: '04',
      title: 'EXPLAINERS',
      tag: 'QUICK TAKES',
      gridBg: 'bg-grid-magenta',
      description: 'Short-form visual breakdowns transforming complex monetary policies and tariffs into clear insights.',
      stat: 'Weekly Visual Briefs',
      categoryTarget: 'masterclass',
    },
  ];

  return (
    <section id="formats" className="bg-graph-paper py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header with exact styling from Screenshot 6 */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase">
            The Economy Through
          </p>

          <div className="inline-block relative">
            <div className="bg-white border-3 border-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 shadow-[6px_6px_0px_#10b981]">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                Reform &amp; Opportunity
              </h2>
            </div>
          </div>

          <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pt-2">
            Four formats. One mission — to make Pakistan's economy accessible for the people building its future.
          </p>
        </div>

        {/* 4 Format Grid Cards (Exact from Screenshot 6 & 8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((fmt) => (
            <div
              key={fmt.num}
              onClick={() => onSelectFormat(fmt.categoryTarget)}
              className="group cursor-pointer text-white relative rounded-sm border-3 border-slate-900 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden min-h-[360px]"
            >
              {/* Colored Grid Paper Pattern */}
              <div className={`absolute inset-0 ${fmt.gridBg}`} />

              {/* Card Header Content */}
              <div className="relative z-10 p-6 space-y-4">
                {/* Pill/Tag badge matching Screenshot 6 */}
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs text-white text-xs font-black tracking-wider uppercase border border-white/30 rounded-xs">
                  {fmt.tag}
                </span>

                {/* Giant Number watermark */}
                <div className="text-6xl sm:text-7xl font-black text-white/25 select-none leading-none tracking-tighter">
                  {fmt.num}
                </div>

                <h3 className="text-2xl font-black tracking-tight text-white leading-tight uppercase">
                  {fmt.title}
                </h3>

                <p className="text-white/90 text-sm font-medium leading-snug">
                  {fmt.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 p-6 pt-0 flex items-center justify-between border-t border-white/20 mt-4">
                <span className="text-xs font-extrabold text-white/90">
                  {fmt.stat}
                </span>
                <div className="w-8 h-8 rounded bg-white text-slate-900 flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
