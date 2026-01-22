'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'modern' | 'classic' | 'minimal';
}

export default function AppointmentModal({ isOpen, onClose, variant = 'modern' }: AppointmentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  const styles = {
    modern: {
      overlay: 'bg-black/60 backdrop-blur-sm',
      modal: 'bg-white rounded-3xl',
      header: 'bg-neutral-50 rounded-t-3xl',
      title: 'text-neutral-900 font-semibold',
      input: 'rounded-xl border-neutral-200 focus:border-neutral-900 focus:ring-neutral-100',
      button: 'bg-neutral-900 hover:bg-neutral-800 rounded-xl',
      accent: 'text-neutral-900',
    },
    classic: {
      overlay: 'bg-black/70',
      modal: 'bg-white',
      header: 'bg-neutral-900',
      title: 'text-white font-serif',
      input: 'border-neutral-300 focus:border-amber-600',
      button: 'bg-amber-600 hover:bg-amber-700',
      accent: 'text-amber-600',
    },
    minimal: {
      overlay: 'bg-black/50 backdrop-blur-sm',
      modal: 'bg-white',
      header: 'bg-neutral-100',
      title: 'text-neutral-900 font-light tracking-wide',
      input: 'border-neutral-300 focus:border-neutral-900',
      button: 'bg-neutral-900 hover:bg-neutral-800',
      accent: 'text-neutral-600',
    },
  };

  const s = styles[variant];

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${s.overlay} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`w-full max-w-lg ${s.modal} shadow-2xl overflow-hidden transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${s.header} p-6 relative`}>
          <button 
            onClick={handleClose}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${variant === 'classic' ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200'}`}
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variant === 'classic' ? 'bg-amber-600' : 'bg-neutral-900'}`}>
              <Calendar size={24} className="text-white" />
            </div>
            <div>
              <h2 className={`text-xl ${s.title}`}>Book Appointment</h2>
              <p className={`text-sm ${variant === 'classic' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Schedule a free consultation
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 animate-fadeInUp">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${variant === 'classic' ? 'bg-amber-100' : 'bg-neutral-100'}`}>
                <CheckCircle size={32} className={s.accent} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Request Received!</h3>
              <p className="text-neutral-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We&apos;ll contact you within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className={`px-6 py-3 text-white font-medium transition-colors ${s.button}`}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">First name</label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 border outline-none transition ${s.input}`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Last name</label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 border outline-none transition ${s.input}`}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 border outline-none transition ${s.input}`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  className={`w-full px-4 py-3 border outline-none transition ${s.input}`}
                  placeholder="+31 6 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Service</label>
                <select className={`w-full px-4 py-3 border outline-none transition ${s.input}`}>
                  <option value="">Select a service</option>
                  <option>Real Estate & Mortgages</option>
                  <option>Family & Inheritance Law</option>
                  <option>Wills & Estate Planning</option>
                  <option>Corporate Law</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Preferred date</label>
                <div className="relative">
                  <input
                    type="date"
                    className={`w-full px-4 py-3 border outline-none transition ${s.input}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Message (optional)</label>
                <textarea
                  rows={3}
                  className={`w-full px-4 py-3 border outline-none transition resize-none ${s.input}`}
                  placeholder="Tell us about your situation..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 text-white font-medium transition-colors flex items-center justify-center gap-2 ${s.button}`}
              >
                Request Appointment
                <ArrowRight size={18} />
              </button>

              <p className="text-xs text-center text-neutral-500">
                <Clock size={12} className="inline mr-1" />
                We respond within 24 hours
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
