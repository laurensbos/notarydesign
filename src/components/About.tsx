'use client';

import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) { setDisplayValue(numericValue); clearInterval(timer); }
      else { setDisplayValue(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return <span>{displayValue}{suffix}</span>;
}

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  
  const features = ['Lorem ipsum dolor sit amet', 'Adipiscing elit sed do', 'Tempor incididunt ut labore', 'Magna aliqua ut enim'];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div ref={imageRef} className={`relative transition-all duration-1000 order-2 lg:order-1 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Modern office" fill className="object-cover" />
            </div>
            <div className={`absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl max-w-[200px] sm:max-w-xs border border-[#dad2bc] ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#f5f1ed] rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Award size={20} className="sm:w-7 sm:h-7 text-[#252323]" />
                </div>
                <div>
                  <p className="font-semibold text-[#252323] text-sm sm:text-base">Fully Certified</p>
                  <p className="text-xs sm:text-sm text-[#70798c]">Since 1998</p>
                </div>
              </div>
            </div>
          </div>
          <div ref={contentRef} className={`transition-all duration-1000 delay-200 order-1 lg:order-2 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight mb-4 sm:mb-6">Why choose our office?</h2>
            <p className="text-base sm:text-lg text-[#70798c] leading-relaxed mb-6 sm:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 text-[#14213d] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#252323]">{feature}</span>
                </li>
              ))}
            </ul>
            <div ref={sectionRef} className="grid grid-cols-3 gap-4 sm:gap-6">
              {[{ icon: Users, value: '5000+', label: 'Clients' }, { icon: Clock, value: '25+', label: 'Years' }, { icon: Award, value: '15', label: 'Experts' }].map((stat, i) => (
                <div key={i} className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <stat.icon size={20} className="sm:w-6 sm:h-6 mx-auto text-[#14213d] mb-1 sm:mb-2" />
                  <p className="text-xl sm:text-2xl font-semibold text-[#14213d]"><AnimatedCounter value={stat.value} isVisible={isVisible} /></p>
                  <p className="text-xs sm:text-sm text-[#70798c]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
