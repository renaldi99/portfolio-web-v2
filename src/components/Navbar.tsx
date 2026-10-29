'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Index', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const sectionIds = ['home', 'about', 'work', 'stack', 'contact'];
    const observers: IntersectionObserver[] = [];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 h-[76px] px-5 sm:px-8 md:px-10 flex items-center justify-between border-b border-border-subtle bg-background/80 backdrop-blur-md transition-colors duration-200">
      {/* Logo */}
      <div className="w-[180px] md:w-[220px]">
        <Link
          href="#home"
          className="text-[22px] font-semibold tracking-[-0.03em] text-foreground inline-flex items-center group transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1"
        >
          Renaldi
          <span className="text-accent group-hover:scale-125 transition-transform duration-200">
            .
          </span>
        </Link>
      </div>

      {/* Desktop Tabs */}
      <nav
        className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface border border-border-subtle shadow-xs"
        aria-label="Primary"
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'h-8 px-3.5 rounded-full text-[13px] font-medium transition-all duration-150 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                isActive
                  ? 'bg-surface-raised text-foreground shadow-xs font-semibold'
                  : 'text-fog hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Nav Actions */}
      <div className="w-auto md:w-[220px] flex items-center justify-end gap-2">
        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="w-10 h-10 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-foreground hover:border-border-strong active:scale-[0.96] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {mounted && theme === 'light' ? (
            <Sun className="w-4 h-4 text-accent transition-transform duration-200" />
          ) : (
            <Moon className="w-4 h-4 text-foreground/80 transition-transform duration-200" />
          )}
        </button>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden w-10 h-10 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-foreground hover:border-border-strong active:scale-[0.96] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {mobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[76px] left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border-subtle p-5 flex flex-col gap-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Primary">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'h-11 px-4 rounded-lg text-sm font-medium flex items-center justify-between transition-colors',
                    isActive
                      ? 'bg-surface-raised text-foreground font-semibold'
                      : 'text-fog hover:text-foreground hover:bg-surface'
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-border-subtle">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-11 rounded-full bg-foreground text-background text-sm font-medium flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

