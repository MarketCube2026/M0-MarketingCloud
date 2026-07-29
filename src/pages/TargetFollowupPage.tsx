import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  CircleDollarSign,
  MousePointerClick,
  RadioTower,
} from "lucide-react";
import StatCard from "../components/StatCard";
import type { MockStat } from "../data/modules";

const targetStats: MockStat[] = [
  { label: "营销收入", value: "8,620 万", change: "+12.4%", trend: "up" },
  { label: "转化指标", value: "23.8%", change: "+3.1%", trend: "up" },
  { label: "市场影响参数", value: "186 万", change: "+18%", trend: "up" },
  { label: "过程指标完成率", value: "91%", change: "+6%", trend: "up" },
];

const targetSections = [
  {
    title: "营销收入",
    description: "跟进收入达成、产品贡献、区域贡献与关键项目回款进度",
    icon: CircleDollarSign,
    metric: "8,620 万",
  },
  {
    title: "转化指标",
    description: "监测线索转化、商机推进、成交效率与客户旅程关键节点",
    icon: MousePointerClick,
    metric: "23.8%",
  },
  {
    title: "市场影响参数",
    description: "追踪品牌声量、内容触达、活动覆盖与市场认知变化",
    icon: RadioTower,
    metric: "186 万",
  },
  {
    title: "营销过程指标",
    description: "管理活动执行、内容产出、客户触达与渠道协同过程数据",
    icon: BarChart3,
    metric: "91%",
  },
];

export default function TargetFollowupPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 animate-fade-up">
        <button
          onClick={() => navigate("/performance")}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.04] bg-white text-slate-400 transition-all duration-200 hover:border-emerald-200/80 hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-50/50"
          aria-label="返回绩效与复盘"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <div>
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60">
            Target Tracking
          </div>
          <h1 className="text-[24px] font-bold tracking-tight text-slate-900">
            目标跟进
          </h1>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-400/80">
            围绕收入、转化、市场影响与营销过程指标，持续跟进目标达成情况。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {targetStats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      <div>
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60">
          Target Follow-Up Categories
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {targetSections.map((section, index) => {
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
