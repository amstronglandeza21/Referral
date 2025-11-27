import React from 'react';
import { Users, DollarSign, TrendingUp, Copy, CheckCircle } from 'lucide-react';

export default function DashboardView() {
  const stats = [
    { label: 'Total Referrals', value: '1,234', icon: Users, color: 'bg-cyan-500', trend: '+12% this month' },
    { label: 'Pending Rewards', value: '$450.00', icon: DollarSign, color: 'bg-blue-500', trend: '3 payouts pending' },
    { label: 'Total Earnings', value: '$2,890.50', icon: TrendingUp, color: 'bg-emerald-500', trend: '+$540 last 30 days' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      

      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white shadow-lg shadow-cyan-900/10">
        <h2 className="text-lg font-semibold mb-2">Your Unique Referral Link</h2>
        <p className="text-cyan-100 text-sm mb-4">Share this link with your friends to earn rewards!</p>
        
        <div className="flex items-center bg-white/10 rounded-lg p-1 pr-1.5 border border-white/20 backdrop-blur-sm max-w-xl">
          <code className="flex-1 px-3 py-2 text-sm font-mono truncate text-white">https://myapp.com/ref/johndoe123</code>
          <button className="flex items-center gap-2 bg-white text-cyan-700 px-4 py-1.5 rounded-md text-sm font-bold hover:bg-cyan-50 transition-colors">
            <Copy size={16} /> Copy
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center text-white shadow-sm`}>
                <stat.icon size={20} />
              </div>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}