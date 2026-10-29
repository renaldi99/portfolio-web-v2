'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Component, Copy, CheckCheck, MousePointer2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Capabilities() {
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [activeCodeTab, setActiveCodeTab] = React.useState<'backend' | 'frontend'>('backend');

  const backendCode = `Route::post('/booking', [
  BookingController::class,
  'checkout'
]);

// Handle webhook
Webhook::listen('payment.paid');`;

  const frontendCode = `// Next.js App Router Action
export async function createBooking(data) {
  const res = await fetch('/api/booking', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
}`;

  const currentCode = activeCodeTab === 'backend' ? backendCode : frontendCode;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1600);
    } catch (_) {}
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-24 sm:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: UI/UX & Product Design */}
        <article className="group flex flex-col justify-between h-[360px] p-5 rounded-xl bg-surface border border-border-subtle hover:border-border-strong transition-all duration-200">
          <div className="relative flex-1 rounded-lg overflow-hidden bg-codeblock border border-border-subtle p-3 select-none">
            {/* Phone mockup inside canvas */}
            <div className="absolute left-4 top-4 w-[124px] h-[216px] rounded-[18px] bg-[#F4F2FF] text-[#1A1A1A] p-2.5 flex flex-col gap-2 shadow-sm font-sans">
              <div className="flex justify-between items-center">
                <span className="w-3.5 h-[3px] rounded-full bg-[#1A1A1A]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#A689FA]" />
              </div>
              <div className="h-[68px] rounded-lg bg-gradient-to-br from-[#6C28D9] via-[#E84A8A] to-[#FFD085]" />
              <div className="space-y-1">
                <span className="block h-1.5 w-16 rounded-full bg-[#1A1A1A]" />
                <span className="block h-1 w-20 rounded-full bg-[#1A1A1A]/30" />
                <span className="block h-1 w-14 rounded-full bg-[#1A1A1A]/30" />
              </div>
              <div className="flex gap-1 text-[7px] font-medium pt-0.5">
                <span className="px-1.5 py-0.5 rounded-full bg-[#6C28D9] text-white">
                  Audio
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-black/10">
                  Video
                </span>
              </div>
              <div className="mt-auto h-5 rounded-full bg-[#1A1A1A] text-white text-[8px] font-semibold flex items-center justify-center">
                Buy Now
              </div>
            </div>

            {/* Selection Outline */}
            <div
              className="absolute left-3 top-3 w-[132px] h-[224px] border-[1.5px] border-accent pointer-events-none"
              aria-hidden="true"
            >
              <i className="absolute -left-1 -top-1 w-2 h-2 bg-white border border-accent rounded-xs" />
              <i className="absolute -right-1 -top-1 w-2 h-2 bg-white border border-accent rounded-xs" />
              <i className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-accent rounded-xs" />
              <i className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-accent rounded-xs" />
            </div>

            {/* Size tooltip badge */}
            <span className="absolute left-10 top-[242px] px-1.5 py-0.5 rounded bg-accent text-white font-mono text-[9px] tabular-nums">
              132 × 228
            </span>

            {/* Cursor */}
            <div className="absolute left-[110px] top-[140px] flex flex-col gap-0.5 text-twilight z-10">
              <MousePointer2 className="w-3.5 h-3.5 fill-current" />
              <span className="px-1.5 py-0.5 rounded-full bg-twilight text-black text-[9px] font-semibold font-sans">
                Renaldi
              </span>
            </div>

            {/* Mini Inspector Panel */}
            <div className="absolute left-[162px] right-3 top-3 p-2.5 rounded-md bg-surface-raised border border-border-strong flex flex-col gap-1.5 text-[9px] font-mono text-text-tertiary">
              <div className="flex justify-between items-center pb-1 border-b border-border-subtle">
                <span className="font-sans font-semibold text-foreground text-[10px]">
                  Design
                </span>
                <span className="text-accent text-[9px]">Auto layout</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Fill</span>
                <span className="text-foreground inline-flex items-center gap-1">
                  <i className="w-2 h-2 rounded-xs bg-[#F4F2FF] border border-border-strong inline-block" />
                  #F4F2FF
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Radius</span>
                <span className="text-foreground">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Gap / Pad</span>
                <span className="text-foreground">8 · 10</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Font</span>
                <span className="text-foreground">Geist 600</span>
              </div>
              <div className="flex gap-1 pt-1">
                <i className="flex-1 h-3 rounded-xs bg-[#6C28D9]" />
                <i className="flex-1 h-3 rounded-xs bg-[#A689FA]" />
                <i className="flex-1 h-3 rounded-xs bg-[#E84A8A]" />
                <i className="flex-1 h-3 rounded-xs bg-[#FFD085]" />
                <i className="flex-1 h-3 rounded-xs bg-[#1A1A1A]" />
              </div>
            </div>

            {/* Bottom mini tool components */}
            <div className="absolute left-[162px] right-3 top-[178px] flex items-center justify-between gap-1.5 p-2 rounded-md bg-surface-raised border border-border-strong">
              <Component className="w-3.5 h-3.5 text-twilight flex-shrink-0" />
              <span className="px-2 py-0.5 rounded-full bg-foreground text-background text-[8px] font-semibold">
                Primary
              </span>
              <span className="w-5 h-3 rounded-full bg-accent p-0.5 flex justify-end items-center">
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
              <span className="w-3.5 h-3.5 rounded bg-twilight flex items-center justify-center text-black">
                <Check className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
            </div>
          </div>

          <footer className="flex justify-between items-center pt-3 text-sm">
            <span className="text-text-secondary font-medium">
              UI/UX &amp; Product Design
            </span>
            <Link
              href="#work"
              className="inline-flex items-center gap-1 text-foreground hover:text-accent font-medium text-xs transition-colors"
            >
              <span>Design</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>
        </article>

        {/* Card 2: Full-Stack Web Engineering */}
        <article className="group flex flex-col justify-between h-[360px] p-5 rounded-xl bg-surface border border-border-subtle hover:border-border-strong transition-all duration-200">
          <div className="relative flex-1 rounded-lg overflow-hidden bg-codeblock border border-border-strong flex flex-col">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle bg-surface-raised/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-surface p-0.5 rounded border border-border-subtle text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('backend')}
                  className={cn(
                    'px-2 py-0.5 rounded transition-colors',
                    activeCodeTab === 'backend'
                      ? 'bg-surface-raised text-foreground font-semibold'
                      : 'text-text-tertiary hover:text-foreground'
                  )}
                >
                  api.php
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('frontend')}
                  className={cn(
                    'px-2 py-0.5 rounded transition-colors',
                    activeCodeTab === 'frontend'
                      ? 'bg-surface-raised text-foreground font-semibold'
                      : 'text-text-tertiary hover:text-foreground'
                  )}
                >
                  action.ts
                </button>
              </div>

              {/* Copy code button */}
              <button
                type="button"
                onClick={handleCopyCode}
                title="Copy snippet"
                className="text-text-tertiary hover:text-foreground p-1 transition-colors"
              >
                {copiedCode ? (
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-3 font-mono text-[11px] sm:text-xs leading-relaxed text-text-secondary overflow-auto flex-1">
              {activeCodeTab === 'backend' ? (
                <pre className="m-0">
                  <code>
                    <span className="text-[#B392F0]">Route</span>
                    <span className="text-foreground">::</span>
                    <span className="text-[#B392F0]">post</span>
                    <span className="text-foreground">(</span>
                    <span className="text-[#9ECBFF]">&apos;/booking&apos;</span>
                    <span className="text-foreground">, [</span>
                    {'\n  '}
                    <span className="text-foreground">BookingController</span>
                    <span className="text-[#F97583]">::class</span>
                    <span className="text-foreground">,</span>
                    {'\n  '}
                    <span className="text-[#9ECBFF]">&apos;checkout&apos;</span>
                    {'\n'}
                    <span className="text-foreground">]);</span>
                    {'\n\n'}
                    <span className="text-text-tertiary">
                      &#47;&#47; Next.js frontend consumer
                    </span>
                    {'\n'}
                    <span className="text-[#F97583]">await</span>{' '}
                    <span className="text-[#B392F0]">fetch</span>
                    <span className="text-foreground">(</span>
                    <span className="text-[#9ECBFF]">`/api/booking`</span>
                    <span className="text-foreground">)</span>
                  </code>
                </pre>
              ) : (
                <pre className="m-0">
                  <code>
                    <span className="text-[#F97583]">export async function</span>{' '}
                    <span className="text-[#B392F0]">createBooking</span>
                    <span className="text-foreground">(data) &#123;</span>
                    {'\n  '}
                    <span className="text-[#F97583]">const</span> res ={' '}
                    <span className="text-[#F97583]">await</span>{' '}
                    <span className="text-[#B392F0]">fetch</span>
                    <span className="text-foreground">(</span>
                    <span className="text-[#9ECBFF]">&apos;/api/booking&apos;</span>
                    <span className="text-foreground">);</span>
                    {'\n  '}
                    <span className="text-[#F97583]">return</span> res.
                    <span className="text-[#B392F0]">json</span>();{'\n'}
                    <span className="text-foreground">&#125;</span>
                  </code>
                </pre>
              )}
            </div>
          </div>

          <footer className="flex justify-between items-center pt-3 text-sm">
            <span className="text-text-secondary font-medium">
              Full-Stack Web Engineering
            </span>
            <Link
              href="#stack"
              className="inline-flex items-center gap-1 text-foreground hover:text-accent font-medium text-xs transition-colors"
            >
              <span>Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>
        </article>

        {/* Card 3: Mobile App Development */}
        <article className="group flex flex-col justify-between h-[360px] p-5 rounded-xl bg-surface border border-border-subtle hover:border-border-strong transition-all duration-200">
          <div className="relative flex-1 rounded-lg overflow-hidden bg-codeblock border border-border-subtle">
            <Image
              src="/images/project-2.jpg"
              alt="Audix mobile app screens"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <footer className="flex justify-between items-center pt-3 text-sm">
            <span className="text-text-secondary font-medium">
              Mobile App Development
            </span>
            <Link
              href="#work"
              className="inline-flex items-center gap-1 text-foreground hover:text-accent font-medium text-xs transition-colors"
            >
              <span>Ship</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>
        </article>
      </div>
    </section>
  );
}

