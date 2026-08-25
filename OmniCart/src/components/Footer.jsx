import { Link } from "react-router-dom";
import {
	Globe,
	MessageCircle,
	Send,
	AtSign,
	Mail,
	MapPin,
	ArrowRight,
} from "lucide-react";

const columns = [
	{
		title: "Shop",
		links: [
			{ label: "Home", to: "/" },
			{ label: "Products", to: "/products" },
			{ label: "Cart", to: "/cart" },
			{ label: "Login", to: "/login" },
		],
	},
	{
		title: "For Sellers",
		links: [
			{ label: "Sell Products", to: "/seller/products" },
			{ label: "Manage Inventory", to: "/seller/inventory" },
			{ label: "Seller Dashboard", to: "/seller" },
		],
	},
];

const socials = [Globe, MessageCircle, Send, AtSign];

function Footer() {
	return (
		<footer className="relative mt-24 bg-slate-950 text-slate-300">
			<div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />

			{/* Newsletter */}
			<div className="border-b border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid gap-6 md:grid-cols-2 md:items-center">
					<div>
						<h3 className="text-white text-xl font-bold">
							Stay in the loop
						</h3>
						<p className="mt-2 text-slate-400 text-sm">
							Get the latest drops, deals, and seller tips — straight to
							your inbox.
						</p>
					</div>
					<form
						className="flex gap-2"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="relative flex-1">
							<Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
							<input
								type="email"
								placeholder="you@email.com"
								className="w-full pl-9 pr-3 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
							/>
						</div>
						<button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-5 py-3 rounded-full text-sm font-semibold transition">
							Subscribe
							<ArrowRight className="w-4 h-4" />
						</button>
					</form>
				</div>
			</div>

			{/* Columns */}
			<div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				<div>
					<h2 className="text-2xl font-extrabold text-white">
						Omni<span className="text-brand-400">Cart</span>
					</h2>
					<p className="mt-4 text-sm text-slate-400 leading-relaxed">
						Your complete digital marketplace connecting buyers and
						sellers in one beautiful place.
					</p>
					<div className="mt-5 flex gap-2">
						{socials.map((Icon, i) => (
							<a
								key={i}
								href="#"
								className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-brand-600 text-slate-300 hover:text-white transition"
								aria-label="social"
							>
								<Icon className="w-4 h-4" />
							</a>
						))}
					</div>
				</div>

				{columns.map((col) => (
					<div key={col.title}>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">
							{col.title}
						</h3>
						<ul className="mt-4 space-y-3 text-sm">
							{col.links.map((link) => (
								<li key={link.label}>
									<Link
										to={link.to}
										className="text-slate-400 hover:text-brand-300 transition"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}

				<div>
					<h3 className="text-sm font-semibold uppercase tracking-wider text-white">
						Contact
					</h3>
					<ul className="mt-4 space-y-3 text-sm text-slate-400">
						<li className="flex items-start gap-2">
							<Mail className="w-4 h-4 mt-0.5 shrink-0" />
							support@omnicart.com
						</li>
						<li className="flex items-start gap-2">
							<MapPin className="w-4 h-4 mt-0.5 shrink-0" />
							Philippines
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom */}
			<div className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-500">
				<p>© 2026 OmniCart. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
