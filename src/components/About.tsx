'use client';

import * as React from 'react';
import Image from 'next/image';
import { MapPin, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '@/data/portfolio';

export function About() {
  return (
    <section
      id="about"
      className="w-full border-t border-border-subtle py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Main 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Photo & Location */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              01 / About
            </span>
            <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-border-subtle group shadow-xs">
              <Image
                src="/images/its-me.jpg"
                alt="Renaldi at work"
                fill
                className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Based in Indonesia</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Bio & CTAs */}
          <div className="flex flex-col gap-8 lg:pt-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.03em] leading-[1.12] text-foreground">
              {PERSONAL_INFO.about.statement}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base leading-relaxed text-text-secondary">
              <p>{PERSONAL_INFO.about.paragraphs[0]}</p>
              <p>{PERSONAL_INFO.about.paragraphs[1]}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.cvRequestEmail}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-border-strong hover:border-foreground text-foreground text-sm font-medium active:scale-[0.98] transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full hover:bg-surface text-foreground text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Hire Me for a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2.5 sm:border-l border-border-strong sm:pl-6 py-1"
            >
              <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-foreground tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm text-text-secondary leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

