import { ShoppingCart, Heart, Star } from "lucide-react";
import { formatPrice } from "../data/products";

function ProductCard({ product }) {
  const { name, price, image, badge, rating, reviews } = product;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white bg-brand-600 rounded-full shadow">
            {badge}
          </span>
        )}

        <button
          className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/90 text-slate-600 opacity-0 group-hover:opacity-100 hover:text-rose-500 transition"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-semibold text-slate-900 leading-snug group-hover:text-brand-700 transition-colors">
          {name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-medium text-slate-700">{rating}</span>
          <span className="text-slate-400">({reviews})</span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-extrabold text-slate-900">
            {formatPrice(price)}
          </span>
          <button className="flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-3.5 py-2 rounded-full transition active:scale-95">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
