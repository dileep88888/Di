import React from 'react';
import { BarChart3, Clock, Eye, Users } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="bg-graph-paper py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header matching Screenshot 4 */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase">
            Real Numbers,
          </p>

          <div className="inline-block relative">
            <div className="bg-white border-3 border-slate-900 px-6 sm:px-8 py-2.5 shadow-[6px_6px_0px_#10b981]">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                Real Engagement
              </h2>
            </div>
          </div>

          <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pt-1">
            Trusted by a growing community of operators, investors, and decision-makers across Pakistan.
          </p>
        </div>

        {/* 4 Stat Cards matching Screenshot 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Engagement Rate (Exact layout from Screenshot 4) */}
          <div className="bg-white border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#f43f5e] flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500">
              <BarChart3 className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div>
              <h3 className="text-lg font-black uppercase text-slate-900">
                Engagement Rate
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                Industry Average
              </p>
            </div>

            {/* Inset Metric Box matching screenshot */}
            <div className="p-3 bg-white border-2 border-rose-500 shadow-[3px_3px_0px_#f43f5e] rounded-xs">
              <div className="text-3xl font-black text-rose-600 font-mono">
                7<span className="text-xl">%</span>
              </div>
              <div className="text-xs font-bold text-slate-700">
                vs - 0.44%
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              16x higher viewer interaction than standard business media.
            </p>
          </div>

          {/* Card 2: Average View Time */}
          <div className="bg-white border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#10b981] flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Clock className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div>
              <h3 className="text-lg font-black uppercase text-slate-900">
                Avg. View Duration
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                Benchmark Comparison
              </p>
            </div>

            <div className="p-3 bg-white border-2 border-emerald-500 shadow-[3px_3px_0px_#10b981] rounded-xs">
              <div className="text-2xl font-black text-emerald-700 font-mono">
                4m 28s
              </div>
              <div className="text-xs font-bold text-slate-700">
                vs - 1m 15s avg
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Audience stays engaged through in-depth 40-minute analytical breakdowns.
            </p>
          </div>

          {/* Card 3: Total Views */}
          <div className="bg-white border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#f59e0b] flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Eye className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div>
              <h3 className="text-lg font-black uppercase text-slate-900">
                Total Views
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                Across All Channels
              </p>
            </div>

            <div className="p-3 bg-white border-2 border-amber-500 shadow-[3px_3px_0px_#f59e0b] rounded-xs">
              <div className="text-3xl font-black text-amber-600 font-mono">
                10M+
              </div>
              <div className="text-xs font-bold text-slate-700">
                Organic Watch Hours
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Watched by C-suite executives, treasury directors, and business owners.
            </p>
          </div>

          {/* Card 4: Community Subscribers */}
          <div className="bg-white border-3 border-slate-900 rounded-sm p-6 shadow-[5px_5px_0px_#000000] flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800">
              <Users className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div>
              <h3 className="text-lg font-black uppercase text-slate-900">
                Subscribers
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                Dedicated Following
              </p>
            </div>

            <div className="p-3 bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#000000] rounded-xs">
              <div className="text-2xl font-black text-slate-950 font-mono">
                326,000+
              </div>
              <div className="text-[10px] font-bold text-slate-600">
                267K YouTube · 40K IG · 19K LI
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Pakistan's fastest-growing serious economic media and learning platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
