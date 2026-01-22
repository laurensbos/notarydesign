'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

interface HeaderProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

export default function Header({ variant = 'modern' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for header transform
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic nav items based on variant
  const getNavItems = () => {
    const base = variant === 'classic' ? '/classic' : variant === 'minimal' ? '/minimal' : '';
    return [
      { label: 'Home', href: base || '/' },
      { label: 'Services', href: `${base}/#services` },
      { label: 'About', href: `${base}/#about` },
      { label: 'Articles', href: `${base}/articles` },
      { label: 'Contact', href: `${base}/#contact` },
    ];
  };

  const navItems = getNavItems();

  const styles = {
    modern: {
      header: isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-[#dad2bc] shadow-lg' 
        : 'bg-white/80 backdrop-blur-xl border-b border-[#dad2bc]/50',
      logo: 'text-[#252323] font-semibold text-lg sm:text-xl tracking-tight',
      nav: 'text-[#70798c] hover:text-[#14213d]',
      cta: 'bg-[#14213d] text-white hover:bg-[#252323]',
    },
    classic: {
      header: isScrolled 
        ? 'bg-[#000000]/95 backdrop-blur-xl border-b border-[#14213d] shadow-lg' 
        : 'bg-[#000000] border-b border-[#14213d]',
      logo: 'text-white font-serif text-lg sm:text-xl tracking-wide',
      nav: 'text-[#e5e5e5] hover:text-[#fca311]',
      cta: 'bg-[#fca311] text-[#000000] hover:bg-[#fca311]/90',
    },
    minimal: {
      header: isScrolled 
        ? 'bg-[#f4f4f6]/95 backdrop-blur-xl border-b border-[#e6e6e9] shadow-lg' 
        : 'bg-[#f4f4f6] border-b border-[#e6e6e9]',
      logo: 'text-[#000000] font-light text-lg sm:text-xl tracking-widest uppercase',
      nav: 'text-[#66666e] hover:text-[#000000]',
      cta: 'bg-[#000000] text-white hover:bg-[#66666e]',
    },
  };

  const s = styles[variant];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${s.header} ${isScrolled ? 'py-0' : ''}`}
      >
        {/* Top bar - hidden when scrolled */}
        <div 
          className={`hidden md:block py-2 text-xs sm:text-sm transition-all duration-300 ${
            variant === 'classic' ? 'bg-[#14213d] text-[#e5e5e5]' : 
            variant === 'minimal' ? 'bg-[#e6e6e9] text-[#66666e]' : 
            'bg-[#f5f1ed] text-[#70798c]'
          } ${isScrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : 'opacity-100'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="tel:+31201234567" className="flex items-center gap-2 hover:opacity-80 transition">
                <Phone size={14} />
                <span className="hidden sm:inline">+31 (0)20 123 4567</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:info@notaryoffice.com" className="flex items-center gap-2 hover:opacity-80 transition">
                <Mail size={14} />
                <span className="hidden sm:inline">info@notaryoffice.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★★★★★</span>
                <span className="hidden sm:inline">4.9/5 on Google</span>
                <span className="sm:hidden">4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 sm:h-16' : 'h-14 sm:h-16 md:h-20'}`}>
            {/* Logo */}
            <Link href="/" className={`${s.logo} transition-transform hover:scale-105`}>
              {variant === 'classic' ? 'Van der Berg & Partners' : variant === 'minimal' ? 'NOTARY' : 'Notary Office'}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-all hover:-translate-y-0.5 animated-underline ${s.nav}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg btn-shine ${s.cta}`}
              >
                Book Appointment
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${variant === 'classic' ? 'text-white' : 'text-slate-800'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - full screen overlay */}
        <div 
          className={`md:hidden fixed inset-0 top-[calc(theme(spacing.10)+56px)] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu content */}
          <div 
            className={`relative ${
              variant === 'classic' ? 'bg-neutral-900' : 
              variant === 'minimal' ? 'bg-neutral-50' : 
              'bg-white'
            } shadow-2xl mx-4 mt-2 rounded-2xl overflow-hidden transform transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
            }`}
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all hover:bg-slate-100 ${s.nav}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className={`mt-4 px-5 py-4 rounded-xl text-center text-base font-medium transition-all ${s.cta}`}
              >
                Book Appointment
              </button>
            </nav>
          </div>
        </div>
      </header>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        variant={variant}
      />
    </>
  );
}
