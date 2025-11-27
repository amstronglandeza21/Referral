import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  text: string;
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active, collapsed, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative flex items-center py-3 px-3 my-1
        font-medium rounded-lg cursor-pointer
        transition-all duration-300 group
        ${active 
          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-900/20' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
        }
      `}
    >
      <Icon size={20} className={`min-w-[20px] transition-all duration-300 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
      
      <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
        {text}
      </span>

      {/* Hover Tooltip when collapsed */}
      {collapsed && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap border border-slate-700 shadow-xl">
          {text}
        </div>
      )}
    </div>
  );
};
export default SidebarItem;