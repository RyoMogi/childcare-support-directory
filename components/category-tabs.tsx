"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Banknote, Ticket, Clock3, BookOpen } from "lucide-react";

export type CategoryFilter = "all" | "cash" | "cost" | "time" | "learning";

interface CategoryTabsProps {
  selected: CategoryFilter[];
  onChange: (categories: CategoryFilter[]) => void;
}

const categoryOptions: {
  value: CategoryFilter;
  label: string;
  icon?: React.ReactNode;
}[] = [
  { value: "all", label: "すべて" },
  {
    value: "cash",
    label: "現金給付",
    icon: <Banknote className="h-4 w-4" />,
  },
  {
    value: "cost",
    label: "助成・無償化",
    icon: <Ticket className="h-4 w-4" />,
  },
  {
    value: "time",
    label: "時間支援",
    icon: <Clock3 className="h-4 w-4" />,
  },
  {
    value: "learning",
    label: "準備・学び",
    icon: <BookOpen className="h-4 w-4" />,
  },
];

export function CategoryTabs({
  selected,
  onChange,
}: CategoryTabsProps) {
  const currentValue = selected[0] ?? "all";

  return (
    <Tabs
      value={currentValue}
      onValueChange={(value) => onChange([value as CategoryFilter])}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-transparent p-0">
        {categoryOptions.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className="flex items-center justify-center gap-2 rounded-xl border bg-card px-4 py-3 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {option.icon}
            <span>{option.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}