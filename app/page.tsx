'use client';

import React, { useState, useEffect, useRef } from 'react';
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

  // --- REFS PARA SA MGA BLOBS ---
  const interactiveRef = useRef<HTMLDivElement>(null); 
  const blob1Ref = useRef<HTMLDivElement>(null);       
  const blob2Ref = useRef<HTMLDivElement>(null);       
  const blob3Ref = useRef<HTMLDivElement>(null);       

  useEffect(() => {
    setIsMounted(true);
    const savedSidebarState = localStorage.getItem('sidebar-state');
    if (savedSidebarState !== null) setIsSidebarOpen(JSON.parse(savedSidebarState));

    const savedActiveItem = localStorage.getItem('active-item-state');
    if (savedActiveItem !== null) setActiveItem(savedActiveItem);
  }, []);

  // --- PHYSICS ANIMATION LOGIC ---
  useEffect(() => {
    if (!isMounted) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20; 
      curY += (tgY - curY) / 20;

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px) translate(-50%, -50%)`;
      }
      
      // Repulsion / Parallax
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${Math.round(curX / -25)}px, ${Math.round(curY / -25)}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${Math.round(curX / 40)}px, ${Math.round(curY / 40)}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${Math.round(curX / -30)}px, ${Math.round(curY / 30)}px)`;
      }

      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('sidebar-state', JSON.stringify(isSidebarOpen));
      localStorage.setItem('active-item-state', activeItem);
    }
  }, [isSidebarOpen, activeItem, isMounted]);

  if (!isMounted) return null;

  const MobileNav = () => {
    const navItems = [
      { icon: LayoutDashboard, text: 'Home', id: 'Dashboard' },
      { icon: Users, text: 'Referrals', id: 'My Referrals' },
      { icon: Gift, text: 'Rewards', id: 'Rewards' },
      { icon: Share2, text: 'Campaign', id: 'Campaigns' }, 
      { icon: Settings, text: 'Setting', id: 'Settings' }, 
    ];

    return (
      /* UPDATED MOBILE NAV:
         - Fixed bottom-0 left-0 right-0 (Dikit sa baba)
         - Full width (Wala nang rounded corners sa gilid ng container)
         - Border-top lang ang meron para malinis
      */
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[88px] bg-white/70 backdrop-blur-2xl border-t border-white/50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-around items-start pt-3 z-50">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`relative flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 group ${
                isActive ? '' : 'hover:bg-white/40'
              }`}
            >
              {/* Active Background Glow (Optional, subtle lang) */}
              {isActive && (
                 <span className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-xl blur-sm" />
              )}

              <item.icon 
                size={24} 
                className={`z-10 transition-all duration-300 ${isActive ? 'text-cyan-600 -translate-y-1' : 'text-slate-400 group-hover:text-slate-600'}`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`z-10 text-[10px] mt-1 font-medium transition-all duration-300 ${isActive ? 'text-cyan-700 translate-y-0 opacity-100' : 'text-slate-500 opacity-80'}`}>
                {item.text}
              </span>
              
              {/* Active Indicator Line sa ilalim ng icon (Mas App-like) */}
              {isActive && (
                 <span className="absolute bottom-1 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-50 relative overflow-hidden font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* --- LIQUID BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* INTERACTIVE CURSOR BLOB */}
        <div 
            ref={interactiveRef}
            className="liquid-blob w-[500px] h-[500px] bg-gradient-to-r from-blue-400 to-cyan-300 opacity-90 mix-blend-multiply filter blur-[140px] will-change-transform"
            style={{ top: 0, left: 0, zIndex: 0 }}
        ></div>

        {/* --- STATIC BLOBS --- */}
        <div ref={blob1Ref} className="absolute top-0 left-0 w-full h-full will-change-transform transition-transform duration-75 ease-out">
            <div className="liquid-blob top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400 opacity-70 blur-[150px]"></div>
        </div>
        
        <div ref={blob2Ref} className="absolute top-0 left-0 w-full h-full will-change-transform transition-transform duration-75 ease-out">
            <div className="liquid-blob top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400 opacity-70 blur-[150px] animation-delay-2000"></div>
        </div>
        
        <div ref={blob3Ref} className="absolute top-0 left-0 w-full h-full will-change-transform transition-transform duration-75 ease-out">
            <div className="liquid-blob -bottom-32 left-[20%] w-[700px] h-[700px] bg-emerald-300 opacity-70 blur-[160px] animation-delay-4000"></div>
        </div>
        
        {/* FROSTED GLASS OVERLAY */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[20px]"></div>
      </div>

      <div className="hidden md:block h-full z-20 relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
        />
      </div>

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative transition-all duration-300 z-10">
        <div className="relative z-20 bg-white/10 backdrop-blur-sm shadow-sm">
          <Header title={activeItem} />
        </div>

        {/* Tinaasan ang padding-bottom (pb-32) para hindi matakpan ng bagong nav bar ang content sa dulo */}
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