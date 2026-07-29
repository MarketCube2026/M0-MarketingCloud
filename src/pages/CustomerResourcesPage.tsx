import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Contact,
  Layers,
  Lightbulb,
  MessageSquare,
  UserCircle,
} from "lucide-react";
import StatCard from "../components/StatCard";
import type { MockStat } from "../data/modules";

const customerResourceStats: MockStat[] = [
  { label: "客户总数", value: "52,340", change: "+1,256", trend: "up" },
  { label: "高价值客户", value: "3,820", change: "+86", trend: "up" },
  { label: "互动覆盖率", value: "64%", change: "+3%", trend: "up" },
  { label: "画像完整度", value: "81%", change: "+5%", trend: "up" },
];

const customerSections = [
  {
    title: "客户主数据",
    description: "客户基础信息、归属关系、行业标签与关键联系人统一管理",
    icon: Contact,
    metric: "52,340 条",
  },
  {
    title: "客户分层",
    description: "按价值、潜力、活跃度、区域与业务场景进行分层运营",
    icon: Layers,
    metric: "6 类分层",
  },
  {
    title: "客户互动",
    description: "沉淀拜访、会议、活动、内容触达与销售跟进记录",
    icon: MessageSquare,
    metric: "18,620 次",
  },
  {
    title: "客户画像",
    description: "整合需求、痛点、购买动机、决策链与行为偏好",
    icon: UserCircle,
    metric: "81% 完整",
  },
  {
    title: "推荐营销动作",
    description: "基于客户分层和行为信号推荐下一步触达与转化动作",
    icon: Lightbulb,
    metric: "126 条建议",
  },
];

export default function CustomerResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 animate-fade-up">
        <button
          onClick={() => navigate("/resources")}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.04] bg-white text-slate-400 transition-all duration-200 hover:border-emerald-200/80 hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-50/50"
          aria-label="返回资源与产品"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <div>
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60">
            Customer Resources
          </div>
          <h1 className="text-[24px] font-bold tracking-tight text-slate-900">
            客户资源
          </h1>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-400/80">
            整合客户资产的主数据、分层、互动、画像与推荐营销动作，统一沉淀到资源体系。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {customerResourceStats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      <div>
        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60">
          Customer Asset Modules
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {customerSections.map((section, index) => {
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
