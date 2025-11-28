'use client';

import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Gift, Share2, Settings } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardView from '@/components/views/DashboardView';
import ReferralsView from '@/components/views/ReferralsView';
import RewardsView from '@/components/views/RewardsView';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedSidebarState = localStorage.getItem('sidebar-state');
    if (savedSidebarState !== null) {
      setIsSidebarOpen(JSON.parse(savedSidebarState));
    }

    const savedActiveItem = localStorage.getItem('active-item-state');
    if (savedActiveItem !== null) {
      setActiveItem(savedActiveItem);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('sidebar-state', JSON.stringify(isSidebarOpen));
      localStorage.setItem('active-item-state', activeItem);
    }
  }, [isSidebarOpen, activeItem, isMounted]);

  if (!isMounted) return null;

  // --- Mobile Navigation ---
  const MobileNav = () => {
    const navItems = [
      { icon: LayoutDashboard, text: 'Home', id: 'Dashboard' },
      { icon: Users, text: 'Referrals', id: 'My Referrals' },
      { icon: Gift, text: 'Rewards', id: 'Rewards' },
      { icon: Share2, text: 'Campaign', id: 'Campaigns' }, 
      { icon: Settings, text: 'Setting', id: 'Settings' }, 
    ];

    return (
      <div className="md:hidden fixed bottom-4 left-4 right-4 h-20 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] flex justify-around items-center z-50 ring-1 ring-white/50">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                isActive ? 'bg-white/70 shadow-sm -translate-y-2' : 'hover:bg-white/20'
              }`}
            >
              <item.icon 
                size={22} 
                className={`transition-colors duration-300 ${isActive ? 'text-cyan-600' : 'text-slate-500'}`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[9px] mt-1 font-medium transition-colors ${isActive ? 'text-cyan-700' : 'text-slate-500'}`}>
                {item.text}
              </span>
              
              { isActive && <span className="absolute -bottom-2 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" /> }
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-50 relative overflow-hidden font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* --- LIQUID BACKGROUND ANIMATION (Updated for Extra Blur) --- */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* Tinaasan ko ang BLUR value (from 100px to 160px) para sobrang soft ng edges */}
        
        {/* Blob 1: Cyan (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400 opacity-60 rounded-full mix-blend-multiply filter blur-[160px] animate-blob"></div>
        
        {/* Blob 2: Blue (Top Right) */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400 opacity-60 rounded-full mix-blend-multiply filter blur-[160px] animate-blob animation-delay-2000"></div>
        
        {/* Blob 3: Emerald (Bottom) */}
        <div className="absolute -bottom-32 left-[20%] w-[700px] h-[700px] bg-emerald-300 opacity-60 rounded-full mix-blend-multiply filter blur-[180px] animate-blob animation-delay-4000"></div>
        
        {/* Glass Overlay: Tinaasan ko ang backdrop-blur (from 2px to 10px) para talagang frosted glass ang effect sa buong screen */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[10px]"></div>
      </div>

      {/* --- SIDEBAR (Desktop) --- */}
      <div className="hidden md:block h-full z-20 relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative transition-all duration-300 z-10">
        
        {/* Header */}
        <div className="relative z-20 bg-white/10 backdrop-blur-sm shadow-sm">
          <Header title={activeItem} />
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 md:pb-8 scroll-smooth">
           <div className="relative z-10">
             {activeItem === 'Dashboard' && <DashboardView />}
             {activeItem === 'My Referrals' && <ReferralsView />}
             {activeItem === 'Rewards' && <RewardsView />}
             
             {['Dashboard', 'My Referrals', 'Rewards'].indexOf(activeItem) === -1 && (
               <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-500 text-center animate-pulse">
                  <div className="bg-white/50 p-6 rounded-full mb-4 shadow-lg border border-white/50 backdrop-blur-sm">
                    <Settings size={48} className="text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">Coming Soon</h3>
                  <p className="text-sm text-slate-500 bg-white/40 px-4 py-1 rounded-full mt-2 border border-white/50">The {activeItem} module is under development.</p>
               </div>
             )}
           </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}