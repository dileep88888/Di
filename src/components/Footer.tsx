import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPartner: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartner, onSelectCategory }) => {
  return (
    <footer className="bg-white border-t-3 border-slate-900 bg-graph-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Brand Header & Social Channels matching Screenshot 3 */}
        <div className="space-y-6">
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tighter text-emerald-600">
              DISC
            </span>
            <div className="flex items-center gap-1">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-800">
                LEARNIN<span className="text-emerald-600">G</span>
              </span>
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-xs rotate-45 ml-1" />
            </div>
          </div>

          {/* Social Icons Strip (Exact sequence and neo-brutalist boxes from Screenshot 3) */}
          <div className="space-y-3">
            <p className="text-xs font-black tracking-widest text-slate-900 uppercase">
              Follow Us On:
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923702265968"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#10b981] flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all font-bold"
                title="WhatsApp"
              >
                WA
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@pakistanandcounting"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#ef4444] flex items-center justify-center text-red-600 hover:bg-red-50 transition-all font-bold"
                title="YouTube"
              >
                YT
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/pakistanandcounting"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#ec4899] flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-all font-bold"
                title="Instagram"
              >
                IG
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/pakistanandcounting"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#3b82f6] flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all font-bold"
                title="Facebook"
              >
                FB
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/pakistanandcounting"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#0284c7] flex items-center justify-center text-sky-700 hover:bg-sky-50 transition-all font-bold"
                title="LinkedIn"
              >
                IN
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/pakandcounting"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#000000] flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-all font-bold"
                title="X / Twitter"
              >
                X
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@pakistanandcounting"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#06b6d4] flex items-center justify-center text-slate-900 hover:bg-cyan-50 transition-all font-bold"
                title="TikTok"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        {/* 4 Link Columns matching Screenshots 1, 2, 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t-2 border-slate-900">
          {/* Column 1: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-emerald-600 uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm font-bold text-slate-700">
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600 transition-colors">
                  Mission &amp; Impact
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-emerald-600 transition-colors">
                  Meet The Team
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenPartner} 
                  className="hover:text-emerald-600 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-emerald-600 uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-bold text-slate-700">
              <li>
                <a href="#formats" className="hover:text-emerald-600 transition-colors">
                  Unlocking Growth
                </a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  onClick={() => onSelectCategory && onSelectCategory('deck')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Industry Reports
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-emerald-600 transition-colors">
                  Special Pods
                </a>
              </li>
              <li>
                <a href="#formats" className="hover:text-emerald-600 transition-colors">
                  Explainers
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenPartner} 
                  className="hover:text-emerald-600 transition-colors text-left"
                >
                  Partner with us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: LEGAL */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-emerald-600 uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm font-bold text-slate-700">
              <li>
                <a href="#faq" className="hover:text-emerald-600 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-emerald-600 transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-emerald-600 transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-emerald-600 uppercase">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:dileepmaghwar.pk@gmail.com" className="hover:text-emerald-600 hover:underline">
                  dileepmaghwar.pk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:03702265968" className="hover:text-emerald-600">
                  03702265968
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  DISC Technology · A-1 Falaknaz Arcade, Shahra-e-Faisal 75230 Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
          &copy; Copyright <span className="font-bold text-slate-800">DISC Technology</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
