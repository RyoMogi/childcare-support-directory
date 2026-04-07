"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { prefectures } from "@/lib/support-data";
import { Sparkles } from "lucide-react";

interface LocationFormProps {
  prefecture: string;
  childCount: number;
  childrenAges: number[];
  onPrefectureChange: (value: string) => void;
  onChildCountChange: (value: number) => void;
  onChildAgeChange: (index: number, value: number) => void;
  onSearch: () => void;
}

export function LocationForm({
  prefecture,
  childCount,
  childrenAges,
  onPrefectureChange,
  onChildCountChange,
  onChildAgeChange,
  onSearch,
}: LocationFormProps) {
  const isValid =
    prefecture !== "" &&
    childCount > 0 &&
    childrenAges.length === childCount &&
    childrenAges.every((age) => age >= 0);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border space-y-5">
        <div className="space-y-2">
          <Label htmlFor="prefecture" className="text-sm font-medium">
            都道府県
          </Label>
          <Select value={prefecture} onValueChange={onPrefectureChange}>
            <SelectTrigger id="prefecture" className="w-full bg-background h-11">
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              {prefectures.map((pref) => (
                <SelectItem key={pref} value={pref}>
                  {pref}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="childCount" className="text-sm font-medium">
            子どもの人数
          </Label>
          <Select
            value={childCount > 0 ? String(childCount) : ""}
            onValueChange={(value) => onChildCountChange(Number(value))}
          >
            <SelectTrigger id="childCount" className="w-full bg-background h-11">
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num}人
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {childCount > 0 && (
          <div className="space-y-3">
            <Label className="text-sm font-medium">それぞれの子どもの年齢</Label>
            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: childCount }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Label
                    htmlFor={`child-age-${index}`}
                    className="text-xs text-muted-foreground"
                  >
                    {index + 1}人目
                  </Label>
                  <Input
                    id={`child-age-${index}`}
                    type="number"
                    min={0}
                    max={18}
                    placeholder="年齢を入力"
                    value={childrenAges[index] >= 0 ? childrenAges[index] : ""}
                    onChange={(e) =>
                      onChildAgeChange(
                        index,
                        e.target.value === "" ? -1 : Number(e.target.value)
                      )
                    }
                    className="h-11"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={onSearch}
          disabled={!isValid}
          className="w-full mt-2 h-12 text-base font-semibold"
          size="lg"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          支援を確認する
        </Button>
      </div>
    </div>
  );
}