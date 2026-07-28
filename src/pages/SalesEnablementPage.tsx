import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenCheck,
  Headphones,
  ClipboardList,
  FileText,
  PlayCircle,
  UsersRound,
} from "lucide-react";
import StatCard from "../components/StatCard";
import type { MockStat } from "../data/modules";

const enablementStats: MockStat[] = [
  { label: "培训完成率", value: "86%", change: "+8%", trend: "up" },
  { label: "支持工单响应", value: "2.4h", change: "-0.6h", trend: "up" },
  { label: "资料使用次数", value: "1,248", change: "+126", trend: "up" },
  { label: "销售覆盖人数", value: "168", change: "+18", trend: "up" },
];

const enablementSections = [
  {
    title: "销售培训",
    description: "新人训练营、产品认证、情景演练与考试追踪",
    icon: BookOpenCheck,
    metric: "12 门课程",
  },
  {
    title: "销售支持",
    description: "售前问题响应、专家协同、重点客户陪访支持",
    icon: Headphones,
    metric: "24 个进行中",
  },
  {
    title: "销售工具",
    description: "拜访清单、客户分层工具、报价与方案模板",
    icon: ClipboardList,
    metric: "36 个工具",
  },
  {
    title: "话术资料",
    description: "产品话术、竞品应对、FAQ 与异议处理手册",
    icon: FileText,
    metric: "128 份资料",
  },
  {
    title: "演示素材",
    description: "产品演示视频、案例讲解、客户成功故事素材",
    icon: PlayCircle,
    metric: "42 个素材",
  },
  {
    title: "一线反馈",
    description: "销售反馈收集、共性问题归因、赋能需求回流",
    icon: UsersRound,
    metric: "18 条待处理",
  },
];

export default function SalesEnablementPage() {
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
        <div>
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60">
            Sales Enablement
          </div>
          <h1 className="text-[24px] font-bold tracking-tight text-slate-900">
            销售赋能
          </h1>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-400/80">
            汇总培训、支持、工具与资料，帮助销售团队更快完成客户转化。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {enablementStats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      <div>
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60">
          Enablement Modules
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {enablementSections.map((section, index) => {
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
