'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, Code2, Smartphone, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col items-center text-center gap-9 pt-24 sm:pt-28 md:pt-32 pb-20 px-6 sm:px-12 md:px-20"
    >
      {/* Ambient Radial Glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Availability announcement */}
      <Link
        href="#contact"
        className="group relative z-10 inline-flex items-center gap-2.5 h-[38px] pl-2 pr-1.5 py-1 rounded-full bg-surface/80 border border-border-strong hover:border-foreground/30 text-[14px] transition-all duration-200 active:scale-[0.98] shadow-xs"
      >
        <span className="px-2 py-0.5 rounded-full bg-accent-soft text-accent text-xs font-semibold uppercase tracking-wider">
          Open
        </span>
        <span className="font-medium text-foreground">
          Available for new projects
        </span>
        <span className="hidden sm:inline text-text-secondary text-xs">
          · {PERSONAL_INFO.location}
        </span>
        <span className="w-6 h-6 rounded-full bg-surface-raised flex items-center justify-center text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </Link>

      {/* Hero Title */}
      <h1 className="relative z-10 text-[40px] sm:text-[56px] md:text-[76px] lg:text-[88px] font-medium tracking-[-0.04em] leading-[1.03] text-foreground max-w-4xl">
        I design the interface
        <br />
        &amp; write the{' '}
        <span className="hero-underline text-foreground">code.</span>
      </h1>

      {/* Hero Subtitle */}
      <p className="relative z-10 max-w-[640px] text-base sm:text-lg md:text-[19px] leading-relaxed text-text-secondary">
        {PERSONAL_INFO.hero.subheadline}
      </p>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>Email Me</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="#work"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-surface-raised border border-border-subtle hover:border-border-strong text-foreground text-sm font-medium active:scale-[0.98] transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>Explore Selected Works</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* Meta Pills */}
      <ul className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4 text-xs sm:text-sm text-text-secondary">
        <li className="inline-flex items-center gap-2">
          <Code2 className="w-4 h-4 text-text-tertiary" />
          <span>Full-Stack Web</span>
        </li>
        <li className="inline-flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-text-tertiary" />
          <span>Mobile Apps</span>
        </li>
        <li className="inline-flex items-center gap-2">
          <Palette className="w-4 h-4 text-text-tertiary" />
          <span>UI/UX &amp; Product Design</span>
        </li>
      </ul>
    </section>
  );
}

