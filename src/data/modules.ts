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
  PiggyBank,
  Activity,
  Database,
  Star,
  Truck,
  Package,
  FileText,
  Contact,
  MessageSquare,
  Lightbulb,
  MapPin,
  PackageCheck,
  MessageCircle,
  Share2,
  CalendarDays,
  FolderOpen,
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
  { label: "洞察", path: "/insights", color: "#0ea5e9" },
  { label: "策略", path: "/strategy", color: "#6366f1" },
  { label: "资源", path: "/resources", color: "#8b5cf6" },
  { label: "营销", path: "/campaigns", color: "#10b981" },
  { label: "渠道", path: "/channels", color: "#f59e0b" },
  { label: "绩效", path: "/performance", color: "#06b6d4" },
];

// ---------- 一级模块定义 ----------

export const modules: ModuleConfig[] = [
  {
    id: "dashboard",
    title: "营销驾驶舱",
    icon: LayoutDashboard,
    path: "/dashboard",
    description: "统一运转营销战略、资源、项目、人员、预算、流程与复盘，联动六大业务模块形成经营闭环",
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
    id: "insights",
    title: "市场洞察",
    icon: Activity,
    path: "/insights",
    description: "汇聚宏观、行业、竞品、客户、舆情与一线反馈，支撑策略制定",
    subModules: [
      {
        id: "macro",
        title: "宏观环境",
        description: "政策、经济、技术、社会趋势、监管变化",
        icon: Activity,
        path: "/insights/macro",
      },
      {
        id: "industry",
        title: "行业市场",
        description: "市场规模、增速、品类趋势、产业链、区域机会",
        icon: BarChart3,
        path: "/insights/industry",
      },
      {
        id: "competitors",
        title: "竞争对手",
        description: "产品、价格、渠道、传播、投放、口碑、活动",
        icon: Target,
        path: "/insights/competitors",
      },
      {
        id: "target-customers",
        title: "目标客户",
        description: "客户画像、需求、痛点、购买动机、决策路径",
        icon: Users,
        path: "/insights/target-customers",
      },
      {
        id: "brand-sentiment",
        title: "品牌舆情",
        description: "品牌声量、正负面舆情、热点话题、危机预警",
        icon: Megaphone,
        path: "/insights/brand-sentiment",
      },
      {
        id: "frontline-feedback",
        title: "一线反馈",
        description: "销售反馈、客服问题、客户投诉、渠道反馈、产品评价",
        icon: MessageSquare,
        path: "/insights/frontline-feedback",
      },
    ],
  },
  {
    id: "strategy",
    title: "策略与目标",
    icon: Target,
    path: "/strategy",
    description: "明确目标客户、市场定位、合规边界、年度策略、预算与目标跟进",
    subModules: [
      {
        id: "target-customers",
        title: "目标客户",
        description: "客户细分与目标客户选择，明确优先行业、区域、人群和客户等级",
        icon: Users,
        path: "/strategy/target-customers",
      },
      {
        id: "positioning",
        title: "市场定位",
        description: "市场选择、品牌定位与差异化表达",
        icon: Target,
        path: "/strategy/positioning",
      },
      {
        id: "compliance",
        title: "合规管理",
        description: "监管要求、宣传边界、审批流程与风险预警",
        icon: ShieldCheck,
        path: "/strategy/compliance",
      },
      {
        id: "annual",
        title: "年度策略",
        description: "增长目标、市场策略、渠道策略与品牌策略",
        icon: Calendar,
        path: "/strategy/annual",
      },
      {
        id: "budget",
        title: "预算规划",
        description: "全年营销预算分配、投入优先级与执行管控",
        icon: PiggyBank,
        path: "/strategy/budget",
      },
      {
        id: "tracking",
        title: "目标跟进",
        description: "目标拆解、进度追踪、偏差预警与复盘校准",
        icon: Activity,
        path: "/strategy/tracking",
      },
    ],
  },
  {
    id: "resources",
    title: "资源与产品",
    icon: Boxes,
    path: "/resources",
    description: "管理营销资源池、客户资源、供应商、产品库、营销弹药与营销案例",
    subModules: [
      {
        id: "pool",
        title: "资源池",
        description: "营销资源统一管理与调度",
        icon: Database,
        path: "/resources/pool",
      },
      {
        id: "customer-resources",
        title: "客户资源",
        description: "客户名单、专家资源、合作联系人与关系网络管理",
        icon: Contact,
        path: "/resources/customer-resources",
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
      {
        id: "cases",
        title: "营销案例",
        description: "成功案例、标杆项目、打法复盘与可复用模板",
        icon: Star,
        path: "/resources/cases",
      },
    ],
  },
  {
    id: "campaigns",
    title: "整合营销",
    icon: Megaphone,
    path: "/campaigns",
    description: "统一管理活动、内容资产、品牌传播、公关关系、私域运营与客户转化",
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
        description: "医学证据、临床应用、产品服务与品牌信任内容管理",
        icon: FolderOpen,
        path: "/campaigns/content",
      },
      {
        id: "brand-communication",
        title: "品牌传播",
        description: "品牌表达、传播节奏、内容投放与声量建设",
        icon: Megaphone,
        path: "/campaigns/brand-communication",
      },
      {
        id: "public-relations",
        title: "公共关系",
        description: "媒体关系、专家关系、舆情沟通与危机应对",
        icon: MessageSquare,
        path: "/campaigns/public-relations",
      },
      {
        id: "private-operations",
        title: "私域运营",
        description: "私域触达、社群运营、会员维护与精细化互动",
        icon: UserPlus,
        path: "/campaigns/private-operations",
      },
      {
        id: "customer-conversion",
        title: "客户转化",
        description: "线索培育、报名转化、销售协同与转化漏斗优化",
        icon: Filter,
        path: "/campaigns/customer-conversion",
      },
    ],
  },

  {
    id: "channels",
    title: "渠道与销售",
    icon: Handshake,
    path: "/channels",
    description: "渠道表现、区域销售、产品落地、客户运营与成交转化",
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
        description: "业绩总览、产品分析与团队效能",
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
        title: "客户运营",
        description: "客户触达、运营维护、互动跟进与关系经营",
        icon: MessageCircle,
        path: "/channels/feedback",
      },
      {
        id: "leads",
        title: "成交转化",
        description: "线索推进、商机跟进、成交协同与转化闭环",
        icon: Share2,
        path: "/channels/leads",
      },
      {
        id: "enablement",
        title: "销售赋能",
        description: "销售培训、销售支持、工具资料与一线赋能",
        icon: Lightbulb,
        path: "/channels/enablement",
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
        id: "target-followup",
        title: "目标跟进",
        description: "年度目标、阶段进度与关键指标跟进",
        icon: Target,
        path: "/performance/target-followup",
      },
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
      { label: "目标达成率", value: "86%", change: "+6%", trend: "up" },
      { label: "预算执行率", value: "72%", change: "+8%", trend: "up" },
      { label: "重点项目数", value: "24", change: "+3", trend: "up" },
      { label: "闭环事项完成率", value: "91%", change: "+5%", trend: "up" },
    ],
    insights: [
      { label: "洞察主题数", value: "126", change: "+18", trend: "up" },
      { label: "行业监测源", value: "42", change: "+6", trend: "up" },
      { label: "竞品动态", value: "38", change: "+9", trend: "up" },
      { label: "预警事项", value: "7", change: "-2", trend: "up" },
    ],
    strategy: [
      { label: "目标客户覆盖", value: "68%", change: "+5%", trend: "up" },
      { label: "定位策略完成", value: "14/20", change: "+2", trend: "up" },
      { label: "预算执行率", value: "72%", change: "+8%", trend: "up" },
      { label: "目标跟进事项", value: "32", change: "+4", trend: "up" },
    ],
    resources: [
      { label: "资源池总量", value: "1,284", change: "+56", trend: "up" },
      { label: "客户资源数", value: "86", change: "+12", trend: "up" },
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
      { label: "品牌传播触达", value: "128万", change: "+18%", trend: "up" },
      { label: "客户转化线索", value: "12,480", change: "+1,820", trend: "up" },
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
    insights: {
      headers: ["洞察对象", "主要内容"],
      rows: [
        { 洞察对象: "宏观环境", 主要内容: "政策、经济、技术、社会趋势、监管变化" },
        { 洞察对象: "行业市场", 主要内容: "市场规模、增速、品类趋势、产业链、区域机会" },
        { 洞察对象: "竞争对手", 主要内容: "产品、价格、渠道、传播、投放、口碑、活动" },
        { 洞察对象: "目标客户", 主要内容: "客户画像、需求、痛点、购买动机、决策路径" },
        { 洞察对象: "品牌舆情", 主要内容: "品牌声量、正负面舆情、热点话题、危机预警" },
        { 洞察对象: "一线反馈", 主要内容: "销售反馈、客服问题、客户投诉、渠道反馈、产品评价" },
      ],
    },
    strategy: {
      headers: ["模块", "核心内容"],
      rows: [
        { 模块: "客户细分", 核心内容: "按行业、区域、规模、价值、需求、行为进行分群" },
        { 模块: "目标客户选择", 核心内容: "确定优先行业、区域、人群、客户等级" },
        { 模块: "市场选择", 核心内容: "确定重点市场、重点产品线、重点渠道" },
        { 模块: "品牌定位", 核心内容: "品牌价值主张、差异化、核心认知、品牌表达" },
        { 模块: "年度营销战略", 核心内容: "增长目标、市场策略、渠道策略、品牌策略" },
        { 模块: "客户旅程设计", 核心内容: "从认知、兴趣、比较、购买到复购和推荐的旅程设计" },
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
