import { NavLink } from "react-router-dom";
import { modules } from "../data/modules";

export default function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[260px] flex-col border-r border-white/[0.06] bg-[#0a1f18] lg:flex">
        <div className="flex h-[72px] items-center px-7">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25">
              <span className="text-[11px] font-bold tracking-wide text-white">MC</span>
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold tracking-wide text-white/90">
                营销闭环中控
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">
                MarketingCube
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 h-px bg-white/[0.06]" />

        <nav className="flex-1 overflow-y-auto pb-2 pt-5">
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
                        <div
                          className={`absolute -left-[3px] top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-sm shadow-emerald-400/50"
                              : "bg-transparent"
                          }`}
                        />
                        <Icon
                          size={18}
                          className={`flex-shrink-0 transition-colors duration-200 ${
                            isActive
                              ? "text-emerald-300"
                              : "text-white/30 group-hover:text-white/50"
                          }`}
                        />
                        <span className="flex-1 font-medium">{mod.title}</span>
                        <div
                          className={`h-[5px] w-[5px] rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-emerald-400 shadow-sm shadow-emerald-400/50"
                              : "bg-transparent"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

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

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[#0a1f18]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur-xl lg:hidden">
        <ul className="grid grid-cols-7 gap-1">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <li key={mod.id}>
                <NavLink
                  to={mod.path}
                  end={mod.path === "/dashboard"}
                  title={mod.title}
                  aria-label={mod.title}
                  className={({ isActive }) =>
                    `relative flex h-12 items-center justify-center rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-white/[0.1] text-emerald-300"
                        : "text-white/45 active:bg-white/[0.06]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={20} strokeWidth={1.7} />
                      <span
                        className={`absolute bottom-1 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full transition-opacity duration-200 ${
                          isActive ? "bg-emerald-400 opacity-100" : "opacity-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
