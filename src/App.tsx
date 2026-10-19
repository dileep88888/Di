/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HeroSection } from './components/HeroSection';
import { FormatsSection } from './components/FormatsSection';
import { CourseCatalogSection } from './components/CourseCatalogSection';
import { FeasibilityCalculator } from './components/FeasibilityCalculator';
import { VisionMissionSection } from './components/VisionMissionSection';
import { SocialProofSection } from './components/SocialProofSection';
import { PartnershipSection } from './components/PartnershipSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CourseModal } from './components/CourseModal';
import { SearchModal } from './components/SearchModal';
import { PartnerModal } from './components/PartnerModal';
import { Footer } from './components/Footer';
import { CourseItem, COURSES_DATA } from './data/coursesData';
import { Check, X } from 'lucide-react';

export default function App() {
  // Cart state - initialized with 1 item matching screenshot cart badge "1" or "0"
  const [cartItems, setCartItems] = useState<CourseItem[]>([COURSES_DATA[0]]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<CourseItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (course: CourseItem) => {
    if (cartItems.some((item) => item.id === course.id)) {
      showToast(`"${course.title.slice(0, 30)}..." is already in your cart!`);
      setIsCartOpen(true);
      return;
    }
    setCartItems((prev) => [...prev, course]);
    showToast(`Added "${course.title.slice(0, 30)}..." to your cart!`);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'PAKISTAN2026' || clean === 'GROWTH10' || clean === 'STARTUP') {
      setAppliedDiscount(15);
      showToast('15% Pakistani Operator Discount Applied!');
      return true;
    }
    return false;
  };

  const handleSelectFormat = (cat: string) => {
    setSelectedCategory(cat);
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCourseDetails = (course: CourseItem) => {
    setSelectedCourseForModal(course);
  };

  const totalPKR = Math.max(
    0,
    cartItems.reduce((acc, i) => acc + i.pricePKR, 0) * (1 - appliedDiscount / 100)
  );

  return (
    <div className="min-h-screen flex flex-col bg-graph-paper text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xs border-2 border-emerald-400 shadow-[4px_4px_0px_#10b981] flex items-center gap-3 animate-bounce">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs font-bold">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header with Navigation and Cart Counter */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
      />

      {/* Continuous Economic Headlines Marquee */}
      <MarqueeTicker />

      {/* Hero Section with "By The Numbers" & Video Player */}
      <HeroSection
        onExploreClick={() => {
          const el = document.getElementById('courses');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onPartnerClick={() => setIsPartnerOpen(true)}
      />

      {/* Four Formats Section (Unlocking Growth, Industry Reports, Podcasts, Explainers) */}
      <FormatsSection onSelectFormat={handleSelectFormat} />

      {/* Main Course, Webinar & Data Deck Catalog with Laptop Viewer */}
      <CourseCatalogSection
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewCourseDetails}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Interactive Pakistan Feasibility & Capex Simulator */}
      <FeasibilityCalculator onViewCourse={handleViewCourseDetails} />

      {/* Our Vision & Our Mission Cards matching Screenshot 7 */}
      <VisionMissionSection
        onExploreMore={() => {
          const el = document.getElementById('formats');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Real Numbers, Real Engagement Social Proof matching Screenshot 4 */}
      <SocialProofSection />

      {/* Reach The People Driving Pakistan's Economy & Sponsor Logos */}
      <PartnershipSection onPartnerClick={() => setIsPartnerOpen(true)} />

      {/* Footer matching Screenshot 1, 2, 3 */}
      <Footer
        onOpenPartner={() => setIsPartnerOpen(true)}
        onSelectCategory={(cat) => handleSelectFormat(cat)}
      />

      {/* Slide-out Navigation Drawer for Mobile/Desktop */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onSelectCategory={handleSelectFormat}
      />

      {/* Shopping Cart Drawer with Promo Engine */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        appliedDiscount={appliedDiscount}
        onApplyCoupon={handleApplyCoupon}
      />

      {/* Checkout & Instant Access Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalPKR={totalPKR}
        onClearCart={() => setCartItems([])}
      />

      {/* Deep Course & Data Deck Syllabus Details Modal */}
      <CourseModal
        course={selectedCourseForModal}
        isOpen={!!selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleViewCourseDetails}
      />

      {/* Partnership & Contact Us Modal */}
      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </div>
  );
}
