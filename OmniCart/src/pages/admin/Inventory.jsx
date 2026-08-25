import { Card, Table } from "../../components/ui";
import { Plus } from "lucide-react";
import { products, formatPrice } from "../../data/products";

export default function Inventory() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Inventory</h2>
          <p className="text-sm text-slate-500">
            Manage stock across the platform.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition hover:shadow-glow">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <Card className="p-0" title={null}>
        <Table headers={["Product", "Category", "Price", "Stock", "Status"]}>
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50 transition">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <span className="font-medium text-slate-900">{p.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-slate-600">{p.category}</td>
              <td className="px-4 py-3 text-slate-700 font-medium">
                {formatPrice(p.price)}
              </td>
              <td className="px-4 py-3 text-slate-600">{120 - p.id * 7}</td>
              <td className="px-4 py-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600">
                  In stock
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </div>
  );
}
