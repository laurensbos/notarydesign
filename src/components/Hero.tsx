import { Star, ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#f5f1ed] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#dad2bc] rounded-full blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute -bottom-40 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#a99985]/30 rounded-full blur-3xl opacity-50 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#dad2bc]/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="animate-fadeInUp order-2 lg:order-1">
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
              <span className="text-[#14213d]">important moments</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#70798c] leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#14213d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-[#252323] transition-all hover:gap-3 btn-shine text-sm sm:text-base">
                Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-[#14213d] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium border border-[#14213d]/20 hover:border-[#14213d] hover:shadow-lg transition-all text-sm sm:text-base">
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                { icon: CheckCircle, text: 'Independent' },
                { icon: Shield, text: 'Certified' },
                { icon: Clock, text: '24h Response' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#70798c]">
                  <item.icon size={16} className="sm:w-[18px] sm:h-[18px] text-[#14213d] flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fadeInUp stagger-2 order-1 lg:order-2 hidden md:block">
            <div className="relative rounded-2xl sm:rounded-3xl aspect-[4/3] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Professional notary" fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
