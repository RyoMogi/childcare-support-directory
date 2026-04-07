"use client";

import { useState, useMemo } from "react";
import { LocationForm } from "@/components/location-form";
import { CategoryTabs, type CategoryFilter } from "@/components/category-tabs";
import { SearchResults } from "@/components/search-results";
import { SupportSummaryCard } from "@/components/support-summary";
import { ShareButtons } from "@/components/share-buttons";
import {
  getProgramsByPrefecture,
  filterByCategory,
  type ProgramGroup,
} from "@/lib/support-data";
import { Baby, Coins } from "lucide-react";

export default function Home() {
  const [prefecture, setPrefecture] = useState("");
  const [childCount, setChildCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<ProgramGroup[] | null>(null);

  const [selectedCategories, setSelectedCategories] = useState<CategoryFilter[]>(["all"]);

  const handleChildCountChange = (value: number) => {
  setChildCount(value);
  setChildrenAges(Array.from({ length: value }, (_, i) => childrenAges[i] ?? -1));
};

const handleChildAgeChange = (index: number, value: number) => {
  setChildrenAges((prev) => {
    const next = [...prev];
    next[index] = value;
    return next;
  });
};

  const handleSearch = () => {
  const hasValidChildren =
    childCount > 0 &&
    childrenAges.length === childCount &&
    childrenAges.every((age) => age >= 0);

  if (!prefecture || !hasValidChildren) return;

  const searchResults = getProgramsByPrefecture(prefecture);
  setResults(searchResults);
  setSearched(true);
};

  const filteredResults = useMemo(() => {
    if (!results) return [];
    return filterByCategory(results, selectedCategories);
  }, [results, selectedCategories]);

  const summary = useMemo(() => {
  if (!results) return null;

  const monthlyTotal = results.reduce((sum, p) => {
    if (p.calculateMonthlyAmount) {
      return sum + p.calculateMonthlyAmount(childrenAges);
    }
    return sum + (p.monthlyAmount ?? 0);
  }, 0);

  const annualTotal = results.reduce((sum, p) => {
    if (p.calculateAnnualAmount) {
      return sum + p.calculateAnnualAmount(childrenAges);
    }
    return sum + (p.annualAmount ?? 0);
  }, 0);

  const lumpSumTotal = results.reduce((sum, p) => {
    if (p.calculateLumpSumAmount) {
      return sum + p.calculateLumpSumAmount(childrenAges);
    }
    return sum + (p.lumpSumAmount ?? 0);
  }, 0);

  const timeCount = results.filter((p) => p.category === "time").length;
  const supportCount = results.filter((p) => p.category === "cost").length;

  return {
    annualTotal,
    monthlyTotal,
    lumpSumTotal,
    programCount: results.length,
    timeCount,
    supportCount,
  };
}, [results, childrenAges]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100">
              <Baby className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold">子育て支援ナビ</h1>
              <p className="text-xs text-muted-foreground">
                あなたが受けられる支援を見つける
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!searched && (
          <section className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-6">
              <Coins className="h-4 w-4" />
              <span className="text-sm font-medium">申請しないともらえません</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance leading-tight">
              あなたの場合、
              <br className="sm:hidden" />
              <span className="text-emerald-600">いくら</span>支援を受けられる？
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
              居住地と子どもの情報を入力するだけで、
              あなたが対象の子育て支援制度がすぐにわかります。
            </p>
          </section>
        )}

        <section className="mb-4">
          <LocationForm
            prefecture={prefecture}
            childCount={childCount}
            childrenAges={childrenAges}
            onPrefectureChange={setPrefecture}
            onChildCountChange={handleChildCountChange}
            onChildAgeChange={handleChildAgeChange}
            onSearch={handleSearch}
          />
        </section>

        {searched && filteredResults && summary && (
          <div className="space-y-10">
            <section className="max-w-xl mx-auto">
              <SupportSummaryCard
                annualTotal={summary.annualTotal}
                monthlyTotal={summary.monthlyTotal}
                lumpSumTotal={summary.lumpSumTotal}
                programCount={summary.programCount}
                timeCount={summary.timeCount}
                supportCount={summary.supportCount}
              />
            </section>

            <section className="max-w-xl mx-auto">
              <ShareButtons
                prefecture={prefecture}
                annualTotal={summary.annualTotal}
              />
            </section>

            <section className="pt-4">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold mb-2">制度の詳細</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  カードをタップして申請方法を確認しましょう
                </p>
              </div>
              <CategoryTabs
                selected={selectedCategories}
                onChange={setSelectedCategories}
              />
            </section>

            <section>
              <SearchResults results={filteredResults} />
            </section>
          </div>
        )}

        {!searched && (
          <section className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-50 flex items-center justify-center">
                <Coins className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">
                まずは居住地を選択してください
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                上のフォームで情報を入力し、
                「支援額を確認する」ボタンをクリックしてください。
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              ※ 掲載情報は参考情報です。詳細は必ず公式サイトをご確認ください。
            </p>
            <p>
              &copy; {new Date().getFullYear()} 子育て支援ナビ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}