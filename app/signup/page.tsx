'use client';

import React from 'react';
import { Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen relative overflow-hidden font-sans selection:bg-cyan-200 selection:text-cyan-900 bg-slate-50 items-center justify-center py-10">

      {/* --- LIQUID BACKGROUND ANIMATION (Consistent Theme) --- */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="liquid-blob top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400"></div>
        <div className="liquid-blob top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400 animation-delay-2000"></div>
        <div className="liquid-blob -bottom-32 left-[20%] w-[700px] h-[700px] bg-emerald-300 animation-delay-4000"></div>
        <div className="frosted-overlay"></div>
      </div>

      {/* --- SIGN UP CARD --- */}
      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-white/60 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Create Account</h1>
            <p className="text-slate-500 text-sm mt-2">Join our referral program today</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase ml-1 tracking-wider">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase ml-1 tracking-wider">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase ml-1 tracking-wider">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="Create a password"
                  className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase ml-1 tracking-wider">Confirm Password</label>
              <div className="relative group">
                <CheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="Confirm your password"
                  className="w-full bg-white/50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 ml-1 pt-2">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                <label htmlFor="terms" className="text-xs text-slate-500">
                    I agree to the <a href="#" className="text-cyan-600 hover:underline font-bold">Terms of Service</a> and <a href="#" className="text-cyan-600 hover:underline font-bold">Privacy Policy</a>
                </label>
            </div>

            {/* Submit Button */}
            <Link href="/" className="block pt-2">
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                Create Account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link href="/login" className="text-cyan-600 font-bold hover:underline">
              Sign In
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}