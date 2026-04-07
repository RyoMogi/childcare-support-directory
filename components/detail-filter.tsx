"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, ChevronUp, Plus, X } from "lucide-react";

export interface DetailFilterValues {
  childrenAges: number[];
  income: number | null;
  isSingleParent: boolean;
  hasDisabledChild: boolean;
}

interface DetailFilterProps {
  values: DetailFilterValues;
  onChange: (values: DetailFilterValues) => void;
}

export function DetailFilter({ values, onChange }: DetailFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const addChild = () => {
    onChange({
      ...values,
      childrenAges: [...values.childrenAges, 0],
    });
  };

  const removeChild = (index: number) => {
    const newAges = values.childrenAges.filter((_, i) => i !== index);
    onChange({
      ...values,
      childrenAges: newAges,
    });
  };

  const updateChildAge = (index: number, age: number) => {
    const newAges = [...values.childrenAges];
    newAges[index] = age;
    onChange({
      ...values,
      childrenAges: newAges,
    });
  };

  const handleIncomeChange = (value: string) => {
    const income = value === "" ? null : parseInt(value, 10);
    onChange({
      ...values,
      income: isNaN(income as number) ? null : income,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
      >
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
        <span>詳細条件を設定（任意）</span>
      </button>

      {isOpen && (
        <div className="mt-4 bg-card rounded-xl p-6 border space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* 子どもの年齢（複数） */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">子どもの年齢</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addChild}
                className="h-8"
              >
                <Plus className="h-4 w-4 mr-1" />
                子どもを追加
              </Button>
            </div>
            {values.childrenAges.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                子どもを追加すると、年齢に合った制度のみ表示されます
              </p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {values.childrenAges.map((age, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {index + 1}人目
                    </span>
                    <Select
                      value={age.toString()}
                      onValueChange={(v) => updateChildAge(index, parseInt(v, 10))}
                    >
                      <SelectTrigger className="flex-1 h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0歳</SelectItem>
                        {Array.from({ length: 18 }, (_, i) => i + 1).map((a) => (
                          <SelectItem key={a} value={a.toString()}>
                            {a}歳
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 shrink-0"
                      onClick={() => removeChild(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 年収 */}
          <div className="space-y-2">
            <Label htmlFor="income" className="text-sm font-medium">
              世帯年収（任意）
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="income"
                type="number"
                placeholder="例：500"
                value={values.income ?? ""}
                onChange={(e) => handleIncomeChange(e.target.value)}
                className="w-32"
              />
              <span className="text-sm text-muted-foreground">万円</span>
            </div>
            <p className="text-xs text-muted-foreground">
              所得制限のある制度の対象判定に使用します
            </p>
          </div>

          {/* ひとり親・障害児 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <Label htmlFor="single-parent" className="text-sm cursor-pointer">
                ひとり親である
              </Label>
              <Switch
                id="single-parent"
                checked={values.isSingleParent}
                onCheckedChange={(checked) =>
                  onChange({ ...values, isSingleParent: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <Label htmlFor="disabled-child" className="text-sm cursor-pointer">
                障害のある子どもがいる
              </Label>
              <Switch
                id="disabled-child"
                checked={values.hasDisabledChild}
                onCheckedChange={(checked) =>
                  onChange({ ...values, hasDisabledChild: checked })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
