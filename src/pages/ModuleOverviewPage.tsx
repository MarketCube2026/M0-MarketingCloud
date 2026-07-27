import { modules, getMockStats } from "../data/modules";
import SubModuleCard from "../components/SubModuleCard";
import StatCard from "../components/StatCard";

interface ModuleOverviewPageProps {
  moduleId: string;
}

export default function ModuleOverviewPage({ moduleId }: ModuleOverviewPageProps) {
  const mod = modules.find((m) => m.id === moduleId);

  if (!mod) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        模块未找到
      </div>
    );
  }

  const stats = getMockStats(mod.id);
  const Icon = mod.icon;

  return (
    <div className="space-y-10">
      {/* 模块头部 */}
      <div className="flex items-start gap-5 animate-fade-up">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/20">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-1">
            Module
          </div>
          <h1 className="text-[24px] font-bold tracking-tight text-slate-900">{mod.title}</h1>
          <p className="mt-1 text-[13px] text-slate-400/80 leading-relaxed">{mod.description}</p>
        </div>
      </div>

      {/* 核心指标 */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      {/* 子模块 */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60 mb-4">
          Sub Modules
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mod.subModules.map((sub, i) => (
            <SubModuleCard key={sub.id} subModule={sub} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
