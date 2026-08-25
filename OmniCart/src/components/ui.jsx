import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function StatCard({ icon: Icon, label, value, trend, tone = "brand" }) {
  const boxTones = {
    brand: "from-brand-500 to-brand-700",
    emerald: "from-emerald-500 to-green-600",
    amber: "from-amber-500 to-orange-600",
    rose: "from-rose-500 to-pink-600",
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-5 hover:shadow-soft transition">
      <div className="flex items-start justify-between">
        <div
          className={`grid place-items-center w-11 h-11 rounded-xl bg-linear-to-br ${boxTones[tone]} text-white shadow-md`}
        >
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600">
            <ArrowUpRight className="w-3.5 h-3.5" />
            {trend}
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-extrabold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}

export function Card({ title, action, children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-100 shadow-card ${className}`}
    >
      {(title || action) && (
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100">
          {title && <h3 className="font-bold text-slate-900">{title}</h3>}
          {action}
        </div>
      )}
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function SeeAll({ to }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
    >
      See all <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

export function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-400">
            {headers.map((h) => (
              <th key={h} className="font-medium px-4 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">{children}</tbody>
      </table>
    </div>
  );
}
