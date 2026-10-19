import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, ShieldCheck, ArrowRight, PieChart } from 'lucide-react';
import { SECTOR_FEASIBILITIES, SectorFeasibility } from '../data/feasibilityData';
import { CourseItem, COURSES_DATA } from '../data/coursesData';

interface FeasibilityCalculatorProps {
  onViewCourse: (course: CourseItem) => void;
}

export const FeasibilityCalculator: React.FC<FeasibilityCalculatorProps> = ({
  onViewCourse,
}) => {
  const [selectedSector, setSelectedSector] = useState<SectorFeasibility>(SECTOR_FEASIBILITIES[0]);
  const [capexPKR, setCapexPKR] = useState<number>(SECTOR_FEASIBILITIES[0].defaultCapexPKR);
  const [exportRatio, setExportRatio] = useState<number>(SECTOR_FEASIBILITIES[0].defaultExportRatio * 100);

  // Calculations
  const annualRevenue = capexPKR * selectedSector.annualRevenueMultiplier;
  const avgMargin = (selectedSector.netMarginMin + selectedSector.netMarginMax) / 2;
  const annualNetProfit = annualRevenue * (avgMargin / 100);
  const paybackYears = (capexPKR / Math.max(1, annualNetProfit)).toFixed(1);
  const usdPkrRate = 278; // Current benchmark PKR/USD
  const annualExportUsd = ((annualRevenue * (exportRatio / 100)) / usdPkrRate) * 1000000;

  const handleSelectSector = (sector: SectorFeasibility) => {
    setSelectedSector(sector);
    setCapexPKR(sector.defaultCapexPKR);
    setExportRatio(sector.defaultExportRatio * 100);
  };

  const relatedCourse = COURSES_DATA.find((c) => c.id === selectedSector.courseId) || COURSES_DATA[0];

  return (
    <section id="feasibility" className="bg-graph-paper py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-black tracking-widest text-emerald-700 uppercase">
            Interactive Learning Tool
          </p>

          <div className="inline-block relative">
            <div className="bg-white border-3 border-slate-900 px-6 sm:px-8 py-2.5 shadow-[6px_6px_0px_#f59e0b]">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase flex items-center justify-center gap-2">
                <Calculator className="w-6 h-6 text-emerald-600" />
                Pakistan Industry Capex &amp; Feasibility Simulator
              </h2>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Test business viability, payback horizons, regulatory clearances, and export potential across Pakistan’s fastest-growing industries.
          </p>
        </div>

        {/* Sector Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {SECTOR_FEASIBILITIES.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleSelectSector(sec)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-black rounded-xs border-2 border-slate-900 transition-all flex items-center gap-2 ${
                selectedSector.id === sec.id
                  ? 'bg-slate-900 text-white shadow-[4px_4px_0px_#10b981] translate-x-0.5 translate-y-0.5'
                  : 'bg-white text-slate-800 hover:bg-slate-100 shadow-[3px_3px_0px_#000000]'
              }`}
            >
              <span className="text-base">{sec.icon}</span>
              <span>{sec.name}</span>
            </button>
          ))}
        </div>

        {/* Two-Column Simulation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Parameters (5 cols) */}
          <div className="lg:col-span-5 bg-white border-3 border-slate-900 rounded-sm p-6 shadow-[6px_6px_0px_#000000] space-y-6">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
                Setup Parameters
              </span>
              <h3 className="text-xl font-black text-slate-950 uppercase">
                {selectedSector.name}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {selectedSector.summary}
              </p>
            </div>

            {/* Slider 1: Total Initial Capex */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                <span>Initial Capital Expenditure (Capex)</span>
                <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                  Rs {capexPKR} Million
                </span>
              </div>
              <input
                type="range"
                min={selectedSector.minCapexPKR}
                max={selectedSector.maxCapexPKR}
                step={5}
                value={capexPKR}
                onChange={(e) => setCapexPKR(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Min: Rs {selectedSector.minCapexPKR}M</span>
                <span>Max: Rs {selectedSector.maxCapexPKR}M</span>
              </div>
            </div>

            {/* Slider 2: Target Export vs Domestic Sales */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                <span>Target Export Share vs Domestic</span>
                <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                  {exportRatio}% Export
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={exportRatio}
                onChange={(e) => setExportRatio(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0% Domestic Market</span>
                <span>100% Global Offtake</span>
              </div>
            </div>

            {/* Cost Allocation Breakdown */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <PieChart className="w-3.5 h-3.5 text-emerald-600" />
                Key Operating Cost Components:
              </span>
              <div className="space-y-1.5">
                {selectedSector.keyCosts.map((c, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 truncate pr-2">{c.item}</span>
                    <span className="font-mono font-bold text-slate-900 shrink-0">{c.sharePercent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Projections & Output Deck (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 4 Reactive Output Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_#10b981] rounded-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Projected Annual Revenue
                </span>
                <p className="text-xl sm:text-2xl font-black text-slate-950 font-mono tabular-nums">
                  Rs {annualRevenue.toFixed(1)}M
                </p>
                <span className="text-[10px] text-emerald-700 font-bold block">
                  {selectedSector.annualRevenueMultiplier}x Capex Turns
                </span>
              </div>

              <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_#f59e0b] rounded-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Estimated Net Operating Profit
                </span>
                <p className="text-xl sm:text-2xl font-black text-emerald-700 font-mono tabular-nums">
                  Rs {annualNetProfit.toFixed(1)}M
                </p>
                <span className="text-[10px] text-slate-600 font-bold block">
                  Net Margin: ~{avgMargin}%
                </span>
              </div>

              <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_#f97316] rounded-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Estimated Payback Horizon
                </span>
                <p className="text-xl sm:text-2xl font-black text-orange-600 font-mono tabular-nums">
                  {paybackYears} Years
                </p>
                <span className="text-[10px] text-slate-500 block font-medium">
                  At full seasonal capacity
                </span>
              </div>

              <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_#000000] rounded-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  FX Dollar Generation
                </span>
                <p className="text-xl sm:text-2xl font-black text-slate-900 font-mono tabular-nums">
                  ${(annualExportUsd / 1000000).toFixed(2)}M / yr
                </p>
                <span className="text-[10px] text-emerald-600 font-bold block">
                  Net Inflow to SBP reserves
                </span>
              </div>
            </div>

            {/* Regulatory & Clearances Accordion Box */}
            <div className="bg-white border-3 border-slate-900 p-5 rounded-xs shadow-[5px_5px_0px_#000000] space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  Mandatory Pakistani Regulatory Clearances &amp; Approvals
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedSector.regulatoryBodies.map((reg, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xs"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Connect to Deep Course / Data Deck */}
            <div className="bg-amber-100 border-3 border-slate-900 p-5 rounded-xs shadow-[5px_5px_0px_#f59e0b] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider">
                  Recommended Masterclass &amp; Financial Deck
                </span>
                <h4 className="text-base font-black text-slate-950 uppercase leading-snug">
                  {relatedCourse.title}
                </h4>
                <p className="text-xs text-slate-700 mt-0.5">
                  Includes full downloadable financial sensitivity Excel model (.xlsx) and vendor directory.
                </p>
              </div>

              <button
                onClick={() => onViewCourse(relatedCourse)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wide rounded-xs border-2 border-slate-900 shadow-[3px_3px_0px_#059669] shrink-0 flex items-center gap-2 transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Study Full Deck</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
