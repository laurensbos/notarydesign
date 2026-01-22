'use client';

import { Home, Users, FileText, Heart, Building2, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal, useScrollRevealMultiple } from '@/hooks/useScrollReveal';

const services = [
  { icon: Home, title: 'Real Estate & Mortgages', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: Users, title: 'Family & Inheritance Law', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: FileText, title: 'Wills & Estate Planning', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: Heart, title: 'Marriage & Partnerships', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: Building2, title: 'Corporate Law', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: Scale, title: 'Legal Advisory', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { setRef, visibleItems } = useScrollRevealMultiple<HTMLDivElement>(6, { rootMargin: '-50px' });

  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-[#f5f1ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">Our Expertise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight mb-3 sm:mb-4">Tailored Services</h2>
          <p className="text-base sm:text-lg text-[#70798c] max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div key={i} ref={setRef(i)} className={`group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white hover:shadow-xl transition-all duration-500 cursor-pointer ${visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#14213d] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#252323] transition-all">
                <service.icon size={24} className="sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#252323] mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-[#70798c] mb-3 sm:mb-4">{service.description}</p>
              <Link href="#" className="inline-flex items-center gap-2 text-[#14213d] font-medium group-hover:gap-3 transition-all text-sm sm:text-base">Learn more <ArrowRight size={16} /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
