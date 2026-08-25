import DashboardLayout from "../components/DashboardLayout";
import { LayoutDashboard, Package, Boxes, BarChart3 } from "lucide-react";

const navItems = [
	{ to: "/seller", label: "Dashboard", icon: LayoutDashboard, end: true },
	{ to: "/seller/products", label: "Products", icon: Package },
	{ to: "/seller/inventory", label: "Inventory", icon: Boxes },
	{ to: "/seller/analytics", label: "Analytics", icon: BarChart3 },
];

export default function SellerLayout() {
	return (
		<DashboardLayout
			title="Seller Hub"
			gradient="bg-linear-to-b from-brand-700 to-brand-900"
			navItems={navItems}
			userLabel="Seller"
		/>
	);
}
