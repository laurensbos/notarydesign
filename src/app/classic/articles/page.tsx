'use client';

import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
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

export default function ClassicArticlesPage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
      <DesignSwitcher />
      <Header variant="classic" />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-[#fca311] mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            Articles & Publications
          </h1>
          <p className="text-lg sm:text-xl text-[#e5e5e5]/70 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 bg-[#000000] border-t border-[#14213d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e5e5e5]/60" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 border border-[#14213d] bg-[#14213d] text-white placeholder:text-[#e5e5e5]/60 focus:border-[#fca311] outline-none transition text-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all border ${
                    i === 0
                      ? 'bg-[#fca311] border-[#fca311] text-[#000000]'
                      : 'bg-transparent border-[#14213d] text-[#e5e5e5]/70 hover:border-[#fca311] hover:text-[#fca311]'
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
        <section className="py-12 sm:py-16 bg-[#e5e5e5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-stretch group cursor-pointer bg-white border border-[#e5e5e5] overflow-hidden">
              <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#fca311] text-sm font-medium uppercase tracking-wider">
                    Featured Article
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#14213d] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredArticle.readTime} read
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#000000] mb-4 group-hover:text-[#fca311] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#14213d] leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={`/classic/articles/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 text-[#fca311] font-medium hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif text-[#000000]">All Publications</h2>
            <div className="w-12 h-0.5 bg-[#fca311]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer bg-white border border-[#e5e5e5] hover:border-[#fca311] transition-all duration-300"
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
                  <div className="flex items-center gap-4 text-xs text-[#14213d] mb-3">
                    <span className="text-[#fca311] uppercase tracking-wider font-medium">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#000000] mb-3 group-hover:text-[#fca311] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#14213d] line-clamp-2 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/classic/articles/${article.id}`}
                    className="inline-flex items-center gap-2 text-[#fca311] font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-[#000000] text-white px-8 py-4 font-medium hover:bg-[#14213d] transition-all">
              Load More Articles
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 bg-[#14213d] border-t border-[#000000]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-[#fca311] mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#e5e5e5]/70 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Receive our latest publications.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-[#000000] border border-[#14213d] text-white placeholder:text-[#e5e5e5]/60 focus:border-[#fca311] outline-none transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#fca311] text-[#000000] font-medium hover:bg-[#fca311]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer variant="classic" />
    </div>
  );
}
