import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Sun, 
  Package, 
  Settings, 
  LogOut,
  TrendingUp,
  FileText
} from 'lucide-react';
import { cn } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads & CRM', icon: Users },
    { id: 'projects', label: 'Projetos (ERP)', icon: Sun },
    { id: 'inventory', label: 'Estoque', icon: Package },
    { id: 'proposals', label: 'Propostas', icon: FileText },
    { id: 'reports', label: 'Relatórios', icon: TrendingUp },
  ];

  return (
    <aside className="w-64 h-screen bg-sand-50 border-r border-sand-300 flex flex-col sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-solar-green-900 rounded-lg flex items-center justify-center shadow-lg">
            <Sun className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-solar-green-900 font-bold text-xl tracking-tight">SolarControl</h1>
            <p className="text-[10px] uppercase tracking-widest text-graphite-600 font-semibold opacity-70">Energy ERP</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
              activeTab === item.id 
                ? "bg-solar-green-900 text-white shadow-lg shadow-solar-green-900/20" 
                : "text-graphite-600 hover:bg-sand-200 hover:text-solar-green-900"
            )}
          >
            <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-white" : "text-graphite-400")} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sand-300">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-graphite-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          Sair do Sistema
        </button>
        <div className="mt-4 flex items-center gap-3 px-4 py-2 bg-sand-200 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-solar-green-700 flex items-center justify-center text-white text-xs font-bold">
            GS
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-graphite-900 truncate">Gustavo Silva</p>
            <p className="text-[10px] text-graphite-600 truncate">Administrador</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
