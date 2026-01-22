import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  variant?: 'modern' | 'classic' | 'minimal';
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
    <footer className={`${s.bg} ${s.text} pb-20 md:pb-0`}>
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

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* About */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className={`text-base sm:text-lg font-semibold ${s.heading} mb-3 sm:mb-4`}>
              {variant === 'classic' ? 'Van der Berg & Partners' : variant === 'minimal' ? 'NOTARY' : 'Notary Office'}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed mb-4">
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
    </footer>
  );
}
