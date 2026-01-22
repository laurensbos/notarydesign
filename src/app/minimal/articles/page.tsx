'use client';

import { ArrowRight, Calendar, Clock, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DesignSwitcher from '@/components/DesignSwitcher';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const articles = [
  {
    id: '1',
    category: 'Real Estate',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: 'Jan 15, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    featured: true,
  },
  {
    id: '2',
    category: 'Family Law',
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 12, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    featured: false,
  },
  {
    id: '3',
    category: 'Estate Planning',
    title: 'Ut enim ad minim veniam quis nostrud exercitation ullamco',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 8, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    featured: false,
  },
  {
    id: '4',
    category: 'Corporate Law',
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 5, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    featured: false,
  },
  {
    id: '5',
    category: 'Real Estate',
    title: 'Excepteur sint occaecat cupidatat non proident sunt in culpa',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 2, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    featured: false,
  },
  {
    id: '6',
    category: 'Family Law',
    title: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Dec 28, 2025',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    featured: false,
  },
];

const categories = ['All', 'Real Estate', 'Family Law', 'Estate Planning', 'Corporate Law'];

export default function MinimalArticlesPage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#f4f4f6]">
      <DesignSwitcher />
      <Header variant="minimal" />

      {/* Hero Section - Ultra minimal */}
      <section className="pt-32 sm:pt-36 pb-8 bg-[#f4f4f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#000000] tracking-tight mb-4">
            Articles
          </h1>
          <p className="text-lg text-[#66666e] font-light">
            Insights and updates from our practice.
          </p>
        </div>
      </section>

      {/* Search & Filter - Minimal */}
      <section className="py-4 bg-[#f4f4f6] border-b border-[#9999a1]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9999a1]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 border-b border-[#9999a1] bg-transparent text-[#000000] placeholder:text-[#9999a1] focus:border-[#000000] outline-none transition text-sm"
              />
            </div>

            {/* Categories - Minimal tabs */}
            <div className="flex gap-6 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`text-sm font-light whitespace-nowrap transition-all pb-1 ${
                    i === 0
                      ? 'text-[#000000] border-b border-[#000000]'
                      : 'text-[#9999a1] hover:text-[#000000]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article - Minimal */}
      {featuredArticle && (
        <section className="py-12 sm:py-16 bg-[#f4f4f6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="grid lg:grid-cols-5 gap-8 items-start group cursor-pointer">
              <div className="lg:col-span-3 aspect-[16/10] rounded-sm overflow-hidden relative">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="lg:col-span-2 lg:pt-4">
                <div className="flex items-center gap-3 text-xs text-[#9999a1] mb-4 uppercase tracking-widest">
                  <span>{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-[#000000] mb-4 group-hover:text-[#66666e] transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#66666e] font-light leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={`/minimal/articles/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 text-[#000000] text-sm tracking-wide uppercase hover:gap-3 transition-all"
                >
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-[#9999a1]/30" />
      </div>

      {/* Articles List - Minimal */}
      <section className="py-12 sm:py-16 bg-[#f4f4f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {regularArticles.map((article, index) => (
              <article
                key={article.id}
                className={`group cursor-pointer py-8 ${index !== regularArticles.length - 1 ? 'border-b border-[#9999a1]/30' : ''}`}
              >
                <Link href={`/minimal/articles/${article.id}`} className="grid sm:grid-cols-4 gap-6 items-start">
                  <div className="sm:col-span-1 aspect-[16/10] sm:aspect-square rounded-sm overflow-hidden relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <div className="flex items-center gap-3 text-xs text-[#9999a1] mb-2 uppercase tracking-widest">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-light text-[#000000] mb-2 group-hover:text-[#66666e] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[#66666e] font-light text-sm line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More - Minimal */}
          <div className="text-center mt-12 pt-8 border-t border-[#9999a1]/30">
            <button className="inline-flex items-center gap-2 text-[#000000] text-sm tracking-wide uppercase hover:gap-3 transition-all">
              Load More <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Minimal */}
      <section className="py-16 sm:py-20 bg-[#000000]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Newsletter
          </h2>
          <p className="text-[#9999a1] font-light mb-8">
            Subscribe for updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 bg-transparent border-b border-[#66666e] text-white placeholder:text-[#9999a1] focus:border-white outline-none transition text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#000000] text-sm uppercase tracking-wide hover:bg-[#e6e6e9] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer variant="minimal" />
    </div>
  );
}
