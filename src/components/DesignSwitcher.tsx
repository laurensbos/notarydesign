'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Palette, Type, Sparkles, Layout, Eye, X } from 'lucide-react';

export default function DesignSwitcher() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const designs = [
    { 
      href: '/', 
      label: 'Modern', 
      description: 'Warm & Professional',
      font: 'SF Pro Display',
      fontStyle: 'Clean Sans-Serif',
      colors: [
        { hex: '#252323', name: 'Carbon', meaning: 'Strength & Authority' },
        { hex: '#14213d', name: 'Prussian Blue', meaning: 'Trust & Professionalism' },
        { hex: '#70798c', name: 'Slate', meaning: 'Balance & Neutrality' },
        { hex: '#f5f1ed', name: 'Parchment', meaning: 'Warmth & Comfort' },
        { hex: '#dad2bc', name: 'Bone', meaning: 'Elegance & Sophistication' },
      ],
      psychology: ['Trustworthy', 'Professional', 'Approachable', 'Modern'],
      usage: 'Corporate, Legal, Professional Services',
      cssStyles: {
        backgrounds: 'bg-[#f5f1ed], bg-white, bg-[#14213d]',
        text: 'text-[#252323], text-[#70798c], text-white',
        accents: 'bg-[#14213d], border-[#dad2bc]',
        buttons: 'Rounded full (pill shape)',
        shadows: 'Soft shadows, hover lift effects',
        animations: 'Smooth fade-in, floating elements',
      }
    },
    { 
      href: '/classic', 
      label: 'Classic', 
      description: 'Black & Gold Elegance',
      font: 'Georgia Serif',
      fontStyle: 'Traditional Serif',
      colors: [
        { hex: '#000000', name: 'Black', meaning: 'Authority & Sophistication' },
        { hex: '#14213d', name: 'Prussian Blue', meaning: 'Gravitas & Mystery' },
        { hex: '#fca311', name: 'Gold/Orange', meaning: 'Warmth & Optimism' },
        { hex: '#e5e5e5', name: 'Alabaster', meaning: 'Refined Calm' },
        { hex: '#ffffff', name: 'White', meaning: 'Purity & New Beginnings' },
      ],
      psychology: ['Luxurious', 'Prestigious', 'Confident', 'Trustworthy'],
      usage: 'Luxury, Finance, Legal, High-End Services',
      cssStyles: {
        backgrounds: 'bg-[#000000], bg-[#14213d], bg-[#e5e5e5]',
        text: 'text-white, text-[#fca311], text-[#e5e5e5]/70',
        accents: 'bg-[#fca311], border-[#14213d]',
        buttons: 'Sharp rectangular edges',
        shadows: 'Minimal, border-focused',
        animations: 'Subtle transitions, gold accents',
      }
    },
    { 
      href: '/minimal', 
      label: 'Minimal', 
      description: 'Cool Steel',
      font: 'SF Pro Light',
      fontStyle: 'Ultra Light Sans',
      colors: [
        { hex: '#000000', name: 'Black', meaning: 'Depth & Formality' },
        { hex: '#66666e', name: 'Dim Grey', meaning: 'Resilience & Elegance' },
        { hex: '#9999a1', name: 'Cool Steel', meaning: 'Clarity & Creativity' },
        { hex: '#e6e6e9', name: 'Alabaster Grey', meaning: 'Balance & Calm' },
        { hex: '#f4f4f6', name: 'White Smoke', meaning: 'Purity & Tranquility' },
      ],
      psychology: ['Modern', 'Professional', 'Clean', 'Sophisticated'],
      usage: 'Tech, Corporate, Editorial, Interior Design',
      cssStyles: {
        backgrounds: 'bg-[#f4f4f6], bg-[#000000], bg-white',
        text: 'text-[#000000], text-[#66666e], text-[#9999a1]',
        accents: 'bg-[#000000], border-[#9999a1]/30',
        buttons: 'Minimal, underline links',
        shadows: 'None, border lines only',
        animations: 'Very subtle, typography-focused',
      }
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '/articles';
    return pathname.startsWith(href);
  };

  const currentDesign = designs.find(d => isActive(d.href)) || designs[0];

  return (
    <>
      {/* Mobile: Bottom fixed bar with quick switch */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-neutral-900 text-white safe-area-inset-bottom">
        {/* Quick switch buttons - always visible */}
        <div className="flex items-center justify-between px-2 py-2 border-b border-neutral-800">
          <span className="text-xs text-neutral-400 pl-2">Design:</span>
          <div className="flex gap-1">
            {designs.map((design) => (
              <Link
                key={design.href}
                href={design.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${
                  isActive(design.href)
                    ? 'bg-white text-neutral-900'
                    : 'bg-neutral-800 text-neutral-300'
                }`}
              >
                <div className="flex rounded overflow-hidden">
                  {design.colors.slice(0, 3).map((c, i) => (
                    <div
                      key={i}
                      className="w-2 h-4"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium">{design.label}</span>
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            {isExpanded ? <X size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Expanded info panel */}
        {isExpanded && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {/* Current Design Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{currentDesign.label}</h3>
                <p className="text-neutral-400 text-sm">{currentDesign.description}</p>
              </div>
              <div className="flex rounded-lg overflow-hidden">
                {currentDesign.colors.map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-8"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Palette size={12} /> Colors
              </p>
              <div className="grid grid-cols-2 gap-2">
                {currentDesign.colors.map((color, i) => (
                  <div key={i} className="flex items-center gap-2 bg-neutral-800 rounded-lg p-2">
                    <div 
                      className="w-6 h-6 rounded flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-xs font-medium">{color.name}</p>
                      <p className="text-[10px] text-neutral-500 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & CSS */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-neutral-800 rounded-lg p-3">
                <p className="text-xs text-neutral-500 mb-1 flex items-center gap-1">
                  <Type size={10} /> Font
                </p>
                <p className="text-sm font-medium">{currentDesign.font}</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-3">
                <p className="text-xs text-neutral-500 mb-1 flex items-center gap-1">
                  <Layout size={10} /> Buttons
                </p>
                <p className="text-sm">{currentDesign.cssStyles.buttons}</p>
              </div>
            </div>

            {/* Psychology */}
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles size={12} /> Psychology
              </p>
              <div className="flex flex-wrap gap-1.5">
                {currentDesign.psychology.map((tag, i) => (
                  <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop: Floating panel in corner */}
      <div className="hidden md:block fixed bottom-0 right-0 z-[9999] m-4">
        <div className={`bg-neutral-900 text-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'w-[420px]' : 'w-auto'}`}>
          
          {/* Collapsed Header - Always visible */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Palette size={18} className="text-neutral-400" />
              <span className="font-medium">Design: {currentDesign.label}</span>
              {/* Mini color preview */}
              <div className="flex -space-x-1">
                {currentDesign.colors.slice(0, 5).map((c, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border-2 border-neutral-900"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
            {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="border-t border-neutral-800 max-h-[70vh] overflow-y-auto">
              <div className="p-5 space-y-5">
                {/* Header */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">{currentDesign.label} Design</h3>
                  <p className="text-neutral-400 text-sm">{currentDesign.description}</p>
                </div>

                {/* Color Palette */}
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Palette size={12} /> Color Palette
                  </p>
                  <div className="space-y-2">
                    {currentDesign.colors.map((color, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex-shrink-0 border border-neutral-700"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{color.name}</span>
                            <span className="text-xs text-neutral-500 font-mono">{color.hex}</span>
                          </div>
                          <p className="text-xs text-neutral-400">{color.meaning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Type size={12} /> Typography
                  </p>
                  <div className="bg-neutral-800 rounded-lg p-3">
                    <p className="text-sm font-medium">{currentDesign.font}</p>
                    <p className="text-xs text-neutral-400">{currentDesign.fontStyle}</p>
                  </div>
                </div>

                {/* CSS Styles */}
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layout size={12} /> CSS Styles
                  </p>
                  <div className="space-y-2 text-sm bg-neutral-800 rounded-lg p-3">
                    <div>
                      <span className="text-neutral-400 text-xs">Backgrounds:</span>
                      <p className="text-neutral-200 text-xs font-mono">{currentDesign.cssStyles.backgrounds}</p>
                    </div>
                    <div>
                      <span className="text-neutral-400 text-xs">Text:</span>
                      <p className="text-neutral-200 text-xs font-mono">{currentDesign.cssStyles.text}</p>
                    </div>
                    <div>
                      <span className="text-neutral-400 text-xs">Accents:</span>
                      <p className="text-neutral-200 text-xs font-mono">{currentDesign.cssStyles.accents}</p>
                    </div>
                    <div className="pt-2 border-t border-neutral-700">
                      <div className="flex justify-between">
                        <span className="text-neutral-400 text-xs">Buttons</span>
                        <span className="text-neutral-200 text-xs">{currentDesign.cssStyles.buttons}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 text-xs">Shadows</span>
                      <span className="text-neutral-200 text-xs">{currentDesign.cssStyles.shadows}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 text-xs">Animations</span>
                      <span className="text-neutral-200 text-xs text-right max-w-[200px]">{currentDesign.cssStyles.animations}</span>
                    </div>
                  </div>
                </div>

                {/* Psychology */}
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles size={12} /> Psychology & Meaning
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentDesign.psychology.map((tag, i) => (
                      <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    <span className="text-neutral-500">Best for:</span> {currentDesign.usage}
                  </p>
                </div>

                {/* Switch Design */}
                <div className="pt-3 border-t border-neutral-800">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Eye size={12} /> Switch Design
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {designs.map((design) => (
                      <Link
                        key={design.href}
                        href={design.href}
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                          isActive(design.href)
                            ? 'bg-white text-neutral-900'
                            : 'bg-neutral-800 hover:bg-neutral-700'
                        }`}
                      >
                        <div className="flex rounded overflow-hidden">
                          {design.colors.slice(0, 5).map((c, i) => (
                            <div
                              key={i}
                              className="w-3 h-6"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium">{design.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
