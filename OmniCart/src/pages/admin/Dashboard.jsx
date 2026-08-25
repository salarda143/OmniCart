import { StatCard, Card, SeeAll, Table } from "../../components/ui";
import { DollarSign, ShoppingCart, Users, Package, MoreHorizontal } from "lucide-react";
import { products, formatPrice } from "../../data/products";

const recentOrders = [
	{ id: "#OC-2041", customer: "Maria Santos", total: 35000, status: "Paid" },
	{ id: "#OC-2040", customer: "John Cruz", total: 15000, status: "Pending" },
	{ id: "#OC-2039", customer: "Ana Reyes", total: 1200, status: "Paid" },
	{ id: "#OC-2038", customer: "Pedro Diaz", total: 3200, status: "Refunded" },
];

const statusStyles = {
	Paid: "bg-emerald-50 text-emerald-600",
	Pending: "bg-amber-50 text-amber-600",
	Refunded: "bg-rose-50 text-rose-600",
};

export default function Dashboard() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				<StatCard icon={DollarSign} label="Revenue" value="₱1.2M" trend="12%" tone="brand" />
				<StatCard icon={ShoppingCart} label="Orders" value="8,402" trend="8%" tone="emerald" />
				<StatCard icon={Users} label="Users" value="12,318" trend="5%" tone="amber" />
				<StatCard icon={Package} label="Products" value="52,910" trend="3%" tone="rose" />
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
				<Card
					title="Recent Orders"
					className="xl:col-span-2"
					action={<SeeAll to="/admin/inventory" />}
				>
					<Table headers={["Order", "Customer", "Total", "Status"]}>
						{recentOrders.map((o) => (
							<tr key={o.id} className="hover:bg-slate-50 transition">
								<td className="px-4 py-3 font-medium text-slate-900">{o.id}</td>
								<td className="px-4 py-3 text-slate-600">{o.customer}</td>
								<td className="px-4 py-3 text-slate-700 font-medium">
									{formatPrice(o.total)}
								</td>
								<td className="px-4 py-3">
									<span
										className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[o.status]}`}
									>
										{o.status}
									</span>
								</td>
							</tr>
						))}
					</Table>
				</Card>

				<Card title="Top Products">
					<ul className="space-y-4">
						{products.slice(0, 4).map((p) => (
							<li key={p.id} className="flex items-center gap-3">
								<img
									src={p.image}
									alt={p.name}
									className="h-10 w-10 rounded-lg object-cover"
								/>
								<div className="min-w-0 flex-1">
									<p className="text-sm font-medium text-slate-900 truncate">
										{p.name}
									</p>
									<p className="text-xs text-slate-400">{p.category}</p>
								</div>
								<button className="text-slate-300 hover:text-slate-500">
									<MoreHorizontal className="w-4 h-4" />
								</button>
							</li>
						))}
					</ul>
				</Card>
			</div>
		</div>
	);
}
