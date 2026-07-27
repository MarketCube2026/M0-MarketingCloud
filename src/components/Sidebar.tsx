import { NavLink } from "react-router-dom";
import { modules } from "../data/modules";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-[260px] flex-col border-r border-white/[0.06] bg-[#0a1f18]">
      {/* Logo */}
      <div className="flex h-[72px] items-center px-7">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25">
            <span className="text-[11px] font-bold tracking-wide text-white">MC</span>
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-white/90 tracking-wide">营销闭环中控</div>
            <div className="text-[10px] text-white/30 tracking-widest uppercase">MarketingCube</div>
          </div>
        </div>
      </div>

      {/* 分隔线 */}
      <div className="mx-5 h-px bg-white/[0.06]" />

      {/* 导航 */}
      <nav className="flex-1 overflow-y-auto pt-5 pb-2">
        <div className="px-7 pb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
          Navigation
        </div>
        <ul className="space-y-[2px] px-3">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <li key={mod.id}>
                <NavLink
                  to={mod.path}
                  end={mod.path === "/dashboard"}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-lg px-4 py-[10px] text-[13px] tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-white/[0.08] text-white"
                        : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* 左侧指示条 */}
                      <div
                        className={`absolute -left-[3px] top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-sm shadow-emerald-400/50"
                            : "bg-transparent"
                        }`}
                      />
                      <Icon size={18} className={`flex-shrink-0 transition-colors duration-200 ${isActive ? "text-emerald-300" : "text-white/30 group-hover:text-white/50"}`} />
                      <span className="flex-1 font-medium">{mod.title}</span>
                      {/* 活跃指示点 */}
                      <div className={`h-[5px] w-[5px] rounded-full transition-all duration-300 ${isActive ? "bg-emerald-400 shadow-sm shadow-emerald-400/50" : "bg-transparent"}`} />
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 底部 */}
      <div className="mx-5 h-px bg-white/[0.06]" />
      <div className="px-7 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/[0.08] text-[11px] font-medium text-white/50 ring-1 ring-white/[0.06]">
            A
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-medium text-white/50">管理员</div>
            <div className="text-[10px] text-white/20">原型演示</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
