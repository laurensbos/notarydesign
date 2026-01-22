'use client';

import { useState } from 'react';
import { Palette, X, Info } from 'lucide-react';

export default function DesignSwitcher() {
  const [isExpanded, setIsExpanded] = useState(false);

  const design = {
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
  };

  return (
    <>
      {/* Mobile: Bottom info button */}
      <div className="md:hidden fixed bottom-4 right-4 z-[9999]">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-[#14213d] text-white rounded-full shadow-lg flex items-center justify-center"
        >
          {isExpanded ? <X size={20} /> : <Info size={20} />}
        </button>
      </div>

      {/* Mobile: Expanded panel */}
      {isExpanded && (
        <div className="md:hidden fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm" onClick={() => setIsExpanded(false)}>
          <div className="absolute bottom-20 right-4 left-4 bg-white rounded-2xl shadow-2xl p-5 max-h-[70vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h3 className="font-semibold text-[#252323] mb-1">{design.label} Design</h3>
            <p className="text-sm text-[#70798c] mb-4">{design.description}</p>
            
            <div className="mb-4">
              <p className="text-xs font-medium text-[#70798c] mb-2">Color Palette</p>
              <div className="flex gap-2">
                {design.colors.map((color, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg shadow-sm border border-black/10" style={{ backgroundColor: color.hex }} />
                    <span className="text-[10px] text-[#70798c] mt-1">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-medium text-[#70798c] mb-2">Typography</p>
              <p className="text-sm text-[#252323]">{design.font} ({design.fontStyle})</p>
            </div>

            <div>
              <p className="text-xs font-medium text-[#70798c] mb-2">Psychology</p>
              <div className="flex flex-wrap gap-1">
                {design.psychology.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-[#f5f1ed] text-[#252323] rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop: Fixed panel */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-[#dad2bc] overflow-hidden w-80">
          <div className="bg-[#14213d] text-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Palette size={18} />
              <span className="font-semibold">{design.label} Design</span>
            </div>
            <p className="text-sm text-[#dad2bc]">{design.description}</p>
          </div>
          
          <div className="p-4">
            <p className="text-xs font-medium text-[#70798c] mb-3">Color Palette</p>
            <div className="flex gap-2 mb-4">
              {design.colors.map((color, i) => (
                <div key={i} className="group relative flex-1">
                  <div className="aspect-square rounded-lg shadow-sm border border-black/10 cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: color.hex }} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#252323] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {color.hex}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs font-medium text-[#70798c] mb-2">Typography</p>
            <p className="text-sm text-[#252323] mb-4">{design.font}</p>

            <div className="flex flex-wrap gap-1">
              {design.psychology.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-0.5 bg-[#f5f1ed] text-[#70798c] rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
