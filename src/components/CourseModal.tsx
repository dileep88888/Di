import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Users, FileSpreadsheet, Download, ShoppingBag, ArrowRight, Star, Layers, ShieldCheck } from 'lucide-react';
import { CourseItem } from '../data/coursesData';

interface CourseModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (course: CourseItem) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'slides' | 'instructor'>('curriculum');

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white border-3 border-slate-900 rounded-sm shadow-[10px_10px_0px_#000000] overflow-hidden my-8">
          {/* Header Bar */}
          <div className="p-6 bg-slate-900 text-white flex items-start justify-between border-b-3 border-slate-900">
            <div className="space-y-2 pr-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-xs">
                  {course.badge}
                </span>
                <span className="text-slate-400 text-xs font-mono">
                  {course.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white leading-tight">
                {course.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded transition-colors shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Top Quick Overview: Price & Action */}
            <div className="p-5 bg-amber-50/70 border-2 border-slate-900 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Registration &amp; Data Deck Fee
                </span>
                <div className="text-3xl font-black text-emerald-600 font-mono">
                  {course.pricePKR === 0 ? 'FREE' : `Rs ${course.pricePKR.toLocaleString()}`}
                  {course.originalPricePKR && (
                    <span className="text-sm font-normal text-slate-400 line-through ml-2">
                      Rs {course.originalPricePKR.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Includes lifetime updates + downloadable Excel financial model (.xlsx)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onAddToCart(course);
                    onClose();
                  }}
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm tracking-wide rounded-xs border-2 border-slate-900 shadow-[3px_3px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Enroll &amp; Access Now
                </button>
              </div>
            </div>

            {/* Key Industry Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {course.keyStats.map((stat, i) => (
                <div key={i} className="p-3 bg-white border-2 border-slate-900 rounded-xs shadow-[2px_2px_0px_#000000]">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">
                    {stat.label}
                  </span>
                  <p className="text-base font-black text-slate-900 font-mono mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                Executive Briefing
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {course.fullDescription}
              </p>
            </div>

            {/* Included Assets / Deliverables Box */}
            <div className="p-5 bg-slate-50 border-2 border-slate-900 rounded-xs space-y-3">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                What's Included In This Data Deck &amp; Course
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {course.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="border-b-2 border-slate-900 flex items-center gap-2">
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`px-4 py-2 text-xs font-black uppercase transition-all ${
                  activeTab === 'curriculum'
                    ? 'border-b-3 border-emerald-600 text-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Curriculum &amp; Breakdown
              </button>
              <button
                onClick={() => setActiveTab('slides')}
                className={`px-4 py-2 text-xs font-black uppercase transition-all ${
                  activeTab === 'slides'
                    ? 'border-b-3 border-emerald-600 text-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Slide Highlights ({course.slides.length})
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`px-4 py-2 text-xs font-black uppercase transition-all ${
                  activeTab === 'instructor'
                    ? 'border-b-3 border-emerald-600 text-emerald-600'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Instructor Bio
              </button>
            </div>

            {/* Tab 1: Curriculum */}
            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                {course.curriculum.map((m, idx) => (
                  <div key={idx} className="border-2 border-slate-200 p-4 rounded-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-slate-900 uppercase">
                        {m.module}
                      </h5>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        {m.duration}
                      </span>
                    </div>
                    <ul className="pl-4 list-disc text-xs text-slate-600 space-y-1">
                      {m.lessons.map((lesson, li) => (
                        <li key={li}>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Slide Highlights */}
            {activeTab === 'slides' && (
              <div className="space-y-4">
                {course.slides.map((s, idx) => (
                  <div key={idx} className="border-2 border-slate-900 p-4 rounded-xs bg-amber-50/40 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                      {s.subtitle}
                    </span>
                    <h5 className="text-sm font-black text-slate-950 uppercase">
                      {s.title}
                    </h5>
                    <p className="text-xs font-bold text-slate-900 bg-white p-2 border border-slate-300 rounded">
                      {s.highlight}
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 pt-1">
                      {s.details.map((d, di) => (
                        <li key={di} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Instructor */}
            {activeTab === 'instructor' && (
              <div className="p-6 bg-slate-50 border-2 border-slate-900 rounded-xs space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white font-black text-xl flex items-center justify-center border-2 border-amber-400">
                    {course.instructor.avatarInitials}
                  </div>
                  <div>
                    <h5 className="text-base font-black text-slate-950 uppercase">
                      {course.instructor.name}
                    </h5>
                    <p className="text-xs font-bold text-emerald-700">
                      {course.instructor.title}, {course.instructor.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {course.instructor.bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
