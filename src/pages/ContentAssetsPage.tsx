import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseMedical,
  FileText,
  HeartPulse,
} from "lucide-react";
import StatCard from "../components/StatCard";
import type { MockStat } from "../data/modules";

const contentStats: MockStat[] = [
  { label: "内容资产总量", value: "4,560", change: "+230", trend: "up" },
  { label: "医学证据", value: "1,286", change: "+68", trend: "up" },
  { label: "临床应用", value: "842", change: "+42", trend: "up" },
  { label: "品牌信任素材", value: "356", change: "+24", trend: "up" },
];

const contentSections = [
  {
    title: "医学证据",
    description: "研究文献、指南共识、真实世界证据与专家观点沉淀",
    icon: FileText,
    metric: "1,286 份",
  },
  {
    title: "临床应用",
    description: "临床路径、适用场景、病例解读与应用价值说明",
    icon: HeartPulse,
    metric: "842 条",
  },
  {
    title: "产品服务",
    description: "产品资料、服务流程、交付说明与客户支持内容",
    icon: BriefcaseMedical,
    metric: "618 份",
  },
  {
    title: "品牌信任",
    description: "品牌背书、客户故事、认证资质与可信表达素材",
    icon: BadgeCheck,
    metric: "356 个",
  },
];

export default function ContentAssetsPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 animate-fade-up">
        <button
          onClick={() => navigate("/campaigns")}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.04] bg-white text-slate-400 transition-all duration-200 hover:border-emerald-200/80 hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-50/50"
          aria-label="返回整合营销"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <div>
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60">
            Content Assets
          </div>
          <h1 className="text-[24px] font-bold tracking-tight text-slate-900">
            内容资产库
          </h1>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-400/80">
            统一沉淀医学证据、临床应用、产品服务与品牌信任内容，为整合营销提供可复用资产。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {contentStats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      <div>
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60">
          Content Asset Categories
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.title}
                className="group rounded-xl border border-black/[0.04] bg-white p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200/80 hover:bg-emerald-50/30 hover:shadow-lg hover:shadow-emerald-100/30 animate-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-600 transition-all duration-300 group-hover:from-emerald-500 group-hover:to-emerald-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/25">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-400">
                    {section.metric}
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
