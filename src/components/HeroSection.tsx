import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, ListVideo, ExternalLink, Sparkles } from 'lucide-react';
import { FEATURED_VIDEOS, FeaturedVideo } from '../data/featuredVideos';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPartnerClick: () => void;
  onSelectVideo?: (video: FeaturedVideo) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onPartnerClick,
}) => {
  const [activeVideo, setActiveVideo] = useState<FeaturedVideo>(FEATURED_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(24);
  const [showChapters, setShowChapters] = useState<boolean>(false);

  // Simulated progress timer when playing
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative bg-graph-paper pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Over-title */}
        <p className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase">
          Pakistan's Economy,
        </p>

        {/* Boxed Headline - Exact screenshot styling */}
        <div className="inline-block relative">
          <div className="bg-white border-3 border-slate-900 px-6 sm:px-10 py-3 sm:py-4 shadow-[6px_6px_0px_#f59e0b] sm:shadow-[8px_8px_0px_#f59e0b]">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase">
              By The Numbers
            </h1>
          </div>
        </div>

        {/* Sub-copy */}
        <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
          The stories, data, and decisions shaping where Pakistan's economy goes next.
        </p>

        {/* Action Buttons with Neo-Brutalist Shadows */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreClick}
            className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base tracking-wide border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            Explore Our Work
          </button>
          <button
            onClick={onPartnerClick}
            className="px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-base tracking-wide border-2 border-slate-900 shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            Partner With Us
          </button>
        </div>

        {/* Featured Video Player Box (Exact layout matching Screenshot 2) */}
        <div className="pt-8 max-w-4xl mx-auto">
          <div className="relative bg-slate-900 border-3 border-slate-900 rounded-sm shadow-[8px_8px_0px_#000000] overflow-hidden text-left">
            {/* Top Video Header */}
            <div className="bg-slate-950/80 p-4 sm:p-5 flex items-start justify-between border-b border-slate-800 backdrop-blur-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 border border-emerald-400 text-slate-950 font-black text-xl flex items-center justify-center shrink-0">
                  &amp;
                </div>
                <div>
                  <h2 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-1">
                    {activeVideo.title}
                  </h2>
                  <p className="text-emerald-400 text-xs font-semibold">
                    DISC Learning · {activeVideo.guest} ({activeVideo.organization})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowChapters(!showChapters)}
                  className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-xs flex items-center gap-1.5 transition-colors"
                >
                  <ListVideo className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Chapters</span>
                </button>
              </div>
            </div>

            {/* Video Canvas / Visual Stage */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
              {/* Grid backdrop effect */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Graphic Interview Visual overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-4">
                <div className="relative p-3 bg-slate-900/90 border-2 border-emerald-500/40 rounded-lg max-w-md shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-md border-2 border-slate-700 flex items-center justify-center text-white font-black text-xl shrink-0 shadow-inner">
                      {activeVideo.guest.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider rounded-xs mb-1">
                        {activeVideo.badge}
                      </span>
                      <p className="text-white font-bold text-sm sm:text-base leading-tight">
                        {activeVideo.guest}
                      </p>
                      <p className="text-slate-400 text-xs">
                        {activeVideo.organization}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Insight Quote / Stat */}
                <div className="bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded text-xs text-slate-300 max-w-lg hidden sm:block">
                  <span className="text-amber-400 font-bold">Key Insight: </span>
                  {activeVideo.keyTakeaways[0]}
                </div>
              </div>

              {/* Center Playback Controls Overlay (Exact style from screenshot 2) */}
              <div className="relative z-20 flex items-center justify-center gap-6 sm:gap-8 my-auto">
                <button
                  onClick={() => setProgress((p) => Math.max(0, p - 5))}
                  className="w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-transform active:scale-90"
                  title="Rewind 10s"
                >
                  <RotateCcw className="w-5 h-5 text-slate-300" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 border-3 border-slate-900 text-slate-950 flex items-center justify-center shadow-[4px_4px_0px_#f59e0b] transition-transform active:scale-95"
                  title={isPlaying ? 'Pause' : 'Play Video'}
                >
                  {isPlaying ? (
                    <Pause className="w-9 h-9 fill-slate-950" />
                  ) : (
                    <Play className="w-9 h-9 fill-slate-950 ml-1" />
                  )}
                </button>

                <button
                  onClick={() => setProgress((p) => Math.min(100, p + 5))}
                  className="w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-transform active:scale-90"
                  title="Fast Forward 10s"
                >
                  <RotateCw className="w-5 h-5 text-slate-300" />
                </button>
              </div>

              {/* Bottom Video Controls & Tap for Sound Button */}
              <div className="relative z-20 space-y-2 pt-4">
                {/* Progress bar */}
                <div 
                  className="w-full bg-slate-800 h-2 rounded-full cursor-pointer relative overflow-hidden border border-slate-700"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress((clickX / rect.width) * 100);
                  }}
                >
                  <div 
                    className="bg-emerald-400 h-full transition-all duration-300 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-emerald-400 font-bold">
                      {Math.floor((progress / 100) * 42)}:
                      {String(Math.floor(((progress / 100) * 42 * 60) % 60)).padStart(2, '0')} / {activeVideo.duration}
                    </span>
                    <span className="text-slate-500 hidden sm:inline">·</span>
                    <span className="text-slate-400 hidden sm:inline">{activeVideo.views} views</span>
                  </div>

                  {/* Tap For Sound Button (Exact element from Screenshot 2) */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="px-3 py-1.5 bg-slate-950/90 hover:bg-slate-900 border border-slate-700 text-white text-xs font-bold rounded-sm flex items-center gap-2 transition-all active:scale-95"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-rose-400" />
                        <span>TAP FOR SOUND</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                        <span>SOUND ON</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Chapters Drawer */}
            {showChapters && (
              <div className="bg-slate-950 p-4 border-t border-slate-800 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Video Chapters
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeVideo.chapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setProgress((idx / activeVideo.chapters.length) * 100);
                        setIsPlaying(true);
                      }}
                      className="text-left p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded flex items-center gap-2 border border-slate-800"
                    >
                      <span className="font-mono text-emerald-400 font-bold shrink-0">{ch.time}</span>
                      <span className="truncate">{ch.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Video Selector Strip */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-2 overflow-x-auto">
              <span className="text-xs font-bold text-slate-400 whitespace-nowrap px-2">
                More Episodes:
              </span>
              <div className="flex items-center gap-2">
                {FEATURED_VIDEOS.map((vid) => (
                  <button
                    key={vid.id}
                    onClick={() => {
                      setActiveVideo(vid);
                      setProgress(0);
                      setIsPlaying(true);
                    }}
                    className={`px-3 py-1.5 text-xs font-bold rounded whitespace-nowrap transition-all border ${
                      activeVideo.id === vid.id
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {vid.title.split(' ')[0]} {vid.title.split(' ')[1]}...
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stripe Accent Color Ribbon (From screenshot 2 bottom) */}
        <div className="pt-6">
          <div className="grid grid-cols-4 h-2.5 w-full max-w-4xl mx-auto border-2 border-slate-900">
            <div className="bg-emerald-500" />
            <div className="bg-amber-400" />
            <div className="bg-orange-500" />
            <div className="bg-rose-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
