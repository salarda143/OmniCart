import { StatCard, Card } from "../../components/ui";
import { DollarSign, Users, MousePointerClick, TrendingUp } from "lucide-react";

const bars = [40, 55, 48, 70, 65, 82, 90];

export default function Analytics() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-extrabold text-slate-900">Analytics</h2>
				<p className="text-sm text-slate-500">Performance over the last 7 days.</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				<StatCard icon={DollarSign} label="Revenue" value="₱64.3K" trend="11%" tone="brand" />
				<StatCard icon={MousePointerClick} label="Conversion" value="4.8%" trend="2%" tone="emerald" />
				<StatCard icon={Users} label="New Customers" value="312" trend="7%" tone="amber" />
				<StatCard icon={TrendingUp} label="Growth" value="18%" trend="5%" tone="rose" />
			</div>

			<Card title="Weekly Revenue">
				<div className="flex items-end gap-3 h-48">
					{bars.map((b, i) => (
						<div key={i} className="flex-1 flex flex-col items-center gap-2">
							<div
								className="w-full rounded-t-lg bg-gradient-to-t from-brand-500 to-accent-400 transition-all"
								style={{ height: `${b}%` }}
							/>
							<span className="text-xs text-slate-400">
								{["M", "T", "W", "T", "F", "S", "S"][i]}
							</span>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
}
