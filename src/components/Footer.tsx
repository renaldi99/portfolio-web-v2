'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border-subtle py-8 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo & Copyright */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-secondary">
          <Link
            href="#home"
            className="text-base font-semibold tracking-tight text-foreground"
          >
            Renaldi<span className="text-accent">.</span>
          </Link>
          <span className="font-mono text-xs text-text-tertiary">
            © {new Date().getFullYear()} Renaldi. All rights reserved.
          </span>
        </div>

        {/* Back to top */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-text-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </a>
      </div>
    </footer>
  );
}

