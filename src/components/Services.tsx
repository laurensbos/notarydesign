'use client';

import { Home, Users, FileText, Heart, Building2, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal, useScrollRevealMultiple } from '@/hooks/useScrollReveal';

interface ServicesProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

const services = [
  {
    icon: Home,
    title: 'Real Estate & Mortgages',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Users,
    title: 'Family & Inheritance Law',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: FileText,
    title: 'Wills & Estate Planning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Heart,
    title: 'Marriage & Partnerships',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Building2,
    title: 'Corporate Law',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Scale,
    title: 'Legal Advisory',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
];

export default function Services({ variant = 'modern' }: ServicesProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { setRef, visibleItems } = useScrollRevealMultiple<HTMLDivElement>(6, { rootMargin: '-50px' });

  if (variant === 'modern') {
    return (
      <section id="services" className="py-16 sm:py-20 md:py-32 bg-[#f5f1ed] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef}
            className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight mb-3 sm:mb-4">
              Tailored Services
            </h2>
            <p className="text-base sm:text-lg text-[#70798c] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                ref={setRef(i)}
                className={`group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white hover:shadow-xl transition-all duration-500 cursor-pointer card-tilt ${visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#14213d] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#252323] transition-all">
                  <service.icon size={24} className="sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#252323] mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-[#70798c] mb-3 sm:mb-4">{service.description}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-[#14213d] font-medium group-hover:gap-3 transition-all animated-underline text-sm sm:text-base">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'classic') {
    return (
      <section id="services" className="py-20 md:py-32 bg-[#e5e5e5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-16 h-1 bg-[#fca311] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#000000] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#14213d] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                ref={setRef(i)}
                className={`group p-8 bg-white border border-[#e5e5e5] hover:border-[#fca311] hover:shadow-lg transition-all duration-500 ${visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#14213d] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <service.icon size={28} className="text-[#fca311]" />
                </div>
                <h3 className="text-xl font-serif text-[#000000] mb-3">{service.title}</h3>
                <p className="text-[#14213d] mb-4">{service.description}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-[#fca311] font-medium hover:gap-3 transition-all">
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Minimal - Cool Steel palette
  return (
    <section id="services" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`grid lg:grid-cols-12 gap-12 mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="lg:col-span-5">
            <p className="text-sm tracking-widest text-[#9999a1] uppercase mb-4">Services</p>
            <h2 className="text-4xl sm:text-5xl font-light text-[#000000] tracking-tight">
              What we can do for you
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-lg text-[#66666e] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e6e6e9]">
          {services.map((service, i) => (
            <div
              key={i}
              ref={setRef(i)}
              className={`group p-8 lg:p-10 bg-white hover:bg-[#f4f4f6] transition-all duration-500 cursor-pointer ${visibleItems[i] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <service.icon size={24} className="text-[#9999a1] mb-6 group-hover:scale-110 group-hover:text-[#000000] transition-all" />
              <h3 className="text-lg font-medium text-[#000000] mb-3">{service.title}</h3>
              <p className="text-[#66666e] text-sm mb-4">{service.description}</p>
              <span className="text-sm text-[#9999a1] group-hover:text-[#000000] transition-colors">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
