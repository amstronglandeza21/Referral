import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function ReferralsView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search referrals..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter size={18} /> Filter Status
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
         <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Search size={24} className="text-slate-400" />
         </div>
         <h3 className="text-lg font-semibold text-slate-800">All Referrals List</h3>
         <p className="text-slate-500 max-w-sm mt-2">Here you will see the list of people you referred.</p>
      </div>
    </div>
  );
}