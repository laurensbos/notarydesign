'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';
import { Building2, Landmark, Building, Home, Shield, Briefcase } from 'lucide-react';

const clients = [
  { name: 'ABN AMRO', icon: Building2 },
  { name: 'ING Bank', icon: Landmark },
  { name: 'Rabobank', icon: Building },
  { name: 'De Hypotheker', icon: Home },
  { name: 'Nationale Nederlanden', icon: Shield },
  { name: 'Van Lanschot', icon: Briefcase },
];

function LogoSlider({ isVisible }: { isVisible: boolean }) {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className={`overflow-hidden py-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="flex gap-6 md:gap-8 animate-scroll" style={{ width: 'max-content' }}>
        {duplicatedClients.map((client, i) => {
          const IconComponent = client.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm min-w-[180px] md:min-w-[200px] hover:scale-105 transition-all duration-300 group cursor-pointer">
              <IconComponent size={28} className="text-[#dad2bc] group-hover:text-white transition-colors" />
              <span className="font-medium text-sm md:text-base text-white/80 group-hover:text-white transition-colors">{client.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileCarousel({ isVisible }: { isVisible: boolean }) {
  const [current, setCurrent] = useState(0);
  const itemsPerView = 2;
  const totalSlides = Math.ceil(clients.length / itemsPerView);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => { setCurrent((prev) => (prev + 1) % totalSlides); }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides, isVisible]);

  return (
    <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-2 gap-3 px-1">
              {clients.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((client, i) => {
                const IconComponent = client.icon;
                return (
                  <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <IconComponent size={20} className="text-[#dad2bc]" />
                    <span className="font-medium text-xs text-white/80">{client.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${current === i ? 'w-6 bg-white' : 'bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-[#14213d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs sm:text-sm font-medium text-[#dad2bc] uppercase tracking-wider">Trusted by</p>
        </div>
        <div className="hidden md:block"><LogoSlider isVisible={isVisible} /></div>
        <div className="md:hidden"><MobileCarousel isVisible={isVisible} /></div>
      </div>
    </section>
  );
}
