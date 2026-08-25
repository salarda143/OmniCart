import { Card, Table } from "../../components/ui";
import { UserCheck, UserCog } from "lucide-react";

const users = [
  {
    name: "Maria Santos",
    email: "maria@email.com",
    role: "Customer",
    status: "Active",
  },
  {
    name: "Juan Dela Cruz",
    email: "juan@email.com",
    role: "Seller",
    status: "Active",
  },
  {
    name: "Ana Reyes",
    email: "ana@email.com",
    role: "Customer",
    status: "Active",
  },
  {
    name: "Paolo Mendoza",
    email: "paolo@email.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Liza Cruz",
    email: "liza@email.com",
    role: "Seller",
    status: "Suspended",
  },
];

const roleStyles = {
  Customer: "bg-brand-50 text-brand-600",
  Seller: "bg-emerald-50 text-emerald-600",
  Admin: "bg-amber-50 text-amber-600",
};

export default function Users() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Users</h2>
        <p className="text-sm text-slate-500">All accounts on the platform.</p>
      </div>

      <Card className="p-0">
        <Table headers={["Name", "Email", "Role", "Status"]}>
          {users.map((u) => (
            <tr key={u.email} className="hover:bg-slate-50 transition">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center w-9 h-9 rounded-full bg-linear-to-br from-brand-500 to-accent-500 text-white text-xs font-bold">
                    {u.name.charAt(0)}
                  </div>
                  <span className="font-medium text-slate-900">{u.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-slate-600">{u.email}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${roleStyles[u.role]}`}
                >
                  {u.role === "Admin" ? (
                    <UserCog className="w-3 h-3" />
                  ) : (
                    <UserCheck className="w-3 h-3" />
                  )}
                  {u.role}
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    u.status === "Active"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-rose-50 text-rose-600"
                  }`}
                >
                  {u.status}
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </div>
  );
}
