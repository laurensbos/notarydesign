import { Star, Quote } from 'lucide-react';

interface ReviewsProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

const reviews = [
  {
    name: 'John Smith',
    role: 'Business Owner',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Private Client',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'Real Estate Investor',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nostrud exercitation.',
    rating: 5,
  },
];

export default function Reviews({ variant = 'modern' }: ReviewsProps) {
  if (variant === 'modern') {
    return (
      <section className="py-16 sm:py-20 md:py-32 bg-[#14213d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-medium text-[#dad2bc] mb-2 sm:mb-3 uppercase tracking-wider">Testimonials</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-3 sm:mb-4">
              What our clients say
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} className="sm:w-5 sm:h-5 text-[#fca311] fill-[#fca311]" />
                ))}
              </div>
              <span className="text-sm sm:text-base text-[#dad2bc]">4.9/5 based on 200+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} className="sm:w-4 sm:h-4 text-[#fca311] fill-[#fca311]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#f5f1ed] leading-relaxed mb-4 sm:mb-6">&quot;{review.content}&quot;</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#252323] rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">{review.name}</p>
                    <p className="text-xs sm:text-sm text-[#dad2bc]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12">
            <div className="flex items-center gap-2">
              <div className="bg-[#00b67a] px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                <span className="text-white text-xs sm:text-sm font-bold">★ Trustpilot</span>
              </div>
              <span className="text-[#dad2bc] text-xs sm:text-sm">Excellent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-blue-500">G</span>
              </div>
              <span className="text-[#dad2bc] text-xs sm:text-sm">4.9 ★ Google Reviews</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'classic') {
    return (
      <section className="py-20 md:py-32 bg-[#e5e5e5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#fca311] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#000000] mb-4">
              Client Experiences
            </h2>
            <p className="text-[#14213d] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-[#e5e5e5] relative"
              >
                <Quote size={40} className="text-[#e5e5e5] absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-[#fca311] fill-[#fca311]" />
                  ))}
                </div>
                <p className="text-[#14213d] leading-relaxed mb-6 relative z-10">&quot;{review.content}&quot;</p>
                <div className="border-t border-[#e5e5e5] pt-4">
                  <p className="font-serif text-[#000000]">{review.name}</p>
                  <p className="text-sm text-[#14213d]">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Minimal - Cool Steel palette
  return (
    <section className="py-20 md:py-32 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <p className="text-sm tracking-widest text-[#9999a1] uppercase mb-4">Reviews</p>
            <h2 className="text-4xl font-light tracking-tight mb-4">
              Experiences
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="text-white fill-white" />
                ))}
              </div>
              <span className="text-[#9999a1] text-sm">4.9/5</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {reviews.map((review, i) => (
                <div key={i} className="border-b border-[#66666e]/30 pb-8 last:border-0">
                  <p className="text-lg text-[#e6e6e9] leading-relaxed mb-4">&quot;{review.content}&quot;</p>
                  <p className="text-sm text-[#9999a1]">{review.name} — {review.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
