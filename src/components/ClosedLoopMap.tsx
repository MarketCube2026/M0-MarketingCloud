import { useNavigate } from "react-router-dom";
import { loopNodes } from "../data/modules";

const CX = 340;
const CY = 330;
const R = 220;
const NODE_R = 48;

// 绿色系节点配色：从深绿到浅绿的 emerald 渐变
const nodeColors = [
  { bg: "#059669", glow: "#059669" },   // 策略 - emerald-600
  { bg: "#0d9488", glow: "#0d9488" },   // 资源 - teal-600
  { bg: "#10b981", glow: "#10b981" },   // 客户 - emerald-500
  { bg: "#14b8a6", glow: "#14b8a6" },   // 渠道 - teal-500
  { bg: "#34d399", glow: "#34d399" },   // 活动 - emerald-400
  { bg: "#2dd4bf", glow: "#2dd4bf" },   // 绩效 - teal-400
  { bg: "#047857", glow: "#047857" },   // 复盘 - emerald-700
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default function ClosedLoopMap() {
  const navigate = useNavigate();
  const count = loopNodes.length;
  const angleStep = 360 / count;

  return (
    <div className="flex min-w-0 flex-col items-center gap-8 xl:flex-row xl:justify-center xl:gap-16">
      {/* SVG 闭环地图 */}
      <div className="w-full min-w-0 flex-shrink animate-fade-up">
        <svg
          viewBox="0 0 680 660"
          className="mx-auto h-auto w-full max-w-[460px]"
        >
          <defs>
            {/* 节点渐变 */}
            {nodeColors.map((c, i) => (
              <linearGradient key={`grad-${i}`} id={`nodeGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={c.bg} />
                <stop offset="100%" stopColor={c.bg} style={{ stopOpacity: 0.75 }} />
              </linearGradient>
            ))}
            {/* 光晕滤镜 */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0a1f18" floodOpacity="0.2" />
            </filter>
            {/* 箭头 */}
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M 0 0 L 8 3 L 0 6 Z" fill="#94a3b8" style={{ fillOpacity: 0.5 }} />
            </marker>
            {/* 中心渐变 */}
            <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f4f8f6" />
            </radialGradient>
          </defs>

          {/* 背景圆域 */}
          <circle cx={CX} cy={CY} r={R + 60} fill="url(#centerGrad)" style={{ opacity: 0.6 }} />

          {/* 中心文字 */}
          <text x={CX} y={CY - 16} textAnchor="middle" fill="#0f172a" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "0.05em" }}>
            营销闭环
          </text>
          <text x={CX} y={CY + 8} textAnchor="middle" fill="#94a3b8" style={{ fontSize: "12px", letterSpacing: "0.2em", fontWeight: 500 }}>
            MARKETING LOOP
          </text>
          {/* 中心装饰环 */}
          <circle cx={CX} cy={CY} r={38} fill="none" stroke="#d1fae5" strokeWidth="0.5" style={{ opacity: 0.8 }} />

          {/* 轨道环 */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#d1fae5" strokeWidth="1" strokeDasharray="3 8" style={{ opacity: 0.5 }} />

          {/* 连接弧线 */}
          {loopNodes.map((_, i) => {
            const nextI = (i + 1) % count;
            const startAngle = i * angleStep + 12;
            const endAngle = nextI * angleStep - 12;
            const adjustedEnd = endAngle < startAngle ? endAngle + 360 : endAngle;
            return (
              <path
                key={`arc-${i}`}
                d={describeArc(CX, CY, R, startAngle, adjustedEnd)}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="0"
                markerEnd="url(#arrowhead)"
                style={{ opacity: 0.35 }}
              />
            );
          })}

          {/* 节点 */}
          {loopNodes.map((node, i) => {
            const pos = polarToCartesian(CX, CY, R, i * angleStep);
            const colorSet = nodeColors[i];
            return (
              <g
                key={`node-${i}`}
                onClick={() => navigate(node.path)}
                className="cursor-pointer"
                style={{ transition: "transform 0.2s" }}
              >
                {/* 外层光晕 */}
                <circle cx={pos.x} cy={pos.y} r={NODE_R + 12} fill={colorSet.glow} style={{ opacity: 0.08 }} className="animate-pulse-soft" />
                {/* 悬停光晕 */}
                <circle cx={pos.x} cy={pos.y} r={NODE_R + 6} fill={colorSet.bg} style={{ opacity: 0 }} className="transition-all duration-300 group-hover:opacity-20" />
                {/* 主节点 */}
                <circle cx={pos.x} cy={pos.y} r={NODE_R} fill={`url(#nodeGrad-${i})`} filter="url(#softShadow)" />
                {/* 内圈高光 */}
                <circle cx={pos.x} cy={pos.y - 8} r={NODE_R * 0.6} fill="white" style={{ opacity: 0.08 }} />
                {/* 序号 */}
                <text x={pos.x} y={pos.y - 6} textAnchor="middle" fill="white" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", opacity: 0.5 }}>
                  {String(i + 1).padStart(2, "0")}
                </text>
                {/* 标签 */}
                <text x={pos.x} y={pos.y + 14} textAnchor="middle" fill="white" style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "0.06em" }}>
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 右侧节点列表 */}
      <div className="w-full max-w-[360px] space-y-5 animate-fade-up xl:max-w-[280px]" style={{ animationDelay: "200ms" }}>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/60 mb-2">闭环说明</div>
          <p className="text-[13px] leading-[1.7] text-slate-500/80">
            以市场洞察为起点，经策略制定、资源配置、整合营销、渠道销售与绩效复盘，
            形成持续迭代的营销经营闭环。
          </p>
        </div>
        <div className="space-y-2">
          {loopNodes.map((node, i) => (
            <button
              key={i}
              onClick={() => navigate(node.path)}
              className="group flex w-full items-center gap-3 rounded-lg bg-white border border-black/[0.04] px-3.5 py-2.5 text-left transition-all duration-200 hover:border-emerald-200/80 hover:shadow-md hover:shadow-emerald-50/40"
            >
              <span
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-[10px] font-bold tracking-wide text-white shadow-sm"
                style={{ background: nodeColors[i].bg, boxShadow: `0 2px 8px ${nodeColors[i].glow}25` }}
              >
                {i + 1}
              </span>
              <span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                {node.label}
              </span>
              <svg className="ml-auto h-3.5 w-3.5 text-slate-300/0 transition-all duration-200 group-hover:text-emerald-500 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
