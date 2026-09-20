"use client";

import { useState, useMemo } from "react";
import { LocationForm } from "@/components/location-form";
import { CategoryTabs, type CategoryFilter } from "@/components/category-tabs";
import { SearchResults } from "@/components/search-results";
import { SupportSummaryCard } from "@/components/support-summary";
import { ShareButtons } from "@/components/share-buttons";
import {
  getProgramsForFamily,
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

  const handlePrefectureChange = (value: string) => {
    setPrefecture(value);
    setSearched(false);
    setResults(null);
  };

  const handleChildCountChange = (value: number) => {
  setChildCount(value);
  setChildrenAges(Array.from({ length: value }, (_, i) => childrenAges[i] ?? -1));
  setSearched(false);
  setResults(null);
};

const handleChildAgeChange = (index: number, value: number) => {
  setChildrenAges((prev) => {
    const next = [...prev];
    next[index] = value;
    return next;
  });
  setSearched(false);
  setResults(null);
};

  const handleSearch = () => {
  const hasValidChildren =
    childCount > 0 &&
    childrenAges.length === childCount &&
    childrenAges.every((age) => age >= 0 && age <= 18);

  if (!prefecture || !hasValidChildren) return;

  const searchResults = getProgramsForFamily(prefecture, childrenAges);
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

  const timeCount = results.filter((p) => p.category === "time").length;
  const supportCount = results.filter((p) => p.category === "cost").length;
  const learningCount = results.filter((p) => p.category === "learning").length;

  return {
    annualTotal,
    monthlyTotal,
    programCount: results.length,
    timeCount,
    supportCount,
    learningCount,
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
              <h1 className="text-lg font-bold">もらえる・使える支援ナビ</h1>
              <p className="text-xs text-muted-foreground">
                国と対象地域の子育て支援をまとめて確認
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
              <span className="text-sm font-medium">東北6県・関東7都県の情報を公開中</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance leading-tight">
              子どもの年齢から、
              <br className="sm:hidden" />
              <span className="text-emerald-600">使えるかもしれない</span>支援を確認
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
              対象地域に住む、子どもがいる家庭向けです。
              お住まいの都県と子どもの年齢から、国・都県の関連制度を絞り込みます。
            </p>
          </section>
        )}

        <section className="mb-4">
          <LocationForm
            prefecture={prefecture}
            childCount={childCount}
            childrenAges={childrenAges}
            onPrefectureChange={handlePrefectureChange}
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
                programCount={summary.programCount}
                timeCount={summary.timeCount}
                supportCount={summary.supportCount}
                learningCount={summary.learningCount}
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
                  条件を確認し、公式サイトから手続きへ進めます
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
                お住まいの都県と子どもの情報を入力してください
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                選んだ地域で利用できる可能性がある制度を表示します。
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              ※ 掲載情報と金額は参考です。所得・就労・在住期間などの条件は、必ず公式サイトでご確認ください。
            </p>
            <p className="mb-2">情報確認日：2026年9月20日</p>
            <p>
              &copy; {new Date().getFullYear()} 子育て支援ナビ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
