import React from 'react';
import { Search, ShoppingBag, Menu, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenPartner: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMenu,
  onOpenPartner,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-900 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - DISC Learning */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-2xl tracking-tighter text-emerald-600 transition-colors group-hover:text-emerald-500">
                DISC
              </span>
              <div className="flex items-center gap-1">
                <span className="font-black text-xl tracking-tight text-slate-800">
                  LEARNIN<span className="inline-block text-emerald-600 font-extrabold">G</span>
                </span>
                <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-xs rotate-45 ml-0.5" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold tracking-wide uppercase text-slate-700">
            <a 
              href="#formats" 
              className="hover:text-emerald-600 transition-colors py-1 hover:border-b-2 hover:border-emerald-500"
            >
              Unlocking Growth
            </a>
            <a 
              href="#courses" 
              className="hover:text-emerald-600 transition-colors py-1 hover:border-b-2 hover:border-emerald-500"
            >
              Industry Reports
            </a>
            <a 
              href="#courses" 
              className="hover:text-emerald-600 transition-colors py-1 hover:border-b-2 hover:border-emerald-500"
            >
              Webinars &amp; Decks
            </a>
            <a 
              href="#feasibility" 
              className="hover:text-emerald-600 transition-colors py-1 hover:border-b-2 hover:border-emerald-500 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Feasibility Tool
            </a>
            <a 
              href="#media" 
              className="hover:text-emerald-600 transition-colors py-1 hover:border-b-2 hover:border-emerald-500"
            >
              Podcasts
            </a>
            <button 
              onClick={onOpenPartner}
              className="hover:text-emerald-600 transition-colors py-1 hover:border-b-2 hover:border-emerald-500 text-left"
            >
              Partner With Us
            </button>
          </nav>

          {/* Right Action Icons: Search, Cart Badge, Menu Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Search courses, reports, and topics"
              aria-label="Search"
            >
              <Search className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Shopping Cart Button with yellow badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-800 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center"
              title="View Cart"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6 stroke-[2.5]" />
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-900 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-xs tabular-nums">
                {cartCount}
              </span>
            </button>

            {/* Mobile / Hamburger Menu Button (Three green bars) */}
            <button
              onClick={onOpenMenu}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              title="Open Navigation Menu"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-7 h-7 stroke-[2.8]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
