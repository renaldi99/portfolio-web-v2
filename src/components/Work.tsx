'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { ProjectCategory, Project } from '@/types';
import { cn } from '@/lib/utils';

export function Work() {
  const [filter, setFilter] = React.useState<ProjectCategory>('all');

  const categories = React.useMemo<{ label: string; value: ProjectCategory }[]>(
    () => [
      { label: `All · ${PROJECTS.length}`, value: 'all' },
      { label: 'Web', value: 'web' },
      { label: 'Mobile', value: 'mobile' },
      { label: 'Landing Page', value: 'landing' },
    ],
    []
  );

  const filteredProjects = React.useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const gridProjects = filteredProjects.filter((p) => !p.featured || filter !== 'all');

  // When filtering by specific category where featured matches (e.g. 'web'),
  // we can show featured project as hero card, and the rest in grid
  const showFeaturedHero = Boolean(featuredProject);

  return (
    <section
      id="work"
      className="w-full border-t border-border-subtle py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary block mb-3">
              02 / Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-[-0.035em] leading-[1.08] text-foreground">
              The work I do,
              <br />
              and businesses I help.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex items-center gap-1 p-1 rounded-full bg-surface border border-border-subtle shadow-xs self-start md:self-auto overflow-x-auto max-w-full"
            role="tablist"
            aria-label="Filter projects"
          >
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setFilter(cat.value)}
                  className={cn(
                    'h-8 px-4 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive
                      ? 'bg-surface-raised text-foreground font-semibold shadow-xs'
                      : 'text-fog hover:text-foreground'
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Card (if featured project matches current filter) */}
        {showFeaturedHero && featuredProject && (
          <article className="group mb-8 rounded-2xl overflow-hidden bg-surface border border-border-subtle hover:border-border-strong transition-all duration-200 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] shadow-xs">
            <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden bg-codeblock border-b lg:border-b-0 lg:border-r border-border-subtle">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs tracking-wider uppercase text-text-tertiary">
                    {featuredProject.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-accent-soft text-accent text-xs font-medium border border-accent/20">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground mb-4">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                  {featuredProject.description}
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-4 border-t border-border-subtle">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-raised border border-border-subtle text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-150 self-start shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>See Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => !(showFeaturedHero && p.id === featuredProject?.id))
            .map((project) => {
              const CardContent = (
                <div className="group flex flex-col gap-3.5 h-full">
                  {/* Media */}
                  <div className="relative h-[260px] sm:h-[280px] rounded-xl overflow-hidden bg-codeblock border border-border-subtle group-hover:border-border-strong transition-all duration-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Eyebrow */}
                  <span className="font-mono text-[11px] tracking-wider uppercase text-text-tertiary">
                    {project.categoryLabel}
                  </span>

                  {/* Title & Arrow */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-150">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-text-secondary flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-surface-raised border border-border-subtle text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );

              if (project.link) {
                return (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
                  >
                    {CardContent}
                  </a>
                );
              }

              return (
                <div key={project.id} className="cursor-default">
                  {CardContent}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

