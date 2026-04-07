"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Banknote, BadgePercent, Clock3, BookOpen } from "lucide-react";

interface SupportSummaryProps {
  annualTotal: number;
  monthlyTotal: number;
  lumpSumTotal: number;
  programCount: number;
  timeCount?: number;
  supportCount?: number;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ja-JP").format(amount);
}

export function SupportSummaryCard({
  annualTotal,
  monthlyTotal,
  lumpSumTotal,
  programCount,
  timeCount = 0,
  supportCount = 0,
}: SupportSummaryProps) {
  const hasMoneySupport =
    annualTotal > 0 || monthlyTotal > 0 || lumpSumTotal > 0;

  const cashTotal = monthlyTotal + lumpSumTotal;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          あなたの支援まとめ
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          対象となる制度は{" "}
          <span className="font-bold text-foreground text-xl md:text-2xl">
            {programCount}
          </span>{" "}
          件あります
        </p>
      </div>

      {hasMoneySupport ? (
        <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-3">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">年間支援額</span>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-emerald-600 tracking-tight">
              約 {formatCurrency(annualTotal)}
              <span className="text-2xl md:text-4xl ml-1">円</span>
            </p>
            <p className="text-sm md:text-base text-emerald-700 mt-3">
              の支援対象です
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-gray-50 shadow-sm">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-500 mb-3">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">年間支援額</span>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-blue-50 border-blue-200 shadow-sm">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Banknote className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">現金給付</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-blue-700 tracking-tight">
              {cashTotal > 0 ? formatCurrency(cashTotal) : "—"}
              {cashTotal > 0 && <span className="text-sm md:text-base ml-1">円</span>}
            </p>
            <p className="text-xs text-blue-600 mt-2">
              月額支援 + 一時金
            </p>
          </CardContent>
        </Card>

        <Card className="bg-rose-50 border-rose-200 shadow-sm">
          <CardContent className="pt-5 pb-5">
            <div className="flex items-center gap-2 text-rose-600 mb-2">
              <BadgePercent className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">助成・無償化</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-rose-700 tracking-tight">
              {supportCount}
              <span className="text-sm md:text-base ml-1">件</span>
            </p>
            <p className="text-xs text-rose-600 mt-2">
              医療費・保育料・授業料など
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
              <span className="text-xs md:text-sm font-medium">準備・学び</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700 tracking-tight">
              0
              <span className="text-sm md:text-base ml-1">件</span>
            </p>
            <p className="text-xs text-amber-600 mt-2">
              講座・相談・プレコンなど
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        ※ 金額は概算です。詳細は各制度の公式サイトをご確認ください。
      </p>
    </div>
  );
}