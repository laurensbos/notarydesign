import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  { category: 'Real Estate', title: 'Lorem ipsum dolor sit amet consectetur', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: 'Jan 15, 2026', readTime: '5 min', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
  { category: 'Family Law', title: 'Sed do eiusmod tempor incididunt', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: 'Jan 12, 2026', readTime: '4 min', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80' },
  { category: 'Estate Planning', title: 'Ut enim ad minim veniam quis', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: 'Jan 8, 2026', readTime: '6 min', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80' },
];

export default function Articles() {
  return (
    <section id="articles" className="py-16 sm:py-20 md:py-32 bg-[#f5f1ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">Articles</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight">Latest news & insights</h2>
          </div>
          <Link href="/articles" className="inline-flex items-center gap-2 text-[#14213d] font-medium hover:gap-3 transition-all text-sm sm:text-base">All articles <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden relative">
                <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-[#14213d] px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium text-white">{article.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#70798c] mb-2 sm:mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} />{article.date}</span>
                <span>{article.readTime} read</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#252323] mb-2 sm:mb-3 group-hover:text-[#14213d] transition-colors line-clamp-2">{article.title}</h3>
              <p className="text-sm sm:text-base text-[#70798c] line-clamp-2">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
