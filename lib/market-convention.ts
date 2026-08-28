import type { MarketConvention } from "@/types/market";

export const DEFAULT_MARKET_CONVENTION: MarketConvention = "international";

export const marketConventionLabels: Record<MarketConvention, string> = {
  international: "国际（绿涨红跌）",
  china: "中国（红涨绿跌）",
};

export function getMarketDirectionClass(changePercent: number) {
  if (changePercent > 0) return "text-market-up";
  if (changePercent < 0) return "text-market-down";
  return "text-text-secondary";
}

export function getMarketDirectionBgClass(changePercent: number) {
  if (changePercent > 0) return "bg-market-up-soft";
  if (changePercent < 0) return "bg-market-down-soft";
  return "bg-bg-app";
}
