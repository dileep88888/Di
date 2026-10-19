import React from 'react';
import { Lightbulb, Target, ArrowRight } from 'lucide-react';

interface VisionMissionSectionProps {
  onExploreMore: () => void;
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ onExploreMore }) => {
  return (
    <section id="about" className="bg-graph-paper py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Card 1: OUR VISION (Orange Grid matching Screenshot 7) */}
        <div className="relative rounded-sm border-3 border-slate-900 shadow-[6px_6px_0px_#000000] overflow-hidden">
          <div className="p-8 sm:p-10 bg-grid-orange text-white space-y-4">
            <div className="w-14 h-14 rounded-md bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white stroke-[2.2]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-white">
              Our Vision
            </h3>

            <p className="text-lg sm:text-xl font-medium text-white/95 max-w-xl leading-relaxed">
              To be the trusted lens on Pakistan's economy.
            </p>
          </div>
        </div>

        {/* Card 2: OUR MISSION (Magenta Grid matching Screenshot 7) */}
        <div className="relative rounded-sm border-3 border-slate-900 shadow-[6px_6px_0px_#000000] overflow-hidden">
          <div className="p-8 sm:p-10 bg-grid-magenta text-white space-y-4">
            <div className="w-14 h-14 rounded-md bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center">
              <Target className="w-8 h-8 text-white stroke-[2.2]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-white">
              Our Mission
            </h3>

            <p className="text-lg sm:text-xl font-medium text-white/95 max-w-2xl leading-relaxed">
              We help the people shaping Pakistan's economy understand it through data, context, and the tools to act on both.
            </p>
          </div>
        </div>

        {/* Button: Explore About More (Exact from Screenshot 7) */}
        <div className="pt-2">
          <button
            onClick={onExploreMore}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base tracking-wide rounded-xs border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Explore About More</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};
