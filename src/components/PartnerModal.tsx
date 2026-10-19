import React, { useState } from 'react';
import { X, CheckCircle2, Send, Handshake, Mail, Phone, MapPin } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    tier: 'Industry Report Sponsorship',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={handleReset}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-white border-3 border-slate-900 rounded-sm shadow-[10px_10px_0px_#000000] overflow-hidden my-8">
          {/* Header Bar */}
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b-2 border-slate-900">
            <div className="flex items-center gap-2">
              <Handshake className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-black uppercase tracking-tight">
                Partner With DISC Learning
              </h3>
            </div>
            <button
              onClick={handleReset}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center border-2 border-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 uppercase">
                Partnership Inquiry Received
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our editorial and commercial partnerships team will contact you within 24 business hours at <span className="font-bold text-slate-900">{formData.email}</span>.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 text-left space-y-1 font-mono">
                <p className="font-bold text-slate-900">DISC Technology</p>
                <p>Direct: dileepmaghwar.pk@gmail.com · 03702265968</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase rounded-xs border-2 border-slate-900 shadow-[3px_3px_0px_#000000]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <p className="text-xs text-slate-600 font-medium">
                Connect your brand with 326K+ corporate operators, C-level executives, and investors shaping Pakistan’s economic future.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Engro, MCB, Tech Startup"
                    className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0321-1234567"
                    className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Partnership Scope
                </label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600 font-medium"
                >
                  <option>Industry Report Sponsorship &amp; Co-Branded Data Deck</option>
                  <option>Documentary Video Essay Feature (Unlocking Growth)</option>
                  <option>Executive Webinar &amp; Masterclass Co-Hosting</option>
                  <option>Podcast Episode Guest &amp; Thought Leadership</option>
                  <option>Custom Economic Feasibility Research Study</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Brief or Campaign Objectives
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand's economic sector or objectives..."
                  className="w-full px-3 py-2 text-xs bg-white border-2 border-slate-900 rounded-xs focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm uppercase rounded-xs border-2 border-slate-900 shadow-[4px_4px_0px_#f59e0b] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
