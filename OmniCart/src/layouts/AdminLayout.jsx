import DashboardLayout from "../components/DashboardLayout";
import { LayoutDashboard, Package, Users, Settings } from "lucide-react";

const navItems = [
	{ to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
	{ to: "/admin/inventory", label: "Inventory", icon: Package },
	{ to: "/admin/users", label: "Users", icon: Users },
	{ to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout() {
	return (
		<DashboardLayout
			title="Admin Panel"
			gradient="bg-slate-900"
			navItems={navItems}
			userLabel="Admin"
		/>
	);
}
