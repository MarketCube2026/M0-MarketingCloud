import { modules, getMockStats } from "../data/modules";
import SubModuleCard from "../components/SubModuleCard";
import ClosedLoopMap from "../components/ClosedLoopMap";
import StatCard from "../components/StatCard";

export default function DashboardPage() {
  const dashboardModule = modules[0];
  const stats = getMockStats("dashboard");

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

      {/* 核心指标 */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      {/* 闭环地图 — 旗舰展示区 */}
      <div className="rounded-2xl bg-white border border-black/[0.04] p-10 shadow-sm">
        <div className="mb-8 animate-fade-up">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-2">
            Closed-Loop Map
          </div>
          <h2 className="text-[20px] font-semibold tracking-tight text-slate-900">营销闭环地图</h2>
          <p className="mt-1 text-[12px] text-slate-400/70">点击节点直达对应模块，闭环驱动持续增长</p>
        </div>
        <ClosedLoopMap />
      </div>

      {/* 子模块 */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60 mb-4">
          Sub Modules
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardModule.subModules.map((sub, i) => (
            <SubModuleCard key={sub.id} subModule={sub} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
