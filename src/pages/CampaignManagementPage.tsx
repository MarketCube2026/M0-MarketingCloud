import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import StatCard from "../components/StatCard";
import MockTable from "../components/MockTable";
import type { MockStat, MockTableData } from "../data/modules";

// ---------- 会议管理 Mock 数据 ----------

const meetingScheduleData: MockTableData = {
  headers: ["会议名称", "日期时间", "主持人", "议题/内容", "参与人", "状态"],
  rows: [
    { 会议名称: "Q3 营销策略评审", 日期时间: "07-28 10:00", 主持人: "张明", "议题/内容": "Q3 策略方向确认、预算分配", 参与人: "全员(12人)", 状态: "筹备中" },
    { 会议名称: "品牌投放复盘会", 日期时间: "07-25 14:00", 主持人: "李华", "议题/内容": "品牌广告投放效果复盘", 参与人: "投放组(5人)", 状态: "已完成" },
    { 会议名称: "KOL 合作方案讨论", 日期时间: "07-23 09:30", 主持人: "陈杰", "议题/内容": "3 位 KOL 合作方案评审", 参与人: "内容组(4人)", 状态: "已完成" },
    { 会议名称: "新产品上市节奏", 日期时间: "07-30 10:00", 主持人: "王芳", "议题/内容": "上市节奏与传播节奏对齐", 参与人: "产品+营销(8人)", 状态: "筹备中" },
    { 会议名称: "区域渠道周会", 日期时间: "07-22 15:00", 主持人: "刘洋", "议题/内容": "渠道效能数据周报", 参与人: "渠道组(6人)", 状态: "已完成" },
    { 会议名称: "内容创作选题会", 日期时间: "07-21 11:00", 主持人: "周婷", "议题/内容": "下月选题方向 + AI 辅助创作", 参与人: "内容组(4人)", 状态: "已完成" },
    { 会议名称: "月度经营复盘", 日期时间: "08-01 09:00", 主持人: "张明", "议题/内容": "7月经营数据复盘与8月规划", 参与人: "管理层(6人)", 状态: "筹备中" },
  ],
};

const meetingBudgetData: MockTableData = {
  headers: ["预算科目", "预算金额", "已使用", "剩余", "使用率", "备注"],
  rows: [
    { 预算科目: "会场租赁", 预算金额: "¥120,000", 已使用: "¥78,000", 剩余: "¥42,000", 使用率: "65%", 备注: "含2场外部场地" },
    { 预算科目: "餐饮服务", 预算金额: "¥45,000", 已使用: "¥32,000", 剩余: "¥13,000", 使用率: "71%", 备注: "茶歇+午餐" },
    { 预算科目: "物料制作", 预算金额: "¥60,000", 已使用: "¥38,000", 剩余: "¥22,000", 使用率: "63%", 备注: "展板/手册/视频" },
    { 预算科目: "嘉宾费用", 预算金额: "¥80,000", 已使用: "¥56,000", 剩余: "¥24,000", 使用率: "70%", 备注: "KOL/专家出场费" },
    { 预算科目: "直播平台", 预算金额: "¥30,000", 已使用: "¥18,000", 剩余: "¥12,000", 使用率: "60%", 备注: "线上直播技术" },
    { 预算科目: "交通差旅", 预算金额: "¥25,000", 已使用: "¥12,000", 剩余: "¥13,000", 使用率: "48%", 备注: "外部参会差旅" },
  ],
};

const otherData: MockTableData = {
  headers: ["事项类型", "事项名称", "负责人", "截止日期", "优先级", "状态"],
  rows: [
    { 事项类型: "会议纪要", 事项名称: "品牌投放复盘纪要整理", 负责人: "赵敏", 截止日期: "07-27", 优先级: "高", 状态: "进行中" },
    { 事项类型: "待办追踪", 事项名称: "KOL合同签署跟进", 负责人: "陈杰", 截止日期: "07-30", 优先级: "高", 状态: "进行中" },
    { 事项类型: "资产归档", 事项名称: "7月活动照片归档", 负责人: "周婷", 截止日期: "08-05", 优先级: "中", 状态: "待处理" },
    { 事项类型: "培训安排", 事项名称: "新员工营销流程培训", 负责人: "刘洋", 截止日期: "08-10", 优先级: "中", 状态: "筹备中" },
    { 事项类型: "合规检查", 事项名称: "广告文案合规审核", 负责人: "孙强", 截止日期: "07-28", 优先级: "高", 状态: "进行中" },
    { 事项类型: "系统维护", 事项名称: "会议管理系统升级", 负责人: "技术组", 截止日期: "08-15", 优先级: "低", 状态: "筹备中" },
  ],
};

const otherStats: MockStat[] = [
  { label: "待办事项", value: "12", change: "+3", trend: "up" },
  { label: "高优先级", value: "4", change: "+1", trend: "up" },
  { label: "完成率", value: "83%", change: "+5%", trend: "up" },
  { label: "逾期事项", value: "1", change: "-2", trend: "up" },
];

// ---------- Tab 定义 ----------

const tabs = [
  { id: "visualization", label: "会议可视化" },
  { id: "score", label: "资源支持评分" },
  { id: "schedule", label: "日程与策划" },
  { id: "budget", label: "预算制作" },
  { id: "other", label: "其他" },
];

export default function CampaignManagementPage() {
  const [activeTab, setActiveTab] = useState("visualization");
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* 页面头部 — 极简 */}
      <div className="flex items-center gap-3 animate-fade-up">
        <button
          onClick={() => navigate("/campaigns")}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-600"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <h1 className="text-[18px] font-semibold tracking-tight text-slate-900">活动管理</h1>
      </div>

      {/* Tab 导航 — underline 风格 */}
      <div className="flex gap-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2 text-[13px] font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-slate-900"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab 内容 */}
      <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
        {activeTab === "visualization" && <VisualizationTab />}
        {activeTab === "score" && <ScoreTab />}
        {activeTab === "schedule" && <ScheduleTab />}
        {activeTab === "budget" && <BudgetTab />}
        {activeTab === "other" && <OtherTab />}
      </div>
    </div>
  );
}

