"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BadgePercent, Clock3, BookOpen } from "lucide-react";

interface SupportSummaryProps {
  annualTotal: number;
  monthlyTotal: number;
  programCount: number;
  timeCount?: number;
  supportCount?: number;
  learningCount?: number;
  amountProgramTitles?: string[];
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ja-JP").format(amount);
}

export function SupportSummaryCard({
  annualTotal,
  monthlyTotal,
  programCount,
  timeCount = 0,
  supportCount = 0,
  learningCount = 0,
  amountProgramTitles = [],
}: SupportSummaryProps) {
  const hasMoneySupport = annualTotal > 0 || monthlyTotal > 0;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          関連する支援まとめ
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          利用できる可能性がある制度は{" "}
          <span className="font-bold text-foreground text-xl md:text-2xl">
            {programCount}
          </span>{" "}
          件
        </p>
      </div>

      {hasMoneySupport ? (
        <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-3">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">主な現金給付の年間参考額</span>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-emerald-600 tracking-tight">
              約 {formatCurrency(annualTotal)}
              <span className="text-2xl md:text-4xl ml-1">円</span>
            </p>
            <p className="text-sm md:text-base text-emerald-700 mt-3">
              入力した年齢だけで計算した参考額です。受給を保証するものではありません。
            </p>
            {amountProgramTitles.length > 0 && (
              <p className="mt-3 text-xs leading-relaxed text-emerald-800">
                この参考額に含む制度：{amountProgramTitles.join("、")}
              </p>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className="border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-gray-50 shadow-sm">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-500 mb-3">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">年間の継続現金給付額</span>
            </div>
            <p className="text-lg md:text-xl font-medium text-slate-600">
              金額情報は準備中です
            </p>
            <p className="text-sm text-slate-500 mt-2">
              条件に応じて自動計算される支援を順次追加します
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-rose-50 border-rose-200 shadow-sm">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <BadgePercent className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">割引・助成・無償化</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-rose-700 tracking-tight">
              {supportCount}
              <span className="text-sm md:text-base ml-1">件</span>
            </p>
            <p className="text-xs text-rose-600 mt-2">
              お店の優待・保育料・授業料など
            </p>
          </CardContent>
        </Card>

        <Card className="bg-violet-50 border-violet-200 shadow-sm">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center gap-2 text-violet-600 mb-2">
              <Clock3 className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">時間支援</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-violet-700 tracking-tight">
              {timeCount}
              <span className="text-sm md:text-base ml-1">件</span>
            </p>
            <p className="text-xs text-violet-600 mt-2">
              育休・時短・休暇など
            </p>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 border-amber-200 shadow-sm">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center gap-2 text-amber-600 mb-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">相談・学び</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700 tracking-tight">
              {learningCount}
              <span className="text-sm md:text-base ml-1">件</span>
            </p>
            <p className="text-xs text-amber-600 mt-2">
              講座・相談など
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        ※ 所得・就労・扶養・在住期間など、年齢以外の条件は反映していません。
        金額と対象可否は各制度の公式サイトでご確認ください。
      </p>
    </div>
  );
}
