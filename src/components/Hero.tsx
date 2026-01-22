import { Star, ArrowRight, CheckCircle, Shield, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

export default function Hero({ variant = 'modern' }: HeroProps) {
  if (variant === 'modern') {
    return (
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#f5f1ed] overflow-hidden">
        {/* Background decoration - Earthy Tones */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#dad2bc] rounded-full blur-3xl opacity-40 animate-float-slow" />
          <div className="absolute -bottom-40 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#a99985]/30 rounded-full blur-3xl opacity-50 animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#dad2bc]/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="animate-fadeInUp order-2 lg:order-1">
              {/* Reviews badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#dad2bc] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} className="sm:w-3.5 sm:h-3.5 text-[#fca311] fill-[#fca311]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-[#70798c]">4.9/5 from 200+ clients</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#252323] tracking-tight leading-tight mb-4 sm:mb-6">
                Legal certainty for your{' '}
                <span className="text-[#14213d]">
                  important moments
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#70798c] leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#14213d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-[#252323] transition-all hover:gap-3 btn-shine text-sm sm:text-base"
                >
                  Free Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#14213d] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium border border-[#14213d]/20 hover:border-[#14213d] hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  Our Services
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {[
                  { icon: CheckCircle, text: 'Independent' },
                  { icon: Shield, text: 'Certified' },
                  { icon: Clock, text: '24h Response' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[#70798c] opacity-0 animate-fadeInUp icon-bounce"
                    style={{ animationDelay: `${0.5 + i * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <item.icon size={16} className="sm:w-[18px] sm:h-[18px] text-[#14213d] flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image - Hidden on mobile */}
            <div className="relative animate-fadeInUp stagger-2 order-1 lg:order-2 hidden md:block">
              <div className="relative rounded-2xl sm:rounded-3xl aspect-[4/3] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Professional notary signing documents"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-[#dad2bc] animate-float hover-lift">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14213d] rounded-full flex items-center justify-center animate-pulse-glow">
                    <CheckCircle size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#252323] text-sm sm:text-base">25+ years experience</p>
                    <p className="text-xs sm:text-sm text-[#70798c]">Trusted & reliable</p>
                  </div>
                </div>
              </div>

              {/* Extra floating element */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-[#dad2bc] animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-2">
                  <Users size={16} className="sm:w-[18px] sm:h-[18px] text-[#252323]" />
                  <span className="text-xs sm:text-sm font-medium text-[#70798c]">5000+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'classic') {
    return (
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background image with Prussian Blue overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Professional office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#14213d]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Gold accent line - animated */}
            <div className="w-20 h-1 bg-[#fca311] mx-auto mb-8 animate-scaleIn" />

            {/* Reviews */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fadeInUp stagger-1">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} className="text-[#fca311] fill-[#fca311]" />
                ))}
              </div>
              <span className="text-[#e5e5e5] text-sm">Rated 4.9 stars</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight mb-8 animate-fadeInUp stagger-2">
              Tradition, Expertise &
              <span className="block text-[#fca311] mt-2">Trust</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#e5e5e5] leading-relaxed mb-10 max-w-2xl mx-auto animate-fadeInUp stagger-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nostrum exercitationem ullam corporis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp stagger-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#fca311] text-[#000000] px-8 py-4 rounded font-medium hover:bg-[#fca311]/90 transition-all btn-shine"
              >
                Schedule Appointment
                <ArrowRight size={18} />
              </Link>
              <Link
                href="tel:+31201234567"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded font-medium border border-[#e5e5e5]/30 hover:border-[#fca311] transition-all"
              >
                Call Now: 020 123 4567
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '5000+', label: 'Happy Clients' },
                { number: '15', label: 'Specialists' },
                { number: '4.9', label: 'Average Rating' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${0.6 + i * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <p className="text-3xl md:text-4xl font-serif text-[#fca311] mb-1">{stat.number}</p>
                  <p className="text-sm text-[#e5e5e5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Minimal variant - Cool Steel palette
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-[#f4f4f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Content */}
          <div className="lg:col-span-7 animate-fadeInUp">
            <p className="text-sm tracking-widest text-[#9999a1] uppercase mb-4 animate-slideInLeft stagger-1">Notary Services</p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light text-[#000000] tracking-tight leading-none mb-8">
              <span className="block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Clear.</span>
              <span className="block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Reliable.</span>
              <span className="block text-[#66666e] opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>Personal.</span>
            </h1>

            <div className="flex items-center gap-4 mb-8 animate-fadeInUp stagger-4">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="text-[#000000] fill-[#000000]" />
                ))}
              </div>
              <span className="text-sm text-[#66666e]">4.9/5 · 200+ reviews</span>
            </div>

            <p className="text-lg text-[#66666e] leading-relaxed mb-10 max-w-lg animate-fadeInUp stagger-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp stagger-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#000000] text-white px-8 py-4 font-light tracking-wide hover:bg-[#66666e] transition-all group btn-shine"
              >
                Contact
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 bg-transparent text-[#000000] px-8 py-4 font-light tracking-wide border border-[#9999a1] hover:border-[#000000] hover:bg-[#000000] hover:text-white transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Visual - Hidden on mobile */}
          <div className="lg:col-span-5 animate-fadeInUp stagger-3 hidden md:block">
            <div className="relative group">
              <div className="aspect-[3/4] bg-[#e6e6e9] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Professional handshake"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#000000] group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
