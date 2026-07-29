import { modules, getMockStats } from "../data/modules";
import SubModuleCard from "../components/SubModuleCard";
import ClosedLoopMap from "../components/ClosedLoopMap";
import StatCard from "../components/StatCard";
import MockTable from "../components/MockTable";

const managementScope = {
  headers: ["管理模块", "核心内容"],
  rows: [
    {
      管理模块: "目标管理",
      核心内容: "年度目标、季度目标、月度目标、OKR/KPI 拆解",
    },
    {
      管理模块: "预算管理",
      核心内容: "年度预算、渠道预算、活动预算、预算审批、预算执行率",
    },
    {
      管理模块: "项目管理",
      核心内容: "项目立项、任务分工、里程碑、风险、复盘",
    },
    {
      管理模块: "组织协同",
      核心内容: "市场、销售、产品、渠道、电商、客服、财务协同机制",
    },
    {
      管理模块: "内容资产",
      核心内容: "品牌素材、案例、海报、视频、销售资料、活动模板统一管理",
    },
    {
      管理模块: "流程机制",
      核心内容: "立项、审批、投放、线索分配、活动复盘、危机处理 SOP",
    },
    {
      管理模块: "绩效考核",
      核心内容: "团队目标、个人 KPI、项目贡献、结果考核",
    },
    {
      管理模块: "知识沉淀",
      核心内容: "成功案例、失败复盘、行业报告、活动模板、最佳实践",
    },
  ],
};

export default function DashboardPage() {
  const dashboardModule = modules[0];
  const stats = getMockStats("dashboard");
  const businessModules = modules.filter((mod) => mod.id !== "dashboard");

  return (
    <div className="space-y-10">
      {/* 驾驶舱头部 */}
      <div className="animate-fade-up">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-2">
          Marketing Cockpit
        </div>
        <h1 className="text-[28px] font-bold tracking-tight text-slate-900">
          {dashboardModule.title}
        </h1>
        <p className="mt-1 text-[13px] text-slate-400/80 leading-relaxed">
          {dashboardModule.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-black/[0.04] bg-white p-5 animate-fade-up">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-2">
            Core Role
          </div>
          <h2 className="text-[18px] font-semibold tracking-tight text-slate-900">
            中控平台的操作系统
          </h2>
          <p className="mt-2 text-[13px] leading-[1.8] text-slate-500">
            营销驾驶舱不再作为独立工作模块，而是统一调度前端六大模块，确保营销战略、资源、项目、人员、预算、流程和复盘能够协同运转。
          </p>
        </div>
        <div className="rounded-xl border border-emerald-100/80 bg-emerald-50/50 p-5 animate-fade-up">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-2">
            Operating Scope
          </div>
          <h2 className="text-[18px] font-semibold tracking-tight text-slate-900">
            统一经营闭环
          </h2>
          <p className="mt-2 text-[13px] leading-[1.8] text-emerald-800/70">
            从市场洞察到策略制定、资源配置、整合营销、渠道销售，再到绩效复盘，形成可追踪、可协同、可沉淀的营销经营体系。
          </p>
        </div>
      </div>

      {/* 核心指标 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      {/* 闭环地图 — 旗舰展示区 */}
      <div className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-sm sm:p-6 lg:rounded-2xl lg:p-10">
        <div className="mb-8 animate-fade-up">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-2">
            Closed-Loop Map
          </div>
          <h2 className="text-[20px] font-semibold tracking-tight text-slate-900">营销闭环地图</h2>
          <p className="mt-1 text-[12px] text-slate-400/70">点击节点直达对应模块，闭环驱动持续增长</p>
        </div>
        <ClosedLoopMap />
      </div>

      {/* 六大模块 */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60 mb-4">
          Six Business Modules
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessModules.map((sub, i) => (
            <SubModuleCard key={sub.id} subModule={sub} index={i} />
          ))}
        </div>
      </div>

      {/* 管理范围 */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60 mb-4">
          Management Scope
        </div>
        <MockTable data={managementScope} />
      </div>
    </div>
  );
}
