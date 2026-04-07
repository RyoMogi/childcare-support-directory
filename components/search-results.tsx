"use client";

import { ProgramCard } from "@/components/program-card";
import type { ProgramGroup } from "@/lib/support-data";
import { Banknote, BadgePercent, Clock3, BookOpen } from "lucide-react";

interface SearchResultsProps {
  results: ProgramGroup[];
}

interface SectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  programs: ProgramGroup[];
  colorClass: string;
}

function sortPrograms(programs: ProgramGroup[]) {
  return [...programs].sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
  );
}

function ResultSection({
  title,
  description,
  icon,
  programs,
  colorClass,
}: SectionProps) {
  if (programs.length === 0) return null;

  const sortedPrograms = sortPrograms(programs);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClass}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="ml-auto rounded bg-muted px-2 py-1 text-sm font-medium text-muted-foreground">
          {programs.length}件
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}

export function SearchResults({ results }: SearchResultsProps) {
  const cashPrograms = results.filter((p) => p.category === "cash");
  const costPrograms = results.filter((p) => p.category === "cost");
  const timePrograms = results.filter((p) => p.category === "time");
  const learningPrograms = results.filter((p) => p.category === "learning");

  return (
    <div className="space-y-10">
      <ResultSection
        title="現金給付"
        description="現金として受け取れる手当や給付"
        icon={<Banknote className="h-5 w-5 text-emerald-600" />}
        programs={cashPrograms}
        colorClass="bg-emerald-100"
      />

      <ResultSection
        title="助成・無償化"
        description="費用負担を軽くする助成や無償化"
        icon={<BadgePercent className="h-5 w-5 text-blue-600" />}
        programs={costPrograms}
        colorClass="bg-blue-100"
      />

      <ResultSection
        title="時間支援"
        description="休業・休暇・時短など時間面の支援"
        icon={<Clock3 className="h-5 w-5 text-violet-600" />}
        programs={timePrograms}
        colorClass="bg-violet-100"
      />

      <ResultSection
        title="準備・学び"
        description="講座や相談など、知識や準備を支える支援"
        icon={<BookOpen className="h-5 w-5 text-amber-600" />}
        programs={learningPrograms}
        colorClass="bg-amber-100"
      />
    </div>
  );
}