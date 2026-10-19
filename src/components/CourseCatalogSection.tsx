import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Users, 
  Star, 
  ShoppingBag, 
  ArrowRight,
  Filter,
  Layers,
  Download
} from 'lucide-react';
import { CourseItem, COURSES_DATA } from '../data/coursesData';

interface CourseCatalogSectionProps {
  onAddToCart: (course: CourseItem) => void;
  onViewDetails: (course: CourseItem) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const CourseCatalogSection: React.FC<CourseCatalogSectionProps> = ({
  onAddToCart,
  onViewDetails,
  selectedCategory,
  onSelectCategory,
}) => {
  // Active featured course for the laptop viewer (defaults to mango-pulping from Screenshot 9)
  const [featuredCourse, setFeaturedCourse] = useState<CourseItem>(COURSES_DATA[0]);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'ALL INSIGHTS' },
    { id: 'deck', label: 'INDUSTRY DATA DECKS' },
    { id: 'webinar_recording', label: 'WEBINAR RECORDINGS' },
    { id: 'upcoming_webinar', label: 'UPCOMING WEBINARS' },
    { id: 'masterclass', label: 'EXECUTIVE MASTERCLASSES' },
  ];

  // Filter courses
  const filteredCourses = COURSES_DATA.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % featuredCourse.slides.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + featuredCourse.slides.length) % featuredCourse.slides.length);
  };

  return (
    <section id="courses" className="bg-graph-paper py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header - Exact text from Screenshot 6 & 9 */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase">
            Data &amp; Insights, On Demand
          </p>

          {/* Neo-brutalist Category Filter Tabs matching Screenshot 9 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black tracking-wide uppercase border-2 border-slate-900 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-white shadow-[4px_4px_0px_#f59e0b] translate-x-0.5 translate-y-0.5'
                      : 'bg-white text-slate-800 hover:bg-slate-50 shadow-[4px_4px_0px_#10b981]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Showcase with Interactive Laptop Deck Viewer (Exact from Screenshot 9) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-base font-extrabold tracking-wider text-emerald-600 uppercase">
            Access Now
          </p>

          {/* Realistic Laptop Bezel Container */}
          <div className="relative mx-auto max-w-3xl">
            {/* Laptop Body Top */}
            <div className="relative bg-slate-900 rounded-t-2xl p-3 sm:p-5 pb-3 border-4 border-slate-900 shadow-2xl">
              {/* Laptop Web Camera dot */}
              <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto mb-2" />

              {/* Laptop Screen Content - Slide Deck Presentation Visual */}
              <div className="relative aspect-[16/10] bg-slate-50 rounded-sm border-2 border-slate-800 overflow-hidden shadow-inner text-left flex flex-col justify-between">
                {/* Deck Presentation Top Bar */}
                <div className="bg-amber-100/90 border-b-2 border-amber-300 px-4 py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-xs rotate-45" />
                    <span className="font-extrabold tracking-tight text-slate-900 uppercase">
                      DISC Learning Research
                    </span>
                  </div>
                  <span className="bg-white border border-slate-900 px-2 py-0.5 text-[10px] font-black text-slate-900 rounded-xs uppercase">
                    {featuredCourse.badge}
                  </span>
                </div>

                {/* Live Interactive Slide Content */}
                <div className="p-4 sm:p-8 flex-1 flex flex-col justify-between bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40">
                  <div className="space-y-2">
                    <p className="text-[11px] sm:text-xs font-bold text-emerald-700 tracking-wider uppercase">
                      {featuredCourse.slides[activeSlideIndex]?.subtitle || 'Strategic Briefing'}
                    </p>
                    <h4 className="text-base sm:text-2xl font-black text-slate-950 uppercase leading-snug">
                      {featuredCourse.slides[activeSlideIndex]?.title || featuredCourse.title}
                    </h4>

                    {/* Stat callout inside presentation */}
                    <div className="p-3 bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#f59e0b] rounded-xs mt-3">
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                        {featuredCourse.slides[activeSlideIndex]?.highlight || featuredCourse.shortDescription}
                      </p>
                    </div>

                    {/* Bullet points on slide */}
                    <div className="pt-2 space-y-1.5 hidden sm:block">
                      {featuredCourse.slides[activeSlideIndex]?.details.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="text-emerald-600 font-bold">✔</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Speaker & Instructors signature block */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center border-2 border-amber-400">
                        {featuredCourse.instructor.avatarInitials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-none">
                          {featuredCourse.instructor.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {featuredCourse.instructor.title}, {featuredCourse.instructor.company}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        Slide {activeSlideIndex + 1} of {featuredCourse.slides.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Slide Navigation Overlay Controls on Screen (Arrows matching Screenshot 9) */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 hover:bg-white border-2 border-slate-900 shadow-sm rounded-xs flex items-center justify-center text-slate-900 transition-transform active:scale-95"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[3]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 hover:bg-white border-2 border-slate-900 shadow-sm rounded-xs flex items-center justify-center text-slate-900 transition-transform active:scale-95"
                  title="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Laptop Base Stand */}
            <div className="relative mx-auto bg-slate-300 h-3 sm:h-4 w-[104%] -left-[2%] rounded-b-xl border-t border-slate-400 shadow-lg flex items-center justify-center">
              <div className="w-16 h-1 bg-slate-400 rounded-full" />
            </div>

            {/* Slide Indicator Dots (Exact from Screenshot 9 with active orange bar) */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {featuredCourse.slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`h-2 transition-all rounded-xs cursor-pointer ${
                    activeSlideIndex === idx
                      ? 'w-8 bg-orange-500'
                      : 'w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Pricing & Course Callout Details (Exact from Screenshot 9) */}
          <div className="space-y-4 pt-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 tabular-nums">
              {featuredCourse.pricePKR === 0 ? 'FREE' : `Rs ${featuredCourse.pricePKR.toLocaleString()}`}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight max-w-2xl mx-auto">
              {featuredCourse.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
              {featuredCourse.shortDescription}
            </p>

            {/* Add To Cart & View Details Action Buttons (Exact styling from Screenshot 9) */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onAddToCart(featuredCourse)}
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-base tracking-wide border-2 border-slate-900 shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                Add To Cart
              </button>

              <button
                onClick={() => onViewDetails(featuredCourse)}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-base tracking-wide border-2 border-slate-900 shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                View Details
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

        {/* Complete Catalog Grid of All Industry Decks & Courses */}
        <div className="pt-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-900 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase">
                Explore Full Research &amp; Course Library
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Showing {filteredCourses.length} industry reports and educational masterclasses
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sectors, agro, tech..."
                className="w-full pl-3 pr-8 py-2 text-xs font-semibold bg-white border-2 border-slate-900 shadow-[2px_2px_0px_#000000] rounded-xs focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-3 border-slate-900 rounded-sm shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#10b981] hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Banner */}
                <div className="p-5 bg-slate-50 border-b-2 border-slate-900 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xs">
                      {course.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
                    </span>
                  </div>

                  <h4 
                    onClick={() => {
                      setFeaturedCourse(course);
                      setActiveSlideIndex(0);
                    }}
                    className="text-lg font-black text-slate-900 leading-snug uppercase group-hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    {course.title}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium line-clamp-2">
                    {course.shortDescription}
                  </p>
                </div>

                {/* Key Metrics strip */}
                <div className="p-4 bg-amber-50/40 border-b border-slate-200 grid grid-cols-2 gap-2 text-xs">
                  {course.keyStats.slice(0, 2).map((st, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">
                        {st.label}
                      </span>
                      <span className="text-xs font-black text-slate-900">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Instructor + Price + Action Buttons */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center border border-amber-400 shrink-0">
                      {course.instructor.avatarInitials}
                    </div>
                    <div className="text-xs truncate">
                      <p className="font-bold text-slate-900 truncate">
                        {course.instructor.name}
                      </p>
                      <p className="text-slate-500 text-[10px] truncate">
                        {course.instructor.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">ACCESS FEE</span>
                      <span className="text-lg font-black text-emerald-600 tabular-nums">
                        {course.pricePKR === 0 ? 'FREE' : `Rs ${course.pricePKR.toLocaleString()}`}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onViewDetails(course)}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold border border-slate-900 rounded-xs transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onAddToCart(course)}
                        className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold border-2 border-slate-900 shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 rounded-xs transition-all flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
