import { useParams, useNavigate } from "react-router-dom";
import { modules, getMockStats, getMockTable } from "../data/modules";
import StatCard from "../components/StatCard";
import MockTable from "../components/MockTable";
import { ArrowLeft, FileBarChart } from "lucide-react";

interface SubPagePlaceholderProps {
  moduleId: string;
}

export default function SubPagePlaceholder({ moduleId }: SubPagePlaceholderProps) {
  const { subId } = useParams<{ subId: string }>();
  const navigate = useNavigate();

  const mod = modules.find((m) => m.id === moduleId);
  const sub = mod?.subModules.find((s) => s.id === subId);

  if (!mod || !sub) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        页面未找到
      </div>
    );
  }

  const stats = getMockStats(mod.id);
  const tableData = getMockTable(mod.id);
  const Icon = sub.icon;

  return (
    <div className="space-y-8">
      {/* 页面头部 */}
      <div className="flex items-center gap-4 animate-fade-up">
        <button
          onClick={() => navigate(mod.path)}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-black/[0.04] text-slate-400 transition-all duration-200 hover:border-emerald-200/80 hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-50/50"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-600">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600/60 mb-0.5">
              {mod.title}
            </div>
            <h1 className="text-[20px] font-bold tracking-tight text-slate-900">{sub.title}</h1>
            <p className="text-[12px] text-slate-400/70">{sub.description}</p>
          </div>
        </div>
      </div>

      {/* 占位提示 */}
      <div className="flex items-center gap-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 px-4 py-2.5 text-[12px] text-emerald-700/70 animate-fade-up" style={{ animationDelay: "80ms" }}>
        <FileBarChart size={14} strokeWidth={1.5} className="flex-shrink-0 text-emerald-500/60" />
        <span>此页面为原型占位，以下数据均为 Mock 演示数据。</span>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      {/* 数据表格 */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60 mb-3">
          Data Detail
        </div>
        <MockTable data={tableData} />
      </div>
    </div>
  );
}
