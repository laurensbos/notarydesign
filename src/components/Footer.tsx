'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function MobileAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-4">
        <span className="font-semibold text-white">{title}</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#14213d] text-[#dad2bc] pb-24 md:pb-0">
      {/* Reviews banner */}
      <div className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-[#00b67a] px-2 py-1 rounded"><span className="text-white text-xs sm:text-sm font-bold">★ Trustpilot</span></div>
              <div><div className="text-[#fca311] text-xs sm:text-sm">★★★★★</div><div className="text-xs">4.8/5 · 127 reviews</div></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center"><span className="text-base sm:text-lg font-bold text-blue-500">G</span></div>
              <div><div className="text-[#fca311] text-xs sm:text-sm">★★★★★</div><div className="text-xs">4.9/5 · 89 Google reviews</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden px-4 py-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">Notary Office</h3>
          <p className="text-xs leading-relaxed mb-4 max-w-xs mx-auto">Your trusted partner for all notary services in Amsterdam.</p>
          <div className="flex justify-center gap-6">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white"><Icon size={20} /></a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a href="tel:+31201234567" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-white"><Phone size={18} /><span className="text-sm font-medium">Call Us</span></a>
          <a href="mailto:info@notaryoffice.com" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-white"><Mail size={18} /><span className="text-sm font-medium">Email</span></a>
        </div>
        <MobileAccordion title="Services">
          <ul className="space-y-3 text-sm pl-1">
            {['Real Estate & Mortgages', 'Family & Inheritance Law', 'Corporate Law', 'Marriage & Partnerships', 'Wills & Estate Planning'].map((s, i) => (
              <li key={i}><Link href="#" className="hover:opacity-80 transition">{s}</Link></li>
            ))}
          </ul>
        </MobileAccordion>
        <MobileAccordion title="Quick Links">
          <ul className="space-y-3 text-sm pl-1">
            {['About Us', 'Our Team', 'Articles', 'FAQ', 'Pricing'].map((l, i) => (
              <li key={i}><Link href="#" className="hover:opacity-80 transition">{l}</Link></li>
            ))}
          </ul>
        </MobileAccordion>
        <MobileAccordion title="Contact Info">
          <ul className="space-y-4 text-sm pl-1">
            <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 flex-shrink-0" /><span>123 Main Street, Amsterdam</span></li>
            <li className="flex items-center gap-3"><Phone size={18} className="flex-shrink-0" /><span>+31 (0)20 123 4567</span></li>
            <li className="flex items-center gap-3"><Mail size={18} className="flex-shrink-0" /><span>info@notaryoffice.com</span></li>
            <li className="flex items-start gap-3"><Clock size={18} className="mt-0.5 flex-shrink-0" /><span>Mon-Fri: 09:00 - 17:30</span></li>
          </ul>
        </MobileAccordion>
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <div className="flex justify-center gap-4 mb-3 text-xs">
            <Link href="#" className="hover:opacity-80 transition">Privacy</Link><span className="opacity-30">|</span>
            <Link href="#" className="hover:opacity-80 transition">Terms</Link><span className="opacity-30">|</span>
            <Link href="#" className="hover:opacity-80 transition">Cookies</Link>
          </div>
          <p className="text-xs opacity-60">© 2026 Notary Office. All rights reserved.</p>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-1">
              <h3 className="text-xl font-semibold text-white mb-4">Notary Office</h3>
              <p className="text-sm leading-relaxed mb-6">Your trusted partner for all notary services in Amsterdam.</p>
              <div className="flex gap-3">
                {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"><Icon size={18} /></a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                {['Real Estate & Mortgages', 'Family & Inheritance Law', 'Corporate Law', 'Marriage & Partnerships', 'Wills & Estate Planning'].map((s, i) => (
                  <li key={i}><Link href="#" className="hover:text-white transition">{s}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {['About Us', 'Our Team', 'Articles', 'FAQ', 'Pricing'].map((l, i) => (
                  <li key={i}><Link href="#" className="hover:text-white transition">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 flex-shrink-0" /><span>123 Main Street, Amsterdam</span></li>
                <li className="flex items-center gap-3"><Phone size={16} className="flex-shrink-0" /><span>+31 (0)20 123 4567</span></li>
                <li className="flex items-center gap-3"><Mail size={16} className="flex-shrink-0" /><span>info@notaryoffice.com</span></li>
                <li className="flex items-start gap-3"><Clock size={16} className="mt-0.5 flex-shrink-0" /><span>Mon-Fri: 09:00 - 17:30</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 Notary Office. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
