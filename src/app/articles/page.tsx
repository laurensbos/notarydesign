'use client';

import { ArrowRight, Calendar, Clock, Search, Tag } from 'lucide-react';
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

export default function ArticlesPage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <DesignSwitcher />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#70798c] mb-3 uppercase tracking-wider">Knowledge Base</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#252323] tracking-tight mb-6">
              Articles & Insights
            </h1>
            <p className="text-lg sm:text-xl text-[#70798c] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 bg-white border-y border-[#dad2bc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#70798c]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#dad2bc] focus:border-[#252323] focus:ring-2 focus:ring-[#dad2bc]/50 outline-none transition bg-white text-sm"
              />
            </div>

            {/* Categories - Horizontal scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    i === 0
                      ? 'bg-[#252323] text-white'
                      : 'bg-[#f5f1ed] text-[#70798c] hover:bg-[#dad2bc] hover:text-[#252323]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center group cursor-pointer">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#252323] text-white px-4 py-1.5 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#f5f1ed] px-3 py-1 rounded-full text-xs font-medium text-[#252323]">
                    {featuredArticle.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#70798c] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredArticle.readTime} read
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#252323] mb-4 group-hover:text-[#70798c] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#70798c] leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={`/articles/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 bg-[#252323] text-white px-6 py-3 rounded-full font-medium hover:bg-[#70798c] transition-all hover:gap-3 btn-shine"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[#252323]">Latest Articles</h2>
            <p className="text-sm text-[#70798c]">{articles.length} articles</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#dad2bc]/50"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#f5f1ed]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#252323]">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-[#70798c] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#252323] mb-2 group-hover:text-[#70798c] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#70798c] line-clamp-2 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center gap-2 text-[#252323] font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-white text-[#252323] px-8 py-4 rounded-full font-medium border border-[#dad2bc] hover:border-[#a99985] hover:shadow-lg transition-all">
              Load More Articles
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 bg-[#252323]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Stay informed
          </h2>
          <p className="text-[#a99985] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Subscribe to receive our latest articles.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-[#70798c]/30 text-white placeholder:text-[#a99985] focus:border-[#a99985] focus:ring-2 focus:ring-[#a99985]/20 outline-none transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#a99985] text-[#252323] rounded-full font-medium hover:bg-[#dad2bc] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
