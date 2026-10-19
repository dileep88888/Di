import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen, Video, Calculator, Sparkles } from 'lucide-react';
import { COURSES_DATA, CourseItem } from '../data/coursesData';
import { FEATURED_VIDEOS, FeaturedVideo } from '../data/featuredVideos';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: CourseItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredCourses = COURSES_DATA.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
    c.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredVideos = FEATURED_VIDEOS.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase()) ||
    v.guest.toLowerCase().includes(query.toLowerCase()) ||
    v.organization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:pt-24">
        <div className="relative w-full max-w-2xl bg-white border-3 border-slate-900 rounded-sm shadow-[10px_10px_0px_#000000] overflow-hidden">
          {/* Search Input Bar */}
          <div className="p-4 sm:p-5 border-b-2 border-slate-900 flex items-center gap-3 bg-slate-50">
            <Search className="w-6 h-6 text-emerald-600 stroke-[2.5]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search industries, courses, mango pulping, IT, solar..."
              className="flex-1 bg-transparent text-sm sm:text-base font-bold text-slate-900 focus:outline-none placeholder:text-slate-400"
            />
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-900 rounded"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Suggestions / Results */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Suggested Searches */}
            {!query && (
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Popular Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Mango Pulping', 'Shrimp Aquaculture', 'IT Exports $10B', 'Solar Net Metering', 'Halal Meat Supply Chain', 'Padel Courts'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-bold text-slate-700 rounded-xs border border-slate-300 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Courses / Reports Results */}
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Industry Reports &amp; Masterclasses ({filteredCourses.length})
              </span>
              <div className="space-y-2">
                {filteredCourses.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onSelectCourse(c);
                      onClose();
                    }}
                    className="p-3 bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-600 rounded-xs cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <span className="text-[9px] font-black uppercase text-emerald-600">
                        {c.categoryLabel}
                      </span>
                      <h5 className="text-xs font-black text-slate-900 uppercase group-hover:text-emerald-800">
                        {c.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Instructor: {c.instructor.name} · {c.duration}
                      </p>
                    </div>
                    <span className="text-xs font-black text-slate-900 font-mono shrink-0">
                      {c.pricePKR === 0 ? 'FREE' : `Rs ${c.pricePKR.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Essays Results */}
            {filteredVideos.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  Video Essays &amp; Podcasts ({filteredVideos.length})
                </span>
                <div className="space-y-2">
                  {filteredVideos.map((v) => (
                    <div
                      key={v.id}
                      onClick={onClose}
                      className="p-3 bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-500 rounded-xs transition-colors"
                    >
                      <h5 className="text-xs font-bold text-slate-900">
                        {v.title}
                      </h5>
                      <p className="text-[11px] text-slate-500">
                        {v.guest} · {v.duration} · {v.views} views
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
