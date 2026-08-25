import { Card } from "../../components/ui";
import { Settings as SettingsIcon, Store, Bell, ShieldCheck } from "lucide-react";

const groups = [
	{
		icon: Store,
		title: "General",
		desc: "Marketplace name, currency, and language.",
	},
	{
		icon: Bell,
		title: "Notifications",
		desc: "Email alerts for orders and new sellers.",
	},
	{
		icon: ShieldCheck,
		title: "Security",
		desc: "Two-factor auth and session controls.",
	},
];

export default function Settings() {
	return (
		<div className="max-w-3xl">
			<h2 className="text-2xl font-extrabold text-slate-900 mb-6">Settings</h2>

			<div className="space-y-4">
				{groups.map((g) => (
					<Card key={g.title}>
						<div className="flex items-center gap-4">
							<div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600">
								<g.icon className="w-5 h-5" />
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-slate-900">{g.title}</h3>
								<p className="text-sm text-slate-500">{g.desc}</p>
							</div>
							<SettingsIcon className="w-5 h-5 text-slate-300" />
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
