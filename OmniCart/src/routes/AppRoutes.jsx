import { Routes, Route } from "react-router-dom";

import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";
import SellerLayout from "../layouts/SellerLayout";

import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import Cart from "../pages/customer/Cart";
import Login from "../pages/customer/Login";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminInventory from "../pages/admin/Inventory";
import AdminUsers from "../pages/admin/Users";
import AdminSettings from "../pages/admin/Settings";

import SellerDashboard from "../pages/seller/Dashboard";
import SellerProducts from "../pages/seller/Products";
import SellerInventory from "../pages/seller/Inventory";
import SellerAnalytics from "../pages/seller/Analytics";

function AppRoutes() {
	return (
		<Routes>
			{/* Customer storefront */}
			<Route element={<CustomerLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
			</Route>

			{/* Admin */}
			<Route path="/admin" element={<AdminLayout />}>
				<Route index element={<AdminDashboard />} />
				<Route path="inventory" element={<AdminInventory />} />
				<Route path="users" element={<AdminUsers />} />
				<Route path="settings" element={<AdminSettings />} />
			</Route>

			{/* Seller */}
			<Route path="/seller" element={<SellerLayout />}>
				<Route index element={<SellerDashboard />} />
				<Route path="products" element={<SellerProducts />} />
				<Route path="inventory" element={<SellerInventory />} />
				<Route path="analytics" element={<SellerAnalytics />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
