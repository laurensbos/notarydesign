import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">Contact</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight mb-4 sm:mb-6">Get in touch</h2>
            <p className="text-base sm:text-lg text-[#70798c] leading-relaxed mb-6 sm:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <div className="bg-[#f5f1ed] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#252323] mb-4 sm:mb-6">Request an appointment</h3>
            <form className="space-y-3 sm:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <input type="text" placeholder="First name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base" />
                <input type="text" placeholder="Last name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base" />
              </div>
              <input type="email" placeholder="Email address" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base" />
              <input type="tel" placeholder="Phone number" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-sm sm:text-base" />
              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition text-[#70798c] text-sm sm:text-base">
                <option value="">Select a service</option>
                <option>Real Estate & Mortgages</option>
                <option>Family & Inheritance Law</option>
                <option>Wills & Estate Planning</option>
                <option>Corporate Law</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Your message" rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#dad2bc] focus:border-[#14213d] focus:ring-2 focus:ring-[#14213d]/20 outline-none transition resize-none text-sm sm:text-base" />
              <button type="submit" className="w-full bg-[#14213d] text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium hover:bg-[#252323] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base btn-shine">
                Send Request <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
