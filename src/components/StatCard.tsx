import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { MockStat } from "../data/modules";

interface StatCardProps {
  stat: MockStat;
  index: number;
}

export default function StatCard({ stat }: StatCardProps) {
  const isUp = stat.trend === "up";

  return (
    <div className="rounded-xl bg-white border border-black/[0.04] p-4 transition-colors duration-200 hover:bg-emerald-50/30">
      <div className="mb-2 flex items-start justify-between gap-2">
        <span className="min-w-0 text-[11px] leading-5 text-slate-400">{stat.label}</span>
        <div className={`flex shrink-0 items-center gap-1 text-[11px] font-medium ${isUp ? "text-emerald-600" : "text-rose-400"}`}>
          {isUp ? <ArrowUpRight size={12} strokeWidth={1.5} /> : <ArrowDownRight size={12} strokeWidth={1.5} />}
          {stat.change}
        </div>
      </div>
      <div className="text-[22px] font-bold tracking-tight text-slate-800">{stat.value}</div>
    </div>
  );
}
