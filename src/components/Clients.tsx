'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2, Landmark, Building, Home, Shield, Briefcase } from 'lucide-react';

interface ClientsProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

// Client data with icons instead of external logos
const clients = [
  { name: 'ABN AMRO', icon: Building2 },
  { name: 'ING Bank', icon: Landmark },
  { name: 'Rabobank', icon: Building },
  { name: 'De Hypotheker', icon: Home },
  { name: 'Nationale Nederlanden', icon: Shield },
  { name: 'Van Lanschot', icon: Briefcase },
];

// Infinite Logo Slider Component
function LogoSlider({ 
  variant,
  isVisible 
}: { 
  variant: 'modern' | 'classic' | 'minimal';
  isVisible: boolean;
}) {
  const bgColor = variant === 'classic' 
    ? 'bg-[#000000]/30' 
    : variant === 'minimal' 
    ? 'bg-white border border-[#e6e6e9]' 
    : 'bg-white/10 backdrop-blur-sm';
  
  const textColor = variant === 'classic' 
    ? 'text-[#e5e5e5]/80' 
    : variant === 'minimal' 
    ? 'text-[#66666e]' 
    : 'text-white/80';

  const hoverColor = variant === 'classic' 
    ? 'group-hover:text-[#fca311]' 
    : variant === 'minimal' 
    ? 'group-hover:text-[#000000]' 
    : 'group-hover:text-white';

  const iconColor = variant === 'classic' 
    ? 'text-[#fca311]' 
    : variant === 'minimal' 
    ? 'text-[#9999a1] group-hover:text-[#000000]' 
    : 'text-[#dad2bc] group-hover:text-white';

  // Double the clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className={`overflow-hidden py-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <div 
        className="flex gap-6 md:gap-8 animate-scroll"
        style={{ width: 'max-content' }}
      >
        {duplicatedClients.map((client, i) => {
          const IconComponent = client.icon;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl ${bgColor} min-w-[180px] md:min-w-[200px] hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <IconComponent size={28} className={`${iconColor} transition-colors`} />
              <span className={`font-medium text-sm md:text-base ${textColor} ${hoverColor} transition-colors`}>
                {client.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Mobile Carousel Component  
function MobileCarousel({ 
  variant,
  isVisible
}: { 
  variant: 'modern' | 'classic' | 'minimal';
  isVisible: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const itemsPerView = 2;
  const totalSlides = Math.ceil(clients.length / itemsPerView);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides, isVisible]);

  // Reset when becoming visible again
  useEffect(() => {
    if (isVisible) {
      setCurrent(0);
    }
  }, [isVisible]);

  const dotColor = variant === 'classic' ? 'bg-[#fca311]' : variant === 'minimal' ? 'bg-[#000000]' : 'bg-white';
  const dotInactiveColor = variant === 'classic' ? 'bg-white/30' : variant === 'minimal' ? 'bg-[#9999a1]' : 'bg-white/30';
  const arrowColor = variant === 'classic' ? 'text-[#fca311]' : variant === 'minimal' ? 'text-[#000000]' : 'text-white';
  const bgColor = variant === 'classic' ? 'bg-[#000000]/30' : variant === 'minimal' ? 'bg-white border border-[#e6e6e9]' : 'bg-white/10 backdrop-blur-sm';
  const iconColor = variant === 'classic' ? 'text-[#fca311]' : variant === 'minimal' ? 'text-[#9999a1]' : 'text-[#dad2bc]';
  const textColor = variant === 'classic' ? 'text-white/70' : variant === 'minimal' ? 'text-[#66666e]' : 'text-white/80';

  return (
    <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Carousel container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-2 gap-3 px-1">
              {clients.slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView).map((client, i) => {
                const IconComponent = client.icon;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl ${bgColor} transition-all duration-500`}
                  >
                    <IconComponent size={32} className={`${iconColor} mb-2`} />
                    <span className={`text-xs text-center ${textColor}`}>
                      {client.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 ${arrowColor}`}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 ${arrowColor}`}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? `${dotColor} w-6` : dotInactiveColor
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Clients({ variant = 'modern' }: ClientsProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  if (variant === 'modern') {
    return (
      <section className="py-16 sm:py-20 md:py-24 bg-[#14213d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={ref}
            className={`text-center mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xs sm:text-sm font-medium text-[#dad2bc] uppercase tracking-widest mb-2">
              Trusted by leading organizations
            </p>
            <h3 className="text-xl sm:text-2xl font-medium text-white">
              Our partners & clients
            </h3>
          </div>

          {/* Mobile: Carousel */}
          <div className="sm:hidden">
            <MobileCarousel variant={variant} isVisible={isVisible} />
          </div>

          {/* Desktop: Infinite Slider */}
          <div className="hidden sm:block">
            <LogoSlider variant={variant} isVisible={isVisible} />
          </div>

          {/* Stats row */}
          <div 
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { value: '500+', label: 'Transactions yearly' },
              { value: '€2.5B', label: 'Property value handled' },
              { value: '98%', label: 'Client satisfaction' },
              { value: '24h', label: 'Average response time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-[#dad2bc] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'classic') {
    return (
      <section className="py-16 sm:py-20 md:py-24 bg-[#14213d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={ref}
            className={`text-center mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="w-12 h-0.5 bg-[#fca311] mx-auto mb-4" />
            <p className="text-xs sm:text-sm font-medium text-[#e5e5e5]/60 uppercase tracking-widest mb-2">
              Trusted Partners
            </p>
            <h3 className="text-lg sm:text-xl font-serif text-white">
              Working with the best
            </h3>
          </div>

          {/* Mobile: Carousel */}
          <div className="sm:hidden">
            <MobileCarousel variant={variant} isVisible={isVisible} />
          </div>

          {/* Desktop: Infinite Slider */}
          <div className="hidden sm:block">
            <LogoSlider variant={variant} isVisible={isVisible} />
          </div>

          {/* Stats row */}
          <div 
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { value: '500+', label: 'Transactions yearly' },
              { value: '€2.5B', label: 'Property value' },
              { value: '98%', label: 'Satisfaction' },
              { value: '24h', label: 'Response time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#fca311]">{stat.value}</p>
                <p className="text-xs sm:text-sm text-[#e5e5e5]/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Minimal - Cool Steel palette
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div>
            <p className="text-xs tracking-widest text-[#9999a1] uppercase mb-2">Partners</p>
            <h3 className="text-xl sm:text-2xl font-light text-[#000000]">
              Trusted by industry leaders
            </h3>
          </div>
          <div className="flex gap-8 sm:gap-12">
            {[
              { value: '500+', label: 'Yearly' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-light text-[#000000]">{stat.value}</p>
                <p className="text-xs text-[#9999a1]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Carousel */}
        <div className="sm:hidden">
          <MobileCarousel variant={variant} isVisible={isVisible} />
        </div>

        {/* Desktop: Infinite Slider */}
        <div className="hidden sm:block">
          <LogoSlider variant={variant} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}
