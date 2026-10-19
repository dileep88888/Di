import React, { useState } from 'react';
import { X, Trash2, ArrowRight, Tag, ShieldCheck, ShoppingBag } from 'lucide-react';
import { CourseItem } from '../data/coursesData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CourseItem[];
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  appliedDiscount: number;
  onApplyCoupon: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onProceedToCheckout,
  appliedDiscount,
  onApplyCoupon,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ text: string; success: boolean } | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.pricePKR, 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const ok = onApplyCoupon(couponCode.trim());
    if (ok) {
      setCouponMessage({ text: 'Coupon applied successfully!', success: true });
    } else {
      setCouponMessage({ text: 'Invalid coupon code. Try PAKISTAN2026', success: false });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-3 border-slate-900 shadow-2xl flex flex-col justify-between">
          {/* Cart Header */}
          <div className="p-6 border-b-2 border-slate-900 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-black text-slate-900 uppercase">
                Your Learning Cart
              </h3>
              <span className="px-2 py-0.5 bg-amber-300 text-slate-950 font-black text-xs rounded-full border border-slate-900">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-sm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400 border border-slate-300">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-slate-800 uppercase">
                  Your cart is empty
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse our industry reports, webinar recordings, and masterclasses to add to your research library.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase rounded-xs border-2 border-slate-900 shadow-[3px_3px_0px_#f59e0b] cursor-pointer"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white border-2 border-slate-900 rounded-xs shadow-[3px_3px_0px_#000000] flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-block">
                      {item.categoryLabel}
                    </span>
                    <h5 className="text-xs font-black text-slate-900 uppercase leading-snug line-clamp-2">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Instructor: {item.instructor.name} ({item.instructor.company})
                    </p>
                    <div className="text-xs font-black text-emerald-600 font-mono pt-1">
                      {item.pricePKR === 0 ? 'FREE' : `Rs ${item.pricePKR.toLocaleString()}`}
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer: Promo Code + Totals + Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-slate-50 border-t-2 border-slate-900 space-y-4">
              {/* Promo Coupon Input */}
              <form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="Coupon (e.g. PAKISTAN2026)"
                      className="w-full pl-8 pr-3 py-2 text-xs font-bold uppercase bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase rounded-xs border-2 border-slate-900"
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <p className={`text-[10px] font-bold ${couponMessage.success ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {couponMessage.text}
                  </p>
                )}
              </form>

              {/* Price summary */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold">Rs {subtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount ({appliedDiscount}%)</span>
                    <span className="font-mono">-Rs {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-slate-950 pt-2 border-t border-slate-300">
                  <span>Total Payable (PKR)</span>
                  <span className="font-mono text-emerald-600 text-base">
                    Rs {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Security info */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant access · SBP-compliant corporate receipt included</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm tracking-wide rounded-xs border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed To Secure Checkout</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