// ---------- Tab 1: 会议可视化 ----------

function VisualizationTab() {
  return (
    <div className="relative rounded-xl border border-black/[0.06] overflow-hidden">
      <a
        href="https://m3-mvms.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md bg-white/80 backdrop-blur text-slate-300 transition-colors duration-200 hover:text-emerald-600 hover:bg-white shadow-sm z-10"
        title="在新窗口打开"
      >
        <ExternalLink size={14} strokeWidth={1.5} />
      </a>
      <iframe
        src="https://m3-mvms.vercel.app/"
        title="市场部会议可视化"
        className="w-full border-0"
        style={{ minHeight: "720px" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
        loading="lazy"
      />
    </div>
  );
}

// ---------- Tab 2: 资源支持评分 ----------

function ScoreTab() {
  return (
    <div className="relative rounded-xl border border-black/[0.06] overflow-hidden">
      <a
        href="https://m1-mries-mvp.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md bg-white/80 backdrop-blur text-slate-300 transition-colors duration-200 hover:text-emerald-600 hover:bg-white shadow-sm z-10"
        title="在新窗口打开"
      >
        <ExternalLink size={14} strokeWidth={1.5} />
      </a>
      <iframe
        src="https://m1-mries-mvp.vercel.app/"
        title="资源支持评分"
        className="w-full border-0"
        style={{ minHeight: "720px" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
        loading="lazy"
      />
    </div>
  );
}

// ---------- Tab 3: 日程与策划 ----------

function ScheduleTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard stat={{ label: "本月会议", value: "18", change: "+4", trend: "up" }} index={0} />
        <StatCard stat={{ label: "已策划", value: "15", change: "+3", trend: "up" }} index={1} />
        <StatCard stat={{ label: "待策划", value: "3", change: "+1", trend: "up" }} index={2} />
        <StatCard stat={{ label: "策划完成率", value: "83%", change: "+5%", trend: "up" }} index={3} />
      </div>

      <div>
        <div className="text-[12px] text-slate-400 font-medium mb-3">日程总表</div>
        <MockTable data={meetingScheduleData} />
      </div>

      {/* 内容策划卡片 — 简约 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Q3 策略评审 PPT", owner: "张明", deadline: "07-27", status: "制作中" },
          { title: "品牌投放数据包", owner: "李华", deadline: "07-24", status: "已完成" },
          { title: "KOL 方案演示稿", owner: "陈杰", deadline: "07-22", status: "已完成" },
          { title: "新品上市节奏表", owner: "王芳", deadline: "07-29", status: "待制作" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-white border border-black/[0.04] p-4 transition-colors duration-200 hover:bg-emerald-50/30"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-medium text-slate-700">{item.title}</span>
              <span className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-medium ${
                item.status === "已完成" ? "bg-emerald-50 text-emerald-600" :
                item.status === "制作中" ? "bg-emerald-50 text-emerald-600" :
                "bg-slate-100 text-slate-500"
              }`}>
                {item.status}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 space-y-0.5">
              <div>负责人：{item.owner}</div>
              <div>截止：{item.deadline}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Tab 3: 预算制作 ----------

function BudgetTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard stat={{ label: "总预算", value: "¥360K", change: "+15%", trend: "up" }} index={0} />
        <StatCard stat={{ label: "已使用", value: "¥234K", change: "+22%", trend: "up" }} index={1} />
        <StatCard stat={{ label: "剩余", value: "¥126K", change: "-8%", trend: "down" }} index={2} />
        <StatCard stat={{ label: "使用率", value: "65%", change: "+10%", trend: "up" }} index={3} />
      </div>

      {/* 预算使用进度 — 紧凑 */}
      <div className="rounded-xl bg-white border border-black/[0.04] p-5">
        <div className="text-[12px] text-slate-400 font-medium mb-4">预算进度</div>
        <div className="space-y-3">
          {[
            { label: "会场租赁", pct: 65, budget: "¥120K", color: "bg-emerald-500" },
            { label: "餐饮服务", pct: 71, budget: "¥45K", color: "bg-emerald-400" },
            { label: "物料制作", pct: 63, budget: "¥60K", color: "bg-teal-500" },
            { label: "嘉宾费用", pct: 70, budget: "¥80K", color: "bg-teal-400" },
            { label: "直播平台", pct: 60, budget: "¥30K", color: "bg-emerald-600" },
            { label: "交通差旅", pct: 48, budget: "¥25K", color: "bg-emerald-300" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-[12px] text-slate-600 w-[80px]">{item.label}</span>
              <div className="flex-1 h-6 bg-slate-50 rounded-md overflow-hidden">
                <div className={`${item.color} h-full rounded-md flex items-center justify-end pr-2`} style={{ width: `${Math.max(item.pct, 8)}%` }}>
                  <span className="text-[10px] font-medium text-white/90">{item.pct}%</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 w-[48px] text-right">{item.budget}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[12px] text-slate-400 font-medium mb-3">预算明细</div>
        <MockTable data={meetingBudgetData} />
      </div>
    </div>
  );
}

// ---------- Tab 4: 其他 ----------

function OtherTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {otherStats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      <div>
        <div className="text-[12px] text-slate-400 font-medium mb-3">事项追踪</div>
        <MockTable data={otherData} />
      </div>
    </div>
  );
}
