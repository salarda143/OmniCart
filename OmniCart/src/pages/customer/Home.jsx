import { Link } from "react-router-dom";
import {
	Smartphone,
	Shirt,
	Apple,
	Sprout,
	Zap,
	TrendingUp,
	ShieldCheck,
	Truck,
	ArrowRight,
	Star,
} from "lucide-react";
import { products, formatPrice } from "../../data/products";

const categories = [
	{ name: "Electronics", icon: Smartphone, color: "from-indigo-500 to-violet-500" },
	{ name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-500" },
	{ name: "Food", icon: Apple, color: "from-orange-500 to-amber-500" },
	{ name: "Agriculture", icon: Sprout, color: "from-emerald-500 to-green-600" },
];

const features = [
	{
		icon: Zap,
		title: "Easy Shopping",
		desc: "Discover and buy products in just a few taps with a frictionless experience.",
	},
	{
		icon: TrendingUp,
		title: "Seller Growth",
		desc: "Powerful tools to manage products, track sales, and grow your business.",
	},
	{
		icon: ShieldCheck,
		title: "Secure Platform",
		desc: "Safe, encrypted transactions and verified sellers you can trust.",
	},
	{
		icon: Truck,
		title: "Fast Delivery",
		desc: "Reliable logistics so your orders arrive quickly and on time.",
	},
];

const stats = [
	{ value: "10K+", label: "Active Shoppers" },
	{ value: "2.5K+", label: "Sellers" },
	{ value: "50K+", label: "Products" },
	{ value: "4.9★", label: "Avg. Rating" },
];

const trending = products.slice(0, 4);

export default function Home() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative bg-slate-950 text-white">
				<div className="absolute inset-0 bg-grid opacity-30" />
				<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600/40 blur-3xl animate-blob" />
				<div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-accent-500/30 blur-3xl animate-blob [animation-delay:-6s]" />

				<div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="animate-fade-up">
						<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-brand-200">
							<Star className="w-4 h-4 fill-amber-400 text-amber-400" />
							The all-in-one digital marketplace
						</span>

						<h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
							Everything You Need,
							<br />
							<span className="text-gradient">In One Cart.</span>
						</h1>

						<p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl">
							OmniCart connects customers, sellers, and administrators in a
							single beautiful platform — seamless shopping, smart inventory,
							and secure transactions.
						</p>

						<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
							<Link
								to="/products"
								className="group inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3.5 rounded-full font-semibold transition hover:shadow-glow"
							>
								Start Shopping
								<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
							</Link>
							<Link
								to="/seller"
								className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white hover:text-slate-900 text-white px-6 py-3.5 rounded-full font-semibold transition"
							>
								Become a Seller
							</Link>
						</div>
					</div>

					{/* Floating product card */}
					<div className="relative hidden lg:block animate-float">
						<div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-accent-500 rounded-[2rem] blur-2xl opacity-40" />
						<div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-[2rem] p-6 shadow-2xl">
							<div className="grid grid-cols-2 gap-4">
								{trending.map((p) => (
									<div
										key={p.id}
										className="rounded-2xl bg-white/10 border border-white/10 p-3"
									>
										<img
											src={p.image}
											alt={p.name}
											className="h-24 w-full object-cover rounded-xl"
										/>
										<p className="mt-2 text-xs text-slate-200 truncate">
											{p.name}
										</p>
										<p className="text-sm font-bold text-white">
											{formatPrice(p.price)}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* STATS */}
			<section className="relative -mt-10 z-10 px-4 sm:px-8">
				<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl shadow-soft border border-slate-100 p-6 sm:p-8">
					{stats.map((s) => (
						<div key={s.label} className="text-center">
							<p className="text-3xl sm:text-4xl font-extrabold text-gradient">
								{s.value}
							</p>
							<p className="mt-1 text-sm text-slate-500">{s.label}</p>
						</div>
					))}
				</div>
			</section>

			{/* CATEGORIES */}
			<section className="py-16 sm:py-20 px-4 sm:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="text-3xl sm:text-4xl font-extrabold">
							Explore Categories
						</h2>
						<p className="mt-3 text-slate-500">
							From the latest gadgets to fresh produce — find it all in one
							place.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{categories.map((cat) => (
							<Link
								key={cat.name}
								to="/products"
								className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
							>
								<div
									className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-md`}
								>
									<cat.icon className="w-7 h-7" />
								</div>
								<h3 className="mt-4 text-lg font-semibold text-slate-900">
									{cat.name}
								</h3>
								<span className="mt-1 inline-flex items-center gap-1 text-sm text-brand-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">
									Shop now <ArrowRight className="w-4 h-4" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* FEATURES */}
			<section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="text-3xl sm:text-4xl font-extrabold">
							Why Choose OmniCart?
						</h2>
						<p className="mt-3 text-slate-500">
							Built for everyone in the marketplace — customers, sellers, and
							admins.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
						{features.map((f) => (
							<div
								key={f.title}
								className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card hover:shadow-soft transition"
							>
								<div className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600">
									<f.icon className="w-6 h-6" />
								</div>
								<h3 className="mt-4 font-bold text-lg text-slate-900">
									{f.title}
								</h3>
								<p className="mt-2 text-sm text-slate-500 leading-relaxed">
									{f.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="px-4 sm:px-8 pb-8">
				<div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 sm:px-12 py-14 sm:py-16 text-center text-white">
					<div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
					<div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-accent-500/20 blur-3xl" />
					<div className="relative">
						<h2 className="text-3xl sm:text-4xl font-extrabold">
							Ready to start selling or shopping?
						</h2>
						<p className="mt-3 text-brand-100 max-w-xl mx-auto">
							Join thousands of users building their business and discovering
							products they love on OmniCart.
						</p>
						<Link
							to="/login"
							className="mt-7 inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 px-7 py-3.5 rounded-full font-semibold transition"
						>
							Get Started
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
