import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Header({ title }: { title: string }) {
  return (

    <header className="h-16 bg-transparent flex items-center justify-between px-6 md:px-8 z-10 flex-shrink-0">
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/60 shadow-sm focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all">
          <Search size={16} className="text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm text-slate-600 w-32 focus:w-48 transition-all placeholder:text-slate-400"
          />
        </div>

        <button className="p-2 text-slate-500 hover:bg-white/60 rounded-full relative transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
}
