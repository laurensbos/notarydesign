'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Articles', href: '/articles' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#14213d] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+31201234567" className="flex items-center gap-2 hover:text-[#dad2bc] transition-colors">
              <Phone size={14} />
              <span>+31 (0)20 123 4567</span>
            </a>
            <a href="mailto:info@notaryoffice.com" className="flex items-center gap-2 hover:text-[#dad2bc] transition-colors">
              <Mail size={14} />
              <span>info@notaryoffice.com</span>
            </a>
          </div>
          <div className="text-[#dad2bc] text-xs">Mon-Fri: 09:00 - 17:30</div>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'md:top-0 top-0 bg-white/95 backdrop-blur-xl border-b border-[#dad2bc] shadow-lg' 
            : 'md:top-10 top-0 bg-white/80 backdrop-blur-xl border-b border-[#dad2bc]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="text-[#252323] font-semibold text-lg sm:text-xl tracking-tight">
              Notary Office
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#70798c] hover:text-[#14213d] transition-colors animated-underline"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg btn-shine bg-[#14213d] text-white hover:bg-[#252323]"
              >
                Book Appointment
              </button>
            </nav>

            <button
              className="md:hidden p-2 rounded-lg transition-colors text-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden fixed inset-0 top-[56px] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          <div 
            className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <nav className="flex flex-col p-6">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-4 text-lg font-medium text-[#252323] border-b border-[#f5f1ed] hover:text-[#14213d] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-6 w-full py-4 rounded-xl text-center font-medium transition-colors bg-[#14213d] text-white hover:bg-[#252323]"
              >
                Book Appointment
              </button>
              
              <div className="mt-8 pt-6 border-t border-[#f5f1ed] space-y-4">
                <a href="tel:+31201234567" className="flex items-center gap-3 text-[#70798c] hover:text-[#14213d]">
                  <Phone size={18} />
                  <span>+31 (0)20 123 4567</span>
                </a>
                <a href="mailto:info@notaryoffice.com" className="flex items-center gap-3 text-[#70798c] hover:text-[#14213d]">
                  <Mail size={18} />
                  <span>info@notaryoffice.com</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
