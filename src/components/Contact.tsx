'use client';

import * as React from 'react';
import { Mail, MessageCircle, Instagram, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, CHANNELS } from '@/data/portfolio';

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {}
  };

  const getChannelIcon = (type: 'mail' | 'whatsapp' | 'instagram') => {
    switch (type) {
      case 'mail':
        return <Mail className="w-5 h-5 text-foreground" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-foreground" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-foreground" />;
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden w-full border-t border-border-subtle pt-28 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* Ambient Radial Glow */}
      <div className="contact-glow" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-4">
          04 / Contact · {PERSONAL_INFO.location}
        </span>

        {/* Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.04em] leading-[1.04] text-foreground mb-6">
          Have an idea?
          <br />
          Let&apos;s build it together.
        </h2>

        {/* Subtitle */}
        <p className="max-w-[560px] text-base sm:text-lg text-text-secondary leading-relaxed mb-10">
          Need a website, a mobile application, or just want to talk business?
          Reach out directly and let&apos;s craft your digital story.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Chat on WhatsApp</span>
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-surface-raised border border-border-subtle hover:border-border-strong text-foreground text-sm font-medium active:scale-[0.98] transition-all duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="font-mono text-xs sm:text-sm">
              {copied ? 'Copied to clipboard!' : PERSONAL_INFO.email}
            </span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-text-secondary" />
            )}
          </button>
        </div>

        {/* Channel Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {CHANNELS.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.id === 'email' ? undefined : '_blank'}
              rel={channel.id === 'email' ? undefined : 'noopener noreferrer'}
              className="group flex flex-col justify-between gap-8 p-6 sm:p-7 rounded-xl bg-surface border border-border-subtle hover:border-border-strong transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center border border-border-subtle">
                  {getChannelIcon(channel.icon)}
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </div>

              <div>
                <span className="font-mono text-[11px] tracking-wider uppercase text-text-tertiary block mb-1">
                  {channel.number} / {channel.title}
                </span>
                <strong className="block text-lg font-medium text-foreground tracking-tight">
                  {channel.handle}
                </strong>
                <span className="text-xs text-text-secondary mt-0.5 block">
                  {channel.sub}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

