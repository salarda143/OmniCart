import { Card } from "../../components/ui";
import { Boxes, AlertTriangle } from "lucide-react";
import { products } from "../../data/products";

export default function Inventory() {
	return (
		<div>
			<div className="mb-6">
				<h2 className="text-2xl font-extrabold text-slate-900">Inventory</h2>
				<p className="text-sm text-slate-500">Track stock levels for your store.</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
				<Card>
					<div className="flex items-center gap-3">
						<div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600">
							<Boxes className="w-5 h-5" />
						</div>
						<div>
							<p className="text-2xl font-extrabold text-slate-900">528</p>
							<p className="text-sm text-slate-500">Total units</p>
						</div>
					</div>
				</Card>
				<Card>
					<div className="flex items-center gap-3">
						<div className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600">
							<Boxes className="w-5 h-5" />
						</div>
						<div>
							<p className="text-2xl font-extrabold text-slate-900">496</p>
							<p className="text-sm text-slate-500">In stock</p>
						</div>
					</div>
				</Card>
				<Card>
					<div className="flex items-center gap-3">
						<div className="grid place-items-center w-11 h-11 rounded-xl bg-rose-50 text-rose-600">
							<AlertTriangle className="w-5 h-5" />
						</div>
						<div>
							<p className="text-2xl font-extrabold text-slate-900">32</p>
							<p className="text-sm text-slate-500">Low stock</p>
						</div>
					</div>
				</Card>
			</div>

			<Card title="Stock by Product">
				<div className="space-y-4">
					{products.map((p) => {
						const stock = 120 - p.id * 7;
						const pct = Math.max(8, Math.min(100, stock));
						return (
							<div key={p.id}>
								<div className="flex items-center justify-between text-sm mb-1.5">
									<span className="font-medium text-slate-700">{p.name}</span>
									<span className="text-slate-400">{stock} units</span>
								</div>
								<div className="h-2 rounded-full bg-slate-100 overflow-hidden">
									<div
										className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
										style={{ width: `${pct}%` }}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</Card>
		</div>
	);
}
