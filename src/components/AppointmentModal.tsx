'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => { onClose(); setIsSubmitted(false); }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 bg-black/60 backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}>
      <div className={`w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
        <div className="bg-[#f5f1ed] rounded-t-3xl p-6 relative">
          <button onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full transition-colors text-[#70798c] hover:text-[#252323] hover:bg-[#dad2bc]/50"><X size={20} /></button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#14213d]"><Calendar size={24} className="text-white" /></div>
            <div>
              <h2 className="text-xl text-[#252323] font-semibold">Book Appointment</h2>
              <p className="text-sm text-[#70798c]">Schedule a free consultation</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#f5f1ed]"><CheckCircle size={32} className="text-[#14213d]" /></div>
              <h3 className="text-xl font-semibold text-[#252323] mb-2">Request Received!</h3>
              <p className="text-[#70798c] mb-6">We will contact you within 24 hours.</p>
              <button onClick={handleClose} className="px-6 py-3 text-white font-medium transition-colors bg-[#14213d] hover:bg-[#252323] rounded-xl">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-[#252323] mb-1">First name</label><input type="text" required className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition focus:border-[#14213d]" placeholder="John" /></div>
                <div><label className="block text-sm font-medium text-[#252323] mb-1">Last name</label><input type="text" required className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition focus:border-[#14213d]" placeholder="Smith" /></div>
              </div>
              <div><label className="block text-sm font-medium text-[#252323] mb-1">Email</label><input type="email" required className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition focus:border-[#14213d]" placeholder="john@example.com" /></div>
              <div><label className="block text-sm font-medium text-[#252323] mb-1">Phone</label><input type="tel" required className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition focus:border-[#14213d]" placeholder="+31 6 1234 5678" /></div>
              <div><label className="block text-sm font-medium text-[#252323] mb-1">Service</label><select className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition focus:border-[#14213d]"><option value="">Select a service</option><option>Real Estate & Mortgages</option><option>Family & Inheritance Law</option><option>Wills & Estate Planning</option><option>Corporate Law</option><option>Other</option></select></div>
              <div><label className="block text-sm font-medium text-[#252323] mb-1">Preferred date</label><input type="date" className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition focus:border-[#14213d]" /></div>
              <div><label className="block text-sm font-medium text-[#252323] mb-1">Message (optional)</label><textarea rows={3} className="w-full px-4 py-3 border border-[#dad2bc] rounded-xl outline-none transition resize-none focus:border-[#14213d]" placeholder="Tell us about your situation..." /></div>
              <button type="submit" className="w-full py-4 text-white font-medium transition-colors flex items-center justify-center gap-2 bg-[#14213d] hover:bg-[#252323] rounded-xl">Request Appointment <ArrowRight size={18} /></button>
              <p className="text-xs text-center text-[#70798c]"><Clock size={12} className="inline mr-1" />We respond within 24 hours</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
