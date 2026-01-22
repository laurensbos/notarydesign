import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticlesProps {
  variant?: 'modern' | 'classic' | 'minimal';
}

const articles = [
  {
    category: 'Real Estate',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 15, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    category: 'Family Law',
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 12, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    category: 'Estate Planning',
    title: 'Ut enim ad minim veniam quis nostrud exercitation',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 8, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
];

export default function Articles({ variant = 'modern' }: ArticlesProps) {
  if (variant === 'modern') {
    return (
      <section id="articles" className="py-16 sm:py-20 md:py-32 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#70798c] mb-2 sm:mb-3 uppercase tracking-wider">Articles</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252323] tracking-tight">
                Latest news & insights
              </h2>
            </div>
            <Link href="/articles" className="inline-flex items-center gap-2 text-[#14213d] font-medium hover:gap-3 transition-all text-sm sm:text-base">
              All articles <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-[#14213d] px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium text-white">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#70798c] mb-2 sm:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                    {article.date}
                  </span>
                  <span>{article.readTime} read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#252323] mb-2 sm:mb-3 group-hover:text-[#14213d] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-[#70798c] line-clamp-2">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'classic') {
    return (
      <section id="articles" className="py-20 md:py-32 bg-[#14213d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#fca311] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Knowledge Base & Articles
            </h2>
            <p className="text-[#e5e5e5]/70 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group bg-[#000000] border border-[#14213d] hover:border-[#fca311] transition-colors cursor-pointer"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#e5e5e5]/60 mb-3">
                    <span className="text-[#fca311]">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-white mb-3 group-hover:text-[#fca311] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[#e5e5e5]/70 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/classic/articles" className="inline-flex items-center gap-2 text-[#fca311] font-medium hover:gap-3 transition-all">
              View all articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Minimal - Cool Steel palette
  return (
    <section id="articles" className="py-20 md:py-32 bg-[#f4f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#9999a1]/30 pb-6">
          <div>
            <p className="text-sm tracking-widest text-[#9999a1] uppercase mb-4">Articles</p>
            <h2 className="text-4xl font-light text-[#000000] tracking-tight">
              Insights
            </h2>
          </div>
          <Link href="/minimal/articles" className="text-sm text-[#66666e] hover:text-[#000000] transition-colors">
            All articles →
          </Link>
        </div>

        <div className="divide-y divide-[#9999a1]/30">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group py-8 grid md:grid-cols-12 gap-6 cursor-pointer"
            >
              <div className="md:col-span-2 text-sm text-[#9999a1]">
                {article.date}
              </div>
              <div className="md:col-span-7">
                <p className="text-xs tracking-widest text-[#9999a1] uppercase mb-2">{article.category}</p>
                <h3 className="text-xl font-medium text-[#000000] group-hover:text-[#66666e] transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-[#66666e] text-sm line-clamp-2">{article.excerpt}</p>
              </div>
              <div className="md:col-span-3 flex items-center justify-end">
                <span className="text-[#9999a1] group-hover:text-[#000000] transition-colors">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
