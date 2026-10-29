'use client';

import * as React from 'react';
import { STACK_LAYERS } from '@/data/portfolio';

export function Stack() {
  const [activeLayer, setActiveLayer] = React.useState<string | null>(null);

  return (
    <section
      id="stack"
      className="w-full border-t border-border-subtle py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary block mb-3">
              03 / Tech Stack
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-[-0.035em] leading-[1.08] text-foreground">
              Tools I use for work,
              <br />
              and skills I have.
            </h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base leading-relaxed text-text-secondary">
            From pixel to production — one person across design, frontend, backend
            and delivery.
          </p>
        </div>

        {/* Distribution Bar */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="h-2 rounded-full overflow-hidden flex gap-1 bg-surface-raised p-0.5 border border-border-subtle">
            {STACK_LAYERS.map((layer) => {
              const isHovered = activeLayer === layer.number;
              return (
                <div
                  key={layer.number}
                  style={{
                    flex: layer.flexRatio,
                    backgroundColor: layer.color,
                  }}
                  onMouseEnter={() => setActiveLayer(layer.number)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`h-full rounded-full transition-opacity duration-150 cursor-pointer ${
                    activeLayer && !isHovered ? 'opacity-40' : 'opacity-100'
                  }`}
                  title={`${layer.title}: ${layer.count} tools`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between font-mono text-xs text-text-tertiary tracking-wider uppercase">
            <span>Stack distribution</span>
            <span className="tabular-nums">32 tools · 5 layers</span>
          </div>
        </div>

        {/* 5 Stack Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 pt-4">
          {STACK_LAYERS.map((layer, idx) => {
            const isHovered = activeLayer === layer.number;
            return (
              <div
                key={layer.number}
                onMouseEnter={() => setActiveLayer(layer.number)}
                onMouseLeave={() => setActiveLayer(null)}
                className={`flex flex-col lg:pl-6 ${
                  idx !== 0 ? 'lg:border-l border-border-subtle' : ''
                } transition-all duration-200 ${
                  activeLayer && !isHovered ? 'opacity-50' : 'opacity-100'
                }`}
              >
                {/* Meta */}
                <div className="flex items-center justify-between font-mono text-xs text-text-tertiary mb-3">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full transition-transform duration-200"
                      style={{
                        backgroundColor: layer.color,
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />
                    <span>{layer.number}</span>
                  </span>
                  <span
                    className="font-mono font-medium tabular-nums"
                    style={{ color: layer.color }}
                  >
                    {layer.count}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium tracking-tight text-foreground">
                  {layer.title}
                </h3>
                <p className="text-xs text-text-secondary mt-1 min-h-[32px]">
                  {layer.subtitle}
                </p>

                {/* Tools List */}
                <ul className="flex flex-col gap-2.5 mt-6 border-t border-border-subtle pt-4">
                  {layer.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-sm text-text-secondary hover:text-foreground transition-colors duration-150 inline-flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-border-strong" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

