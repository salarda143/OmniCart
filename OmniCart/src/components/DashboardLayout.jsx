import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Bell, LogOut } from "lucide-react";

function DashboardLayout({ title, gradient, navItems, userLabel }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const sidebar = (
    <aside className={`h-full w-64 ${gradient} text-white flex flex-col`}>
      <div className="h-16 flex items-center gap-2 px-6 text-xl font-extrabold tracking-tight">
        {title}
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-white/15 text-white shadow-inner"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`
            }
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-3">
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition">
          <LogOut className="w-5 h-5" />
          Log out
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-30">
        {sidebar}
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 animate-fade-in">
            {sidebar}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-white text-slate-700 shadow"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-20 h-16 flex items-center justify-between gap-4 px-4 sm:px-8 bg-white/80 glass border-b border-slate-200">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-slate-600 hover:bg-slate-100"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {navItems.find(
                  (i) =>
                    location.pathname === i.to ||
                    (!i.end && location.pathname.startsWith(i.to)),
                )?.label || title}
              </h1>
              <p className="text-xs text-slate-400 truncate">
                Welcome back, {userLabel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative grid place-items-center w-10 h-10 rounded-full text-slate-600 hover:bg-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>
            <div className="grid place-items-center w-10 h-10 rounded-full bg-linear-to-br from-brand-500 to-accent-500 text-white font-bold">
              {userLabel.charAt(0)}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
