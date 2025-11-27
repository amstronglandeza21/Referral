'use client';
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Gift, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Share2
} from 'lucide-react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeItem, setActiveItem }) => {
  const navItems = [
    { icon: LayoutDashboard, text: 'Dashboard' },
    { icon: Users, text: 'My Referrals' },
    { icon: Gift, text: 'Rewards' },
    { icon: Share2, text: 'Campaigns' },
    { icon: Settings, text: 'Settings' },
  ];

  return (
    <aside 
      className={`
        h-screen bg-white text-slate-800 shadow-xl flex flex-col
        transition-all duration-300 ease-in-out z-20 flex-shrink-0 border-r border-slate-200
        ${isOpen ? 'w-64' : 'w-20'}
      `}
    >
      {/* Header / Logo Area */}
      <div className="h-16 flex items-center relative px-4 border-b border-slate-100">
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
          {/* LOGO COLOR CHANGED TO CYAN GRADIENT */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-1.5 rounded-lg flex-shrink-0 shadow-lg shadow-cyan-900/20">
            <Users className="text-white" size={20} />
          </div>
          <span className="font-bold text-xl tracking-wide whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">ReferralSys</span>
        </div>
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`
            absolute p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all duration-300 z-50 border border-slate-200 shadow-sm
            ${isOpen ? 'right-3' : 'left-1/2 -translate-x-1/2'}
          `}
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-x-hidden overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={activeItem === item.text}
            collapsed={!isOpen}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </nav>

      {/* Footer / User */}
      <div className="border-t border-slate-100 p-4 mt-auto bg-slate-50/50">
        <div className={`flex items-center ${isOpen ? 'gap-3' : 'justify-center'}`}>
          {/* AVATAR COLOR CHANGED TO CYAN/BLUE */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold border-2 border-white shadow-md text-white">
            JD
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
            <p className="text-sm font-medium whitespace-nowrap text-slate-700">John Doe</p>
            <p className="text-xs text-slate-500 whitespace-nowrap">john@example.com</p>
          </div>
          {isOpen && <LogOut size={18} className="ml-auto text-slate-400 cursor-pointer hover:text-red-500 transition-colors" />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;