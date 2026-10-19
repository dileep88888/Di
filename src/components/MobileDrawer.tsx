import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPartner: () => void;
  onSelectCategory?: (category: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenPartner,
  onSelectCategory,
}) => {
  const [industryReportsOpen, setIndustryReportsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-2 border-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-xl tracking-tighter text-emerald-600">
                DISC
              </span>
              <span className="font-black text-lg tracking-tight text-slate-800">
                LEARNIN<span className="text-emerald-600">G</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Items (Exact structure from Screenshot 1) */}
          <div className="p-6 space-y-5 flex-1">
            <div>
              <a
                href="#about"
                onClick={onClose}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase"
              >
                About
              </a>
            </div>

            <div>
              <a
                href="#formats"
                onClick={onClose}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase"
              >
                Unlocking Growth
              </a>
            </div>

            {/* Expandable Industry Reports */}
            <div>
              <button
                onClick={() => setIndustryReportsOpen(!industryReportsOpen)}
                className="w-full flex items-center justify-between text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase text-left"
              >
                <span>Industry Reports</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 transition-transform ${
                    industryReportsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {industryReportsOpen && (
                <div className="mt-3 pl-4 space-y-2.5 border-l-2 border-emerald-500 py-1">
                  <a
                    href="#courses"
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory('deck');
                      onClose();
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    All Industry Data Decks
                  </a>
                  <a
                    href="#courses"
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory('webinar_recording');
                      onClose();
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    Agro-Processing &amp; Food Value Chains
                  </a>
                  <a
                    href="#courses"
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory('deck');
                      onClose();
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    Aquaculture &amp; Coastal Blue Economy
                  </a>
                  <a
                    href="#courses"
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory('deck');
                      onClose();
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    Technology &amp; Software Exports
                  </a>
                </div>
              )}
            </div>

            <div>
              <a
                href="#courses"
                onClick={onClose}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase"
              >
                Webinars &amp; Masterclasses
              </a>
            </div>

            <div>
              <a
                href="#feasibility"
                onClick={onClose}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase"
              >
                Feasibility Simulator
              </a>
            </div>

            <div>
              <a
                href="#media"
                onClick={onClose}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase"
              >
                Podcasts
              </a>
            </div>

            <div>
              <a
                href="#formats"
                onClick={onClose}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase"
              >
                Explainers
              </a>
            </div>

            <div>
              <button
                onClick={() => {
                  onClose();
                  onOpenPartner();
                }}
                className="block text-lg font-extrabold tracking-wide text-slate-900 hover:text-emerald-600 transition-colors uppercase text-left"
              >
                Partner With Us
              </button>
            </div>

            {/* Brutalist Contact Us Button (Exact from Screenshot 1) */}
            <div className="pt-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenPartner();
                }}
                className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base tracking-wide rounded-sm border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all text-center"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Details in Drawer Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 text-xs space-y-2 text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <a href="mailto:dileepmaghwar.pk@gmail.com" className="hover:underline">
                dileepmaghwar.pk@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <a href="tel:03702265968" className="hover:underline">
                03702265968
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>DISC Technology · A-1 Falaknaz Arcade, Shahra-e-Faisal 75230 Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
