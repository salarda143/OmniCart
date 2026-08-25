import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
	ShoppingCart,
	Search,
	Menu,
	X,
	Heart,
	UserRound,
} from "lucide-react";
import logo from "../assets/Logo.png";

const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/products", label: "Products" },
	{ to: "/cart", label: "Cart" },
];

function Navbar() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const cartCount = 3;

	return (
		<header className="sticky top-0 z-50 glass border-b border-white/60 shadow-[0_1px_20px_-10px_rgba(79,70,229,0.3)]">
			<nav className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
				{/* Logo */}
				<Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
					<img
						src={logo}
						alt="OmniCart"
						className="h-11 sm:h-14 w-auto max-w-[10rem] object-contain"
					/>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							end={link.to === "/"}
							className={({ isActive }) =>
								`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
									isActive
										? "text-brand-700 bg-brand-50"
										: "text-slate-600 hover:text-brand-700 hover:bg-brand-50/60"
								}`
							}
						>
							{link.label}
						</NavLink>
					))}
				</div>

				{/* Search + actions */}
				<div className="hidden md:flex items-center gap-3 flex-1 max-w-md justify-end">
					<div className="relative w-full max-w-[16rem]">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
						<input
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search products..."
							className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-slate-200 bg-white/70 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
						/>
					</div>

					<button
						className="relative grid place-items-center w-10 h-10 rounded-full text-slate-600 hover:text-brand-700 hover:bg-brand-50 transition"
						aria-label="Wishlist"
					>
						<Heart className="w-5 h-5" />
					</button>

					<Link
						to="/cart"
						className="relative grid place-items-center w-10 h-10 rounded-full text-slate-600 hover:text-brand-700 hover:bg-brand-50 transition"
						aria-label="Cart"
					>
						<ShoppingCart className="w-5 h-5" />
						{cartCount > 0 && (
							<span className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[18px] h-[18px] px-1 text-[11px] font-bold text-white bg-brand-600 rounded-full ring-2 ring-white">
								{cartCount}
							</span>
						)}
					</Link>

					<Link
						to="/login"
						className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 hover:shadow-glow transition"
					>
						<UserRound className="w-4 h-4" />
						Login
					</Link>
				</div>

				{/* Mobile toggle */}
				<button
					className="md:hidden grid place-items-center w-10 h-10 rounded-full text-slate-700 hover:bg-brand-50 transition"
					onClick={() => setOpen((v) => !v)}
					aria-label="Menu"
				>
					{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</nav>

			{/* Mobile menu */}
			{open && (
				<div className="md:hidden border-t border-white/60 bg-white/95 animate-fade-in">
					<div className="px-4 py-3">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
							<input
								placeholder="Search products..."
								className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none"
							/>
						</div>
					</div>
					<div className="flex flex-col px-2 pb-4">
						{navLinks.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								end={link.to === "/"}
								onClick={() => setOpen(false)}
								className={({ isActive }) =>
									`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
										isActive
											? "text-brand-700 bg-brand-50"
											: "text-slate-700 hover:bg-slate-50"
									}`
								}
							>
								{link.label}
								{link.label === "Cart" && cartCount > 0 && (
									<span className="grid place-items-center min-w-[20px] h-5 px-1 text-[11px] font-bold text-white bg-brand-600 rounded-full">
										{cartCount}
									</span>
								)}
							</NavLink>
						))}
						<Link
							to="/login"
							onClick={() => setOpen(false)}
							className="mt-2 flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-brand-700 transition"
						>
							<UserRound className="w-4 h-4" />
							Login
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}

export default Navbar;
