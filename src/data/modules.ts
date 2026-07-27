import {
  LayoutDashboard,
  Target,
  Boxes,
  Users,
  Handshake,
  Megaphone,
  TrendingUp,
  BarChart3,
  Wallet,
  Filter,
  Flame,
  AlertTriangle,
  Network,
  Calendar,
  Crosshair,
  PiggyBank,
  Zap,
  Activity,
  Database,
  Star,
  Truck,
  Package,
  FileText,
  Contact,
  Layers,
  MessageSquare,
  UserCircle,
  Lightbulb,
  MapPin,
  PackageCheck,
  MessageCircle,
  Share2,
  CalendarDays,
  FolderOpen,
  Sparkles,
  UserPlus,
  Award,
  ShieldCheck,
  RefreshCw,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

// ---------- 类型定义 ----------

export interface SubModule {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export interface ModuleConfig {
  id: string;
  title: string;
  icon: LucideIcon;
  path: string;
  description: string;
  subModules: SubModule[];
}

export interface LoopNode {
  label: string;
  path: string;
  color: string;
}

// ---------- 闭环地图节点 ----------

export const loopNodes: LoopNode[] = [
  { label: "策略", path: "/strategy", color: "#6366f1" },
  { label: "资源", path: "/resources", color: "#8b5cf6" },
  { label: "客户", path: "/customers", color: "#ec4899" },
  { label: "渠道", path: "/channels", color: "#f59e0b" },
  { label: "活动", path: "/campaigns", color: "#10b981" },
  { label: "绩效", path: "/performance", color: "#06b6d4" },
  { label: "复盘", path: "/strategy", color: "#6366f1" },
];

// ---------- 7 个一级模块定义 ----------

export const modules: ModuleConfig[] = [
  {
    id: "dashboard",
    title: "营销驾驶舱",
    icon: LayoutDashboard,
    path: "/dashboard",
    description: "全盘营销经营指标一目了然，驱动数据化决策",
    subModules: [
      {
        id: "overview",
        title: "经营总览",
        description: "核心经营指标全景看板",
        icon: BarChart3,
        path: "/dashboard/overview",
      },
      {
        id: "budget-roi",
        title: "预算与 ROI",
        description: "营销预算分配与投资回报追踪",
        icon: Wallet,
        path: "/dashboard/budget-roi",
      },
      {
        id: "funnel",
        title: "营销漏斗",
        description: "从触达到转化的全链路漏斗分析",
        icon: Filter,
        path: "/dashboard/funnel",
      },
      {
        id: "key-activities",
        title: "重点活动",
        description: "当前进行中的关键营销活动",
        icon: Flame,
        path: "/dashboard/key-activities",
      },
      {
        id: "risks",
        title: "风险与待办",
        description: "营销风险预警与待办事项",
        icon: AlertTriangle,
        path: "/dashboard/risks",
      },
      {
        id: "loop-map",
        title: "闭环地图",
        description: "营销闭环全链路可视化",
        icon: Network,
        path: "/dashboard/loop-map",
      },
    ],
  },
  {
    id: "strategy",
    title: "策略与目标",
    icon: Target,
    path: "/strategy",
    description: "制定年度策略、分解目标、规划预算、跟踪进度",
    subModules: [
      {
        id: "annual",
        title: "年度策略",
        description: "年度营销战略方向与核心举措",
        icon: Calendar,
        path: "/strategy/annual",
      },
      {
        id: "quarterly",
        title: "季度目标",
        description: "季度 OKR 分解与目标对齐",
        icon: Crosshair,
        path: "/strategy/quarterly",
      },
      {
        id: "budget",
        title: "预算规划",
        description: "全年营销预算分配与管控",
        icon: PiggyBank,
        path: "/strategy/budget",
      },
      {
        id: "actions",
        title: "战略动作",
        description: "关键战略动作清单与责任人",
        icon: Zap,
        path: "/strategy/actions",
      },
      {
        id: "progress",
        title: "策略进度",
        description: "策略执行进度实时追踪",
        icon: Activity,
        path: "/strategy/progress",
      },
    ],
  },
  {
    id: "resources",
    title: "资源与产品",
    icon: Boxes,
    path: "/resources",
    description: "管理营销资源池、KOL、供应商、产品库与营销弹药",
    subModules: [
      {
        id: "pool",
        title: "资源池",
        description: "营销资源统一管理与调度",
        icon: Database,
        path: "/resources/pool",
      },
      {
        id: "kol",
        title: "KOL/专家",
        description: "KOL 与行业专家库管理",
        icon: Star,
        path: "/resources/kol",
      },
      {
        id: "vendors",
        title: "渠道与供应商",
        description: "供应商资质与合作管理",
        icon: Truck,
        path: "/resources/vendors",
      },
      {
        id: "products",
        title: "产品库",
        description: "产品信息与卖点维护",
        icon: Package,
        path: "/resources/products",
      },
      {
        id: "ammo",
        title: "产品营销弹药",
        description: "产品话术、物料、案例库",
        icon: FileText,
        path: "/resources/ammo",
      },
    ],
  },
  {
    id: "customers",
    title: "客户资产",
    icon: Users,
    path: "/customers",
    description: "管理客户主数据、分层、互动、画像与智能推荐",
    subModules: [
      {
        id: "master-data",
        title: "客户主数据",
        description: "客户基础信息统一管理",
        icon: Contact,
        path: "/customers/master-data",
      },
      {
        id: "segmentation",
        title: "客户分层",
        description: "客户价值分层与标签体系",
        icon: Layers,
        path: "/customers/segmentation",
      },
      {
        id: "interaction",
        title: "客户互动",
        description: "客户触点与互动记录",
        icon: MessageSquare,
        path: "/customers/interaction",
      },
      {
        id: "profile",
        title: "客户画像",
        description: "360 度客户画像与行为分析",
        icon: UserCircle,
        path: "/customers/profile",
      },
      {
        id: "recommend",
        title: "推荐营销动作",
        description: "AI 驱动的下一步营销建议",
        icon: Lightbulb,
        path: "/customers/recommend",
      },
    ],
  },
  {
    id: "channels",
    title: "渠道与销售",
    icon: Handshake,
    path: "/channels",
    description: "渠道表现、区域销售、产品落地、反馈与线索协同",
    subModules: [
      {
        id: "performance",
        title: "渠道表现",
        description: "各渠道业绩与转化分析",
        icon: BarChart3,
        path: "/channels/performance",
      },
      {
        id: "regional",
        title: "区域销售",
        description: "区域销售业绩热力图",
        icon: MapPin,
        path: "/channels/regional",
      },
      {
        id: "landing",
        title: "产品落地",
        description: "产品在各渠道的落地进度",
        icon: PackageCheck,
        path: "/channels/landing",
      },
      {
        id: "feedback",
        title: "销售反馈",
        description: "一线销售反馈收集与处理",
        icon: MessageCircle,
        path: "/channels/feedback",
      },
      {
        id: "leads",
        title: "线索协同",
        description: "营销线索到销售的流转协同",
        icon: Share2,
        path: "/channels/leads",
      },
    ],
  },
  {
    id: "campaigns",
    title: "活动、内容与传播",
    icon: Megaphone,
    path: "/campaigns",
    description: "活动管理、内容资产、AI 生成、投放与报名线索",
    subModules: [
      {
        id: "management",
        title: "活动管理",
        description: "营销活动全生命周期管理",
        icon: CalendarDays,
        path: "/campaigns/management",
      },
      {
        id: "content",
        title: "内容资产库",
        description: "图文、视频、文档素材管理",
        icon: FolderOpen,
        path: "/campaigns/content",
      },
      {
        id: "ai-content",
        title: "AI 内容生成",
        description: "AI 辅助文案与创意生成",
        icon: Sparkles,
        path: "/campaigns/ai-content",
      },
      {
        id: "promotion",
        title: "宣传投放",
        description: "广告投放计划与效果追踪",
        icon: Megaphone,
        path: "/campaigns/promotion",
      },
      {
        id: "registration",
        title: "报名与线索",
        description: "活动报名与线索收集管理",
        icon: UserPlus,
        path: "/campaigns/registration",
      },
    ],
  },
  {
    id: "performance",
    title: "绩效与复盘",
    icon: TrendingUp,
    path: "/performance",
    description: "活动绩效、渠道 ROI、合规风险、复盘迭代与策略回写",
    subModules: [
      {
        id: "campaign",
        title: "活动绩效",
        description: "单活动绩效评估与对比",
        icon: Award,
        path: "/performance/campaign",
      },
      {
        id: "channel-roi",
        title: "渠道 ROI",
        description: "各渠道投入产出比分析",
        icon: TrendingUp,
        path: "/performance/channel-roi",
      },
      {
        id: "compliance",
        title: "合规与风险",
        description: "营销合规审查与风险管控",
        icon: ShieldCheck,
        path: "/performance/compliance",
      },
      {
        id: "review",
        title: "复盘迭代",
        description: "活动复盘报告与改进计划",
        icon: RefreshCw,
        path: "/performance/review",
      },
      {
        id: "writeback",
        title: "策略回写",
        description: "复盘结论回写策略层闭环",
        icon: RotateCcw,
        path: "/performance/writeback",
      },
    ],
  },
];

// ---------- Mock 数据 ----------

export interface MockStat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface MockTableRow {
  [key: string]: string;
}

export interface MockTableData {
  headers: string[];
  rows: MockTableRow[];
}

export function getMockStats(moduleId: string): MockStat[] {
  const statsMap: Record<string, MockStat[]> = {
    dashboard: [
      { label: "营销预算总额", value: "¥3,200万", change: "+12.5%", trend: "up" },
      { label: "累计 ROI", value: "3.8x", change: "+0.4", trend: "up" },
      { label: "活跃活动数", value: "24", change: "+3", trend: "up" },
      { label: "线索总量", value: "8,651", change: "+18.2%", trend: "up" },
    ],
    strategy: [
      { label: "年度目标完成率", value: "68%", change: "+5%", trend: "up" },
      { label: "季度 OKR 达成", value: "14/20", change: "+2", trend: "up" },
      { label: "预算执行率", value: "72%", change: "+8%", trend: "up" },
      { label: "战略动作数", value: "32", change: "+4", trend: "up" },
    ],
    resources: [
      { label: "资源池总量", value: "1,284", change: "+56", trend: "up" },
      { label: "合作 KOL 数", value: "86", change: "+12", trend: "up" },
      { label: "活跃供应商", value: "45", change: "+3", trend: "up" },
      { label: "产品库 SKU", value: "328", change: "+15", trend: "up" },
    ],
    customers: [
      { label: "客户总数", value: "52,340", change: "+1,256", trend: "up" },
      { label: "高价值客户", value: "3,820", change: "+86", trend: "up" },
      { label: "互动覆盖率", value: "64%", change: "+3%", trend: "up" },
      { label: "画像完整度", value: "81%", change: "+5%", trend: "up" },
    ],
    channels: [
      { label: "活跃渠道数", value: "18", change: "+2", trend: "up" },
      { label: "区域覆盖", value: "26省", change: "+3", trend: "up" },
      { label: "产品落地率", value: "76%", change: "+4%", trend: "up" },
      { label: "线索转化率", value: "12.8%", change: "-0.3%", trend: "down" },
    ],
    campaigns: [
      { label: "进行中活动", value: "24", change: "+3", trend: "up" },
      { label: "内容资产数", value: "4,560", change: "+230", trend: "up" },
      { label: "AI 生成内容", value: "892", change: "+156", trend: "up" },
      { label: "报名总数", value: "12,480", change: "+1,820", trend: "up" },
    ],
    performance: [
      { label: "平均活动 ROI", value: "3.2x", change: "+0.3", trend: "up" },
      { label: "渠道 ROI 达标率", value: "78%", change: "+6%", trend: "up" },
      { label: "合规通过率", value: "96%", change: "+1%", trend: "up" },
      { label: "复盘完成率", value: "82%", change: "+8%", trend: "up" },
    ],
  };
  return statsMap[moduleId] || statsMap.dashboard;
}

export function getMockTable(moduleId: string): MockTableData {
  const tableMap: Record<string, MockTableData> = {
    dashboard: {
      headers: ["指标名称", "当前值", "目标值", "达成率", "状态"],
      rows: [
        { 指标名称: "营销预算执行", 当前值: "¥2,304万", 目标值: "¥3,200万", 达成率: "72%", 状态: "进行中" },
        { 指标名称: "累计 ROI", 当前值: "3.8x", 目标值: "4.0x", 达成率: "95%", 状态: "接近目标" },
        { 指标名称: "线索总量", 当前值: "8,651", 目标值: "10,000", 达成率: "87%", 状态: "进行中" },
        { 指标名称: "活动完成数", 当前值: "18", 目标值: "30", 达成率: "60%", 状态: "需关注" },
        { 指标名称: "客户转化率", 当前值: "12.8%", 目标值: "15%", 达成率: "85%", 状态: "接近目标" },
      ],
    },
    strategy: {
      headers: ["战略动作", "责任人", "截止日期", "进度", "状态"],
      rows: [
        { 战略动作: "品牌升级计划", 责任人: "张明", 截止日期: "2026-09-30", 进度: "75%", 状态: "进行中" },
        { 战略动作: "渠道下沉战略", 责任人: "李华", 截止日期: "2026-08-15", 进度: "60%", 状态: "进行中" },
        { 战略动作: "数字化营销转型", 责任人: "王芳", 截止日期: "2026-12-31", 进度: "40%", 状态: "进行中" },
        { 战略动作: "KOL 矩阵搭建", 责任人: "陈杰", 截止日期: "2026-07-31", 进度: "90%", 状态: "即将完成" },
      ],
    },
    resources: {
      headers: ["资源名称", "类型", "负责人", "可用状态", "使用次数"],
      rows: [
        { 资源名称: "行业白皮书模板", 类型: "文档", 负责人: "刘洋", 可用状态: "可用", 使用次数: "46" },
        { 资源名称: "KOL-李老师", 类型: "KOL", 负责人: "赵敏", 可用状态: "合作中", 使用次数: "12" },
        { 资源名称: "展位资源-A区", 类型: "场地", 负责人: "孙强", 可用状态: "已预订", 使用次数: "3" },
        { 资源名称: "产品演示视频", 类型: "视频", 负责人: "周婷", 可用状态: "可用", 使用次数: "89" },
      ],
    },
    customers: {
      headers: ["客户名称", "分层", "最近互动", "画像完整度", "推荐动作"],
      rows: [
        { 客户名称: "华夏科技有限公司", 分层: "S级", 最近互动: "2026-07-25", 画像完整度: "92%", 推荐动作: "深度拜访" },
        { 客户名称: "东方集团", 分层: "A级", 最近互动: "2026-07-20", 画像完整度: "78%", 推荐动作: "产品试用" },
        { 客户名称: "创新互联", 分层: "B级", 最近互动: "2026-07-18", 画像完整度: "65%", 推荐动作: "内容触达" },
        { 客户名称: "宏远实业", 分层: "A级", 最近互动: "2026-07-15", 画像完整度: "81%", 推荐动作: "活动邀请" },
      ],
    },
    channels: {
      headers: ["渠道名称", "区域", "本月业绩", "转化率", "ROI"],
      rows: [
        { 渠道名称: "华北直销团队", 区域: "北京", 本月业绩: "¥580万", 转化率: "18.5%", ROI: "4.2x" },
        { 渠道名称: "华东代理商", 区域: "上海", 本月业绩: "¥420万", 转化率: "14.2%", ROI: "3.5x" },
        { 渠道名称: "线上电商渠道", 区域: "全国", 本月业绩: "¥860万", 转化率: "22.1%", ROI: "5.1x" },
        { 渠道名称: "华南分销", 区域: "深圳", 本月业绩: "¥350万", 转化率: "11.8%", ROI: "2.8x" },
      ],
    },
    campaigns: {
      headers: ["活动名称", "类型", "开始日期", "报名数", "状态"],
      rows: [
        { 活动名称: "夏季产品发布会", 类型: "线上直播", 开始日期: "2026-07-15", 报名数: "3,280", 状态: "进行中" },
        { 活动名称: "行业峰会2026", 类型: "线下大会", 开始日期: "2026-08-20", 报名数: "1,560", 状态: "筹备中" },
        { 活动名称: "产品体验周", 类型: "混合活动", 开始日期: "2026-07-10", 报名数: "2,840", 状态: "已结束" },
        { 活动名称: "KOL 联合推广", 类型: "社交媒体", 开始日期: "2026-07-25", 报名数: "4,800", 状态: "进行中" },
      ],
    },
    performance: {
      headers: ["复盘项目", "活动名称", "ROI", "关键发现", "改进动作"],
      rows: [
        { 复盘项目: "Q2 产品发布会", 活动名称: "夏季产品发布会", ROI: "3.5x", 关键发现: "直播转化超预期", 改进动作: "加大直播投入" },
        { 复盘项目: "渠道效能评估", 活动名称: "华东渠道季", ROI: "2.8x", 关键发现: "代理商赋能不足", 改进动作: "启动代理商培训" },
        { 复盘项目: "内容营销效果", 活动名称: "内容矩阵计划", ROI: "4.2x", 关键发现: "AI内容效率高", 改进动作: "扩大AI内容生产" },
        { 复盘项目: "KOL 投放复盘", 活动名称: "KOL联合推广", ROI: "3.1x", 关键发现: "中腰部KOL性价比优", 改进动作: "调整KOL结构" },
      ],
    },
  };
  return tableMap[moduleId] || tableMap.dashboard;
}

// ---------- 辅助函数 ----------

export function getModuleByPath(pathname: string): ModuleConfig | undefined {
  return modules.find((m) => pathname.startsWith(m.path));
}

export function getSubModuleByPath(pathname: string): SubModule | undefined {
  for (const m of modules) {
    const sub = m.subModules.find((s) => s.path === pathname);
    if (sub) return sub;
  }
  return undefined;
}
