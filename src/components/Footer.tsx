'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

// Mobile accordion section
function MobileAccordion({ 
  title, 
  children, 
  headingColor 
}: { 
  title: string; 
  children: React.ReactNode;
  headingColor: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4"
      >
        <span className={`font-semibold ${headingColor}`}>{title}</span>
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer({ variant = 'modern' }: FooterProps) {
  const styles = {
    modern: {
      bg: 'bg-[#14213d]',
      text: 'text-[#dad2bc]',
      heading: 'text-white',
      accent: 'text-[#f5f1ed]',
      border: 'border-white/10',
      stars: 'text-[#fca311]',
    },
    classic: {
      bg: 'bg-[#000000]',
      text: 'text-[#e5e5e5]/70',
      heading: 'text-white',
      accent: 'text-[#fca311]',
      border: 'border-[#14213d]',
      stars: 'text-[#fca311]',
    },
    minimal: {
      bg: 'bg-[#000000]',
      text: 'text-[#9999a1]',
      heading: 'text-white',
      accent: 'text-[#e6e6e9]',
      border: 'border-[#66666e]/30',
      stars: 'text-[#fca311]',
    },
  };

  const s = styles[variant];

  return (
    <footer className={`${s.bg} ${s.text} pb-24 md:pb-0`}>
      {/* Reviews banner */}
      <div className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
            {/* Trustpilot */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1">
                <div className="bg-[#00b67a] px-2 py-1 rounded">
                  <span className="text-white text-xs sm:text-sm font-bold">★ Trustpilot</span>
                </div>
              </div>
              <div>
                <div className={`${s.stars} text-xs sm:text-sm`}>★★★★★</div>
                <div className="text-xs">4.8/5 · 127 reviews</div>
              </div>
            </div>
            
            {/* Google Reviews */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-base sm:text-lg font-bold text-blue-500">G</span>
                </div>
              </div>
              <div>
                <div className={`${s.stars} text-xs sm:text-sm`}>★★★★★</div>
                <div className="text-xs">4.9/5 · 89 Google reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ MOBILE FOOTER ============ */}
      <div className="md:hidden px-4 py-6">
        {/* Logo & Social */}
        <div className="text-center mb-6">
          <h3 className={`text-xl font-semibold ${s.heading} mb-2`}>
            {variant === 'classic' ? 'Van der Berg & Partners' : variant === 'minimal' ? 'NOTARY' : 'Notary Office'}
          </h3>
          <p className="text-xs leading-relaxed mb-4 max-w-xs mx-auto">
            Your trusted partner for all notary services in Amsterdam and surrounding areas.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${s.heading}`}>
              <Linkedin size={20} />
            </a>
            <a href="#" className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${s.heading}`}>
              <Facebook size={20} />
            </a>
            <a href="#" className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${s.heading}`}>
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a 
            href="tel:+31201234567" 
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition ${s.heading}`}
          >
            <Phone size={18} />
            <span className="text-sm font-medium">Call Us</span>
          </a>
          <a 
            href="mailto:info@notaryoffice.com" 
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition ${s.heading}`}
          >
            <Mail size={18} />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>

        {/* Accordion Sections */}
        <MobileAccordion title="Services" headingColor={s.heading}>
          <ul className="space-y-3 text-sm pl-1">
            <li><Link href="#" className="hover:opacity-80 transition">Real Estate & Mortgages</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Family & Inheritance Law</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Corporate Law</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Marriage & Partnerships</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Wills & Estate Planning</Link></li>
          </ul>
        </MobileAccordion>

        <MobileAccordion title="Quick Links" headingColor={s.heading}>
          <ul className="space-y-3 text-sm pl-1">
            <li><Link href="#" className="hover:opacity-80 transition">About Us</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Our Team</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Articles</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">FAQ</Link></li>
            <li><Link href="#" className="hover:opacity-80 transition">Pricing</Link></li>
          </ul>
        </MobileAccordion>

        <MobileAccordion title="Contact Info" headingColor={s.heading}>
          <ul className="space-y-4 text-sm pl-1">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <span>123 Main Street, Amsterdam</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0" />
              <span>+31 (0)20 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0" />
              <span>info@notaryoffice.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 flex-shrink-0" />
              <span>Mon-Fri: 09:00 - 17:30</span>
            </li>
          </ul>
        </MobileAccordion>

        {/* Mobile Bottom */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <div className="flex justify-center gap-4 mb-3 text-xs">
            <Link href="#" className="hover:opacity-80 transition">Privacy</Link>
            <span className="opacity-30">|</span>
            <Link href="#" className="hover:opacity-80 transition">Terms</Link>
            <span className="opacity-30">|</span>
            <Link href="#" className="hover:opacity-80 transition">Cookies</Link>
          </div>
          <p className="text-xs opacity-60">© 2026 Notary Office. All rights reserved.</p>
        </div>
      </div>

      {/* ============ DESKTOP FOOTER ============ */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className={`text-lg font-semibold ${s.heading} mb-4`}>
                {variant === 'classic' ? 'Van der Berg & Partners' : variant === 'minimal' ? 'NOTARY' : 'Notary Office'}
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className={`text-lg font-semibold ${s.heading} mb-4`}>Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:opacity-80 transition">Real Estate & Mortgages</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Family & Inheritance Law</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Corporate Law</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Marriage & Partnerships</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Wills & Estate Planning</Link></li>
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className={`text-lg font-semibold ${s.heading} mb-4`}>Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:opacity-80 transition">About Us</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Our Team</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Articles</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">FAQ</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition">Pricing</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className={`text-lg font-semibold ${s.heading} mb-4`}>Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>123 Main Street<br />Amsterdam</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+31 (0)20 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@notaryoffice.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Mon-Fri: 09:00 - 17:30<br />Sat: By appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t ${s.border} py-6`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p>© 2026 Notary Office. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:opacity-80 transition">Privacy</Link>
                <Link href="#" className="hover:opacity-80 transition">Terms</Link>
                <Link href="#" className="hover:opacity-80 transition">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
