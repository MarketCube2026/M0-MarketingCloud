import type { MockTableData } from "../data/modules";

interface MockTableProps {
  data: MockTableData;
}

export default function MockTable({ data }: MockTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white border border-black/[0.04]">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-black/[0.04]">
            {data.headers.map((header, i) => (
              <th
                key={i}
                className="px-5 py-3.5 text-[11px] font-semibold tracking-[0.1em] text-slate-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-black/[0.03] transition-colors duration-150 last:border-0 hover:bg-emerald-50/30`}
            >
              {data.headers.map((header, j) => {
                const value = row[header] || "-";
                const isStatus =
                  header === "状态" || header === "可用状态";
                const isFirst = j === 0;
                return (
                  <td
                    key={j}
                    className={`px-5 py-3.5 text-[13px] ${
                      isFirst ? "font-medium text-slate-800" : "text-slate-600"
                    }`}
                  >
                    {isStatus ? (
                      <span
                        className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-medium ${
                          value === "进行中" || value === "可用" || value === "合作中"
                            ? "bg-emerald-50 text-emerald-600"
                            : value === "即将完成" || value === "筹备中"
                            ? "bg-amber-50 text-amber-600"
                            : value === "需关注"
                            ? "bg-rose-50 text-rose-500"
                            : value === "已结束" || value === "已预订" || value === "已完成" || value === "已完成"
                            ? "bg-slate-100 text-slate-500"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
