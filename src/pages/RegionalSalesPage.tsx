import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  MapPin,
  PackageSearch,
  UsersRound,
} from "lucide-react";
import StatCard from "../components/StatCard";
import type { MockStat } from "../data/modules";

const performanceOverviewUrl = "https://m5msd.pages.dev/dashboard.html";

const regionalStats: MockStat[] = [
  { label: "区域业绩达成率", value: "88%", change: "+7%", trend: "up" },
  { label: "重点产品贡献", value: "62%", change: "+5%", trend: "up" },
  { label: "团队人均产出", value: "128 万", change: "+11%", trend: "up" },
  { label: "高潜区域数量", value: "9", change: "+2", trend: "up" },
];

const regionalSections = [
  {
    title: "业绩总览",
    description: "自动跳转至区域销售业绩总览外部看板",
    icon: BarChart3,
    metric: "外部看板",
    externalUrl: performanceOverviewUrl,
  },
  {
    title: "产品分析",
    description: "按产品线、重点品类、区域贡献与增长趋势拆解销售表现",
    icon: PackageSearch,
    metric: "6 条产品线",
  },
  {
    title: "团队效能",
    description: "跟进团队目标达成、人均产出、拜访转化与协同效率",
    icon: UsersRound,
    metric: "12 支团队",
  },
];

export default function RegionalSalesPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 animate-fade-up">
        <button
          onClick={() => navigate("/channels")}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.04] bg-white text-slate-400 transition-all duration-200 hover:border-emerald-200/80 hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-50/50"
          aria-label="返回渠道与销售"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-600">
            <MapPin size={20} strokeWidth={1.5} />
          </div>
          <div>
            <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60">
              渠道与销售
            </div>
            <h1 className="text-[20px] font-bold tracking-tight text-slate-900">
              区域销售
            </h1>
            <p className="text-[12px] text-slate-400/70">
              区域业绩、产品分析与团队效能统一管理
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {regionalStats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      <div>
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60">
          Regional Sales Sections
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {regionalSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.title}
                onClick={() => {
                  if (section.externalUrl) {
                    window.location.assign(section.externalUrl);
                  }
                }}
                className="group rounded-xl border border-black/[0.04] bg-white p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200/80 hover:bg-emerald-50/30 hover:shadow-lg hover:shadow-emerald-100/30 animate-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-600 transition-all duration-300 group-hover:from-emerald-500 group-hover:to-emerald-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/25">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-400">
                    {section.metric}
                    {section.externalUrl ? <ArrowUpRight size={12} strokeWidth={1.5} /> : null}
                  </span>
                </div>
                <h2 className="text-[14px] font-semibold text-slate-700 transition-colors group-hover:text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-slate-400/80">
                  {section.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
