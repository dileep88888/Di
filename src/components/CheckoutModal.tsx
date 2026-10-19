import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, CreditCard, Building2, Smartphone, Download, ArrowRight, Shield } from 'lucide-react';
import { CourseItem } from '../data/coursesData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CourseItem[];
  totalPKR: number;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalPKR,
  onClearCart,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    city: 'Karachi',
  });
  const [paymentMethod, setPaymentMethod] = useState<'raast' | 'jazzcash' | 'card'>('raast');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderNumber(`PAC-${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderComplete(true);
      onClearCart();
    }, 1200);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={handleFinish}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white border-3 border-slate-900 rounded-sm shadow-[8px_8px_0px_#000000] overflow-hidden my-8">
          {/* Top modal bar */}
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b-2 border-slate-900">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-400 rotate-45 inline-block" />
              <h3 className="text-lg font-black tracking-wide uppercase">
                {orderComplete ? 'Enrollment Confirmed' : 'Checkout & Instant Access'}
              </h3>
            </div>
            <button
              onClick={handleFinish}
              className="p-1 text-slate-400 hover:text-white rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {orderComplete ? (
            /* Order Success View */
            <div className="p-6 sm:p-8 space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center border-2 border-emerald-500 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Order Ref: {orderNumber}
                </span>
                <h4 className="text-2xl font-black text-slate-950 uppercase">
                  Welcome to DISC Learning!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  A confirmation email with your access credentials and receipt has been dispatched to{' '}
                  <span className="font-bold text-slate-900">{formData.email || 'your email'}</span>.
                </p>
              </div>

              {/* Instant Access Download Cards */}
              <div className="bg-amber-50/70 border-2 border-slate-900 p-5 rounded-xs text-left space-y-3">
                <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider block">
                  Your Included Digital Deliverables
                </span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 bg-white border border-slate-300 rounded text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-600" />
                      Executive Presentation Slides &amp; Value Chain Maps (PDF)
                    </span>
                    <button 
                      onClick={() => alert('Download initiated: Pakistan & Counting Executive PDF Deck')}
                      className="text-xs text-emerald-600 hover:underline font-mono"
                    >
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white border border-slate-300 rounded text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-600" />
                      Dynamic Capex &amp; Sensitivity Financial Model (.xlsx)
                    </span>
                    <button 
                      onClick={() => alert('Download initiated: Financial Feasibility Model (.xlsx)')}
                      className="text-xs text-emerald-600 hover:underline font-mono"
                    >
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white border border-slate-300 rounded text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-600" />
                      Pre-vetted Pakistani Supplier &amp; Cold Storage Directory
                    </span>
                    <button 
                      onClick={() => alert('Download initiated: Supplier & Cold Storage Directory')}
                      className="text-xs text-emerald-600 hover:underline font-mono"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleFinish}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm uppercase rounded-xs border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] cursor-pointer"
                >
                  Return To Research Library
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* Items summary strip */}
              <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-xs space-y-2">
                <span className="text-[10px] font-black uppercase text-slate-500">
                  Enrolling in {cartItems.length} item(s):
                </span>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {cartItems.map((ci) => (
                    <div key={ci.id} className="flex justify-between text-xs">
                      <span className="text-slate-800 font-bold truncate pr-3">{ci.title}</span>
                      <span className="font-mono font-bold text-slate-900 shrink-0">
                        {ci.pricePKR === 0 ? 'FREE' : `Rs ${ci.pricePKR.toLocaleString()}`}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-300 flex justify-between text-sm font-black text-slate-950">
                  <span>Total Due (PKR):</span>
                  <span className="font-mono text-emerald-600 text-base">
                    Rs {totalPKR.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Personal / Company Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  1. Registrant Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Asad Qureshi"
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Corporate or Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300-1234567"
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Company / City
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Karachi / Lahore / Islamabad"
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  2. Select Payment Method
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('raast')}
                    className={`p-3 text-left border-2 rounded-xs transition-all ${
                      paymentMethod === 'raast'
                        ? 'border-emerald-600 bg-emerald-50 shadow-[3px_3px_0px_#10b981]'
                        : 'border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-black text-xs text-slate-900">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      Raast / Meezan
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">Instant Bank IBAN / QR</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('jazzcash')}
                    className={`p-3 text-left border-2 rounded-xs transition-all ${
                      paymentMethod === 'jazzcash'
                        ? 'border-emerald-600 bg-emerald-50 shadow-[3px_3px_0px_#10b981]'
                        : 'border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-black text-xs text-slate-900">
                      <Smartphone className="w-4 h-4 text-orange-600" />
                      JazzCash / EasyPaisa
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">Mobile Wallet Transfer</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 text-left border-2 rounded-xs transition-all ${
                      paymentMethod === 'card'
                        ? 'border-emerald-600 bg-emerald-50 shadow-[3px_3px_0px_#10b981]'
                        : 'border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-black text-xs text-slate-900">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      Debit / Credit Card
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">Visa, Mastercard, PayPak</p>
                  </button>
                </div>

                {/* Account Details Box */}
                {paymentMethod === 'raast' && (
                  <div className="p-3.5 bg-slate-50 border border-slate-300 rounded text-xs space-y-1 font-mono">
                    <p className="font-bold text-slate-900 font-sans">Meezan Bank Limited (Pakistan)</p>
                    <p className="text-slate-700">Account Title: DISC Technology</p>
                    <p className="text-slate-700 font-bold">IBAN: PK55MEZN00010901049281</p>
                    <p className="text-slate-700">Raast ID: 03702265968</p>
                  </div>
                )}

                {paymentMethod === 'jazzcash' && (
                  <div className="p-3.5 bg-orange-50 border border-orange-200 rounded text-xs space-y-1 font-mono">
                    <p className="font-bold text-slate-900 font-sans">JazzCash / EasyPaisa Merchant</p>
                    <p className="text-slate-700">Till / Mobile: 03702265968</p>
                    <p className="text-slate-700">Title: DISC Technology</p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="Card Number (4000 1234 ...)"
                      className="col-span-2 px-3 py-2 bg-white border border-slate-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-3 py-2 bg-white border border-slate-300 rounded"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-3 py-2 bg-white border border-slate-300 rounded"
                    />
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 text-white font-extrabold text-base tracking-wide rounded-xs border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <span>Verifying Transfer &amp; Generating Access...</span>
                  ) : (
                    <>
                      <span>Confirm &amp; Instant Access (Rs {totalPKR.toLocaleString()})</span>
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
