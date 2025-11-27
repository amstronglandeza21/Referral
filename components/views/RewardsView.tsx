import React from 'react';
import { DollarSign, ArrowDownLeft } from 'lucide-react';

export default function RewardsView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
        {/* Updated Card: Cyan to Blue Gradient to match theme */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg shadow-cyan-900/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
                <p className="text-cyan-100 font-medium mb-1">Available Balance</p>
                <h2 className="text-4xl font-bold">$1,250.00</h2>
            </div>
            <button className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-bold shadow-sm hover:bg-cyan-50 transition-colors flex items-center gap-2">
                <ArrowDownLeft size={20} /> Request Payout
            </button>
        </div>

        <h3 className="font-bold text-slate-800 text-lg">Payout History</h3>
        <div className="space-y-3">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm flex items-center justify-between hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                            <DollarSign size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-700">Bank Transfer</p>
                            <p className="text-xs text-slate-500">Oct {10 + i}, 2023</p>
                        </div>
                    </div>
                    <span className="font-mono font-medium text-slate-800">-$250.00</span>
                </div>
            ))}
        </div>
    </div>
  );
}