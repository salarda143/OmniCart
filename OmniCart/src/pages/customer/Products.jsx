import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ArrowDownUp } from "lucide-react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

const categories = ["All", "Electronics", "Fashion", "Food", "Agriculture"];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
];

export default function Products() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        p.name.toLowerCase().includes(query.toLowerCase()),
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [active, query, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            All Products
          </h1>
          <p className="mt-2 text-slate-500">
            Discover {products.length} curated items across every category.
          </p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-full border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
        </div>
      </div>

      {/* Toolbar */}
      <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
          <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition ${
                active === cat
                  ? "bg-brand-600 text-white border-brand-600 shadow"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ArrowDownUp className="w-4 h-4 text-slate-400" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm rounded-full border border-slate-200 bg-white px-4 py-2 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-slate-400">
          <p className="text-lg font-medium">No products found.</p>
          <p className="text-sm">Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
