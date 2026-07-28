import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f4f8f6]">
      <Sidebar />
      <div className="lg:ml-[260px]">
        {/* 顶栏：极简，不抢占视觉注意力 */}
        <header className="sticky top-0 z-20 flex h-[52px] items-center justify-between gap-3 border-b border-black/[0.04] bg-white/80 px-4 backdrop-blur-xl lg:px-8">
          <Breadcrumb />
          <div className="flex items-center gap-3">
            <span className="hidden rounded-md border border-emerald-100/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-emerald-600/80 sm:inline">
              Prototype
            </span>
          </div>
        </header>
        {/* 内容区 */}
        <main className="p-4 pb-28 sm:p-6 sm:pb-28 lg:p-8 lg:pb-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
