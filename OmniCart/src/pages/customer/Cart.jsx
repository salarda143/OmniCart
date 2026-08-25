import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Cart() {
  const items = [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="mt-10 flex flex-col items-center text-center bg-white border border-dashed border-slate-200 rounded-3xl py-16 px-6 shadow-card">
          <div className="grid place-items-center w-20 h-20 rounded-2xl bg-brand-50 text-brand-600">
            <ShoppingBag className="w-9 h-9" />
          </div>
          <h2 className="mt-6 text-xl font-bold text-slate-900">
            Your cart is empty
          </h2>
          <p className="mt-2 text-slate-500 max-w-sm">
            Looks like you haven't added anything yet. Explore our products and
            find something you'll love.
          </p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-semibold transition hover:shadow-glow"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <p className="mt-5">Cart items go here.</p>
      )}
    </div>
  );
}
