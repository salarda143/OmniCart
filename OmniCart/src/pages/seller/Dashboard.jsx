import { StatCard, Card, SeeAll, Table } from "../../components/ui";
import { DollarSign, Package, TrendingUp, Eye } from "lucide-react";
import { products, formatPrice } from "../../data/products";

const recent = [
	{ id: "#SL-118", item: "Quantum Pro Laptop", qty: 1, total: 35000, status: "Shipped" },
	{ id: "#SL-117", item: "Aurora Smartphone X", qty: 2, total: 30000, status: "Processing" },
	{ id: "#SL-116", item: "Nimbus Earbuds", qty: 4, total: 12800, status: "Delivered" },
];

const statusStyles = {
	Shipped: "bg-brand-50 text-brand-600",
	Processing: "bg-amber-50 text-amber-600",
	Delivered: "bg-emerald-50 text-emerald-600",
};

export default function Dashboard() {
	return (
		<div className="space-y-6">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
					<StatCard icon={DollarSign} label="Revenue" value="₱482K" trend="9%" tone="brand" />
					<StatCard icon={Package} label="Products" value="24" trend="2%" tone="emerald" />
					<StatCard icon={TrendingUp} label="Orders" value="1,204" trend="14%" tone="amber" />
					<StatCard icon={Eye} label="Views" value="38.2K" trend="6%" tone="rose" />
				</div>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
				<Card title="Recent Sales" className="xl:col-span-2" action={<SeeAll to="/seller/products" />}>
					<Table headers={["Order", "Item", "Qty", "Total", "Status"]}>
						{recent.map((o) => (
							<tr key={o.id} className="hover:bg-slate-50 transition">
								<td className="px-4 py-3 font-medium text-slate-900">{o.id}</td>
								<td className="px-4 py-3 text-slate-600">{o.item}</td>
								<td className="px-4 py-3 text-slate-600">{o.qty}</td>
								<td className="px-4 py-3 text-slate-700 font-medium">{formatPrice(o.total)}</td>
								<td className="px-4 py-3">
									<span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[o.status]}`}>
										{o.status}
									</span>
								</td>
							</tr>
						))}
					</Table>
				</Card>

				<Card title="Your Products">
					<ul className="space-y-4">
						{products.slice(0, 4).map((p) => (
							<li key={p.id} className="flex items-center gap-3">
								<img src={p.image} alt={p.name} className="h-10 w-10 rounded-lg object-cover" />
								<div className="min-w-0 flex-1">
									<p className="text-sm font-medium text-slate-900 truncate">{p.name}</p>
									<p className="text-xs text-slate-400">{formatPrice(p.price)}</p>
								</div>
								<span className="text-xs text-slate-400">{p.rating}★</span>
							</li>
						))}
					</ul>
				</Card>
			</div>
		</div>
	);
}
