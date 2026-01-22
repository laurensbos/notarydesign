import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ContactProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

export default function Contact({ variant = 'modern' }: ContactProps) {
  if (variant === 'modern') {
    return (
      <section id="contact" className="py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Content */}
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">Contact</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight mb-4 sm:mb-6">
                Get in touch
              </h2>
              <p className="text-base sm:text-lg text-[#70798c] leading-relaxed mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {[
                  { icon: Phone, label: 'Phone', value: '+31 (0)20 123 4567', href: 'tel:+31201234567' },
                  { icon: Mail, label: 'Email', value: 'info@notaryoffice.com', href: 'mailto:info@notaryoffice.com' },
                  { icon: MapPin, label: 'Address', value: '123 Main Street, Amsterdam', href: '#' },
                  { icon: Clock, label: 'Office Hours', value: 'Mon-Fri: 09:00 - 17:30', href: '#' },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14213d] rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#252323] transition-colors">
                      <item.icon size={18} className="sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#70798c]">{item.label}</p>
                      <p className="text-sm sm:text-base text-[#252323] font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#f5f1ed] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#252323] mb-4 sm:mb-6">Request an appointment</h3>
              <form className="space-y-3 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base"
                />
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-[#70798c] text-sm sm:text-base">
                  <option value="">Select a service</option>
                  <option>Real Estate & Mortgages</option>
                  <option>Family & Inheritance Law</option>
                  <option>Wills & Estate Planning</option>
                  <option>Corporate Law</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition resize-none text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full bg-[#14213d] text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium hover:bg-[#252323] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base btn-shine"
                >
                  Send Request
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'classic') {
    return (
      <section id="contact" className="py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#fca311] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#000000] mb-4">
              Contact Us
            </h2>
            <p className="text-[#14213d] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: '+31 (0)20 123 4567' },
                { icon: Mail, label: 'Email', value: 'info@notaryoffice.com' },
                { icon: MapPin, label: 'Address', value: '123 Main Street\nAmsterdam' },
                { icon: Clock, label: 'Office Hours', value: 'Mon-Fri: 09:00 - 17:30' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#14213d] flex items-center justify-center">
                    <item.icon size={20} className="text-[#fca311]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#14213d]">{item.label}</p>
                    <p className="text-[#000000] font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-[#e5e5e5] p-8 border border-[#e5e5e5]">
              <h3 className="text-2xl font-serif text-[#000000] mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#fca311] outline-none transition bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#fca311] outline-none transition bg-white"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#fca311] outline-none transition bg-white"
                />
                <select className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#fca311] outline-none transition text-[#14213d] bg-white">
                  <option value="">Subject</option>
                  <option>Real Estate</option>
                  <option>Family & Inheritance</option>
                  <option>Estate Planning</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-[#fca311] outline-none transition resize-none bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#fca311] text-[#000000] px-8 py-4 font-medium hover:bg-[#fca311]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Minimal - Cool Steel palette
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#f4f4f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm tracking-widest text-[#9999a1] uppercase mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-light text-[#000000] tracking-tight mb-6">
              Get in touch
            </h2>
            <p className="text-[#66666e] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="space-y-4 text-[#66666e]">
              <p>+31 (0)20 123 4567</p>
              <p>info@notaryoffice.com</p>
              <p>123 Main Street<br />Amsterdam</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-0 py-3 border-0 border-b border-[#9999a1] focus:border-[#000000] outline-none transition bg-transparent text-[#000000] placeholder:text-[#9999a1]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-0 py-3 border-0 border-b border-[#9999a1] focus:border-[#000000] outline-none transition bg-transparent text-[#000000] placeholder:text-[#9999a1]"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-0 py-3 border-0 border-b border-[#9999a1] focus:border-[#000000] outline-none transition bg-transparent text-[#000000] placeholder:text-[#9999a1]"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-0 py-3 border-0 border-b border-[#9999a1] focus:border-[#000000] outline-none transition bg-transparent resize-none text-[#000000] placeholder:text-[#9999a1]"
              />
              <button
                type="submit"
                className="bg-[#000000] text-white px-8 py-4 font-light tracking-wide hover:bg-[#66666e] transition-colors"
              >
                Send →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
