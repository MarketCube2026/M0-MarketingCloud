import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getModuleByPath, getSubModuleByPath } from "../data/modules";

export default function Breadcrumb() {
  const location = useLocation();
  const mod = getModuleByPath(location.pathname);
  const sub = getSubModuleByPath(location.pathname);

  if (!mod) return null;

  return (
    <nav className="flex items-center gap-1.5 text-[12px]">
      <Link
        to="/dashboard"
        className="flex items-center gap-1 text-slate-400 transition-colors hover:text-emerald-600"
      >
        <Home size={12} />
      </Link>
      <ChevronRight size={10} className="text-slate-300/60" />
      <Link
        to={mod.path}
        className={`transition-colors hover:text-emerald-600 ${
          sub ? "text-slate-400" : "font-medium text-slate-600"
        }`}
      >
        {mod.title}
      </Link>
      {sub && (
        <>
          <ChevronRight size={10} className="text-slate-300/60" />
          <span className="font-medium text-slate-600">{sub.title}</span>
        </>
      )}
    </nav>
  );
}
