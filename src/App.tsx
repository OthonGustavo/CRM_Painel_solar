import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { LeadManagement } from './components/LeadManagement';
import { Inventory } from './components/Inventory';
import { 
  Bell, 
  Search, 
  Calendar as CalendarIcon,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'leads':
        return <LeadManagement />;
      case 'inventory':
        return <Inventory />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-sand-200 rounded-full flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-graphite-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-graphite-900">Módulo em Desenvolvimento</h2>
              <p className="text-graphite-600 max-w-xs mx-auto">Esta funcionalidade está sendo preparada para a próxima atualização do sistema.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-sand-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-sand-300 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite-400" />
              <input 
                type="text" 
                placeholder="Pesquisa global (clientes, projetos, NF...)" 
                className="w-full pl-10 pr-4 py-2 bg-sand-200/50 border border-transparent rounded-full text-sm focus:bg-white focus:border-solar-green-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-graphite-600">
              <CalendarIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                {new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}
              </span>
            </div>
            
            <div className="h-6 w-px bg-sand-300"></div>
            
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-graphite-600 hover:bg-sand-200 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
              </button>
              <button className="p-2 text-graphite-600 hover:bg-sand-200 rounded-full transition-colors">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="mt-auto p-8 border-t border-sand-300 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-graphite-400">
          <p>© 2024 SolarControl ERP - Sistema de Gestão de Energia Renovável</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-solar-green-700 transition-colors">Suporte</a>
            <a href="#" className="hover:text-solar-green-700 transition-colors">Documentação</a>
            <a href="#" className="hover:text-solar-green-700 transition-colors">Privacidade</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
