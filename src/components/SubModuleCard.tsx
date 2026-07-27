import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { SubModule } from "../data/modules";

interface SubModuleCardProps {
  subModule: SubModule;
  index: number;
}

export default function SubModuleCard({ subModule, index }: SubModuleCardProps) {
  const navigate = useNavigate();
  const Icon = subModule.icon;

  return (
    <button
      onClick={() => navigate(subModule.path)}
      className="group relative flex flex-col rounded-xl bg-white border border-black/[0.04] p-5 text-left transition-all duration-300 hover:border-emerald-200/80 hover:shadow-lg hover:shadow-emerald-100/30 hover:-translate-y-0.5 animate-fade-up"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* 图标容器 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-600 transition-all duration-300 group-hover:from-emerald-500 group-hover:to-emerald-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/25">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          className="text-slate-300/0 transition-all duration-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      {/* 内容 */}
      <h3 className="text-[14px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{subModule.title}</h3>
      <p className="mt-1.5 text-[12px] leading-[1.6] text-slate-400/80">
        {subModule.description}
      </p>
    </button>
  );
}
