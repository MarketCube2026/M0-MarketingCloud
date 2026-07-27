import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f4f8f6]">
      <Sidebar />
      <div className="ml-[260px]">
        {/* 顶栏：极简，不抢占视觉注意力 */}
        <header className="sticky top-0 z-20 h-[52px] flex items-center justify-between px-8 bg-white/70 backdrop-blur-xl border-b border-black/[0.04]">
          <Breadcrumb />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-600/80 border border-emerald-100/80 rounded-md px-2.5 py-1">
              Prototype
            </span>
          </div>
        </header>
        {/* 内容区 */}
        <main className="p-8 pb-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
