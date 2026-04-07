"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  prefecture: string;
  municipality: string;
  annualTotal: number;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ja-JP").format(amount);
}

export function ShareButtons({
  prefecture,
  municipality,
  annualTotal,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = annualTotal > 0
    ? `${prefecture}${municipality ? ` ${municipality}` : ""}で年間約${formatCurrency(annualTotal)}円の子育て支援が受けられることがわかりました！知らないと損するかも...`
    : `${prefecture}${municipality ? ` ${municipality}` : ""}の子育て支援制度を調べました！`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleLineShare = () => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(lineUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Card className="bg-slate-50 border-slate-200">
      <CardContent className="py-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">この支援、知らない人が多いです。</span>
            <span className="font-medium">家族や友人にシェア</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleTwitterShare}
              className="gap-2 bg-background"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLineShare}
              className="gap-2 bg-background"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 5.83 2 10.5c0 4.13 3.54 7.57 8.32 8.33.32.07.76.21.87.49.1.25.06.65.03.91l-.14.87c-.04.27-.2 1.05.91.57 1.12-.48 6.04-3.56 8.24-6.1C21.91 13.68 22 12.13 22 10.5 22 5.83 17.52 2 12 2zm-3 11.5H7v-5h2v5zm4 0h-2v-5h2v5zm4 0h-2v-5h2v5z" />
              </svg>
              LINE
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="gap-2 bg-background"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              {copied ? "コピー済" : "コピー"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
