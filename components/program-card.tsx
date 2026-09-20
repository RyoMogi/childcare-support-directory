"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ProgramGroup } from "@/lib/support-data";
import {
  Building2,
  LandPlot,
  ExternalLink,
  Coins,
  CalendarClock,
  FileCheck,
  ArrowRight,
} from "lucide-react";

interface ProgramCardProps {
  program: ProgramGroup;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const getLevelInfo = (level: ProgramGroup["level"]) => {
    switch (level) {
      case "national":
        return {
          label: "国",
          icon: Building2,
          className: "bg-slate-100 text-slate-700 border-slate-200",
        };
      case "prefecture":
        return {
          label: "都道府県",
          icon: LandPlot,
          className: "bg-slate-100 text-slate-700 border-slate-200",
        };
    }
  };

  const getCategoryStyle = (category: ProgramGroup["category"]) => {
    switch (category) {
      case "cash":
        return {
          border: "border-l-emerald-500",
          valueBg: "bg-emerald-50",
          valueText: "text-emerald-700",
        };
      case "cost":
        return {
          border: "border-l-blue-500",
          valueBg: "bg-blue-50",
          valueText: "text-blue-700",
        };
      case "time":
        return {
          border: "border-l-violet-500",
          valueBg: "bg-violet-50",
          valueText: "text-violet-700",
        };
      case "learning":
        return {
          border: "border-l-amber-500",
          valueBg: "bg-amber-50",
          valueText: "text-amber-700",
        };
      default:
        return {
          border: "border-l-slate-400",
          valueBg: "bg-slate-50",
          valueText: "text-slate-700",
        };
    }
  };

  const levelInfo = getLevelInfo(program.level);
  const categoryStyle = getCategoryStyle(program.category);
  const LevelIcon = levelInfo.icon;

  return (
    <Card className={`h-full border-l-4 ${categoryStyle.border} transition-shadow hover:shadow-lg`}>
      <CardHeader className="pb-3 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg leading-tight text-balance">
            {program.title}
          </h3>
          <Badge variant="outline" className={`${levelInfo.className} shrink-0 text-sm`}>
            <LevelIcon className="mr-1 h-4 w-4" />
            {levelInfo.label}
          </Badge>
        </div>

        <div className={`${categoryStyle.valueBg} ${categoryStyle.valueText} px-3 py-2 rounded-lg`}>
          <p className="font-bold text-base">{program.shortValue}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        {program.feeSummary && (
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Coins className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium text-primary">金額・負担感</p>
            </div>
            <p className="text-sm font-medium">{program.feeSummary}</p>

            {program.benefitRateNote && (
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                {program.benefitRateNote}
              </p>
            )}
          </div>
        )}

        {program.timingText && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">対象時期</p>
            </div>
            <p className="text-sm leading-relaxed">{program.timingText}</p>
          </div>
        )}

        {program.conditionText && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">対象条件</p>
            <p className="text-sm leading-relaxed">{program.conditionText}</p>
          </div>
        )}

        {program.flowSummary && (
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <FileCheck className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium text-primary">利用までの流れ</p>
            </div>
            <p className="text-sm font-medium">{program.flowSummary}</p>
          </div>
        )}

        <div className="bg-slate-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-4 w-4 text-primary" />
            <p className="text-xs font-medium text-primary">含まれる制度</p>
          </div>
          <ul className="space-y-1">
            {program.programs.map((item) => (
              <li key={item.title}>
                <Button asChild variant="link" className="h-auto justify-start p-0 text-left text-sm">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                    <ExternalLink className="ml-1 h-3.5 w-3.5 shrink-0" />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          年齢から関連する可能性を表示しています。所得・就労状況などの条件は公式サイトでご確認ください。
        </p>
      </CardContent>
    </Card>
  );
}
