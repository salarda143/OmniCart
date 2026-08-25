import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShoppingBag } from "lucide-react";
import logo from "../../assets/Logo.png";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-slate-950 text-white p-12">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-brand-600/40 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-accent-500/30 blur-3xl animate-blob [animation-delay:-6s]" />

        <Link to="/" className="relative">
          <img
            src={logo}
            alt="OmniCart"
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>

        <div className="relative max-w-md">
          <h2 className="text-4xl font-extrabold leading-tight">
            Welcome back to your marketplace.
          </h2>
          <p className="mt-4 text-slate-300">
            Sign in to shop, manage your store, or oversee the platform — all
            from one beautiful account.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-brand-200">
            <ShoppingBag className="w-4 h-4" />
            10K+ shoppers trust OmniCart
          </div>
        </div>

        <p className="relative text-sm text-slate-400">
          © 2026 OmniCart. All rights reserved.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex justify-center">
            <img src={logo} alt="OmniCart" className="h-12 w-auto" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Sign in
          </h1>
          <p className="mt-2 text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Create one
            </Link>
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <Link
                  to="/forgot"
                  className="text-sm text-brand-600 hover:text-brand-700"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-3 rounded-xl border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle password"
                >
                  {show ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition hover:shadow-glow"
            >
              Sign in
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 text-slate-400 text-sm">
            <span className="h-px flex-1 bg-slate-200" />
            or
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <button className="mt-6 w-full flex items-center justify-center gap-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium py-3 rounded-xl transition">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.24 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
