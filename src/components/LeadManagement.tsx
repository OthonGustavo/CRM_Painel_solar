import React from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone,
  Calendar
} from 'lucide-react';
import { cn } from '../types';

const leads = [
  { id: '1', name: 'Ricardo Santos', email: 'ricardo@email.com', phone: '(11) 98765-4321', status: 'Novo', value: 25000, date: '01/03/2024' },
  { id: '2', name: 'Maria Helena', email: 'm.helena@gmail.com', phone: '(11) 91234-5678', status: 'Qualificado', value: 18500, date: '28/02/2024' },
  { id: '3', name: 'João Pereira', email: 'joao.p@empresa.com', phone: '(11) 99887-7665', status: 'Proposta', value: 42000, date: '25/02/2024' },
  { id: '4', name: 'Ana Costa', email: 'ana.costa@uol.com.br', phone: '(11) 97766-5544', status: 'Fechado', value: 12000, date: '20/02/2024' },
  { id: '5', name: 'Carlos Eduardo', email: 'cadu@outlook.com', phone: '(11) 96655-4433', status: 'Perdido', value: 31000, date: '15/02/2024' },
];

export const LeadManagement: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-graphite-900 tracking-tight">Gestão de Leads</h2>
          <p className="text-sm text-graphite-600">Acompanhe e converta novas oportunidades de negócio.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-solar-green-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-solar-green-900/20 hover:bg-solar-green-800 transition-all">
          <Plus className="w-5 h-5" />
          Novo Lead
        </button>
      </div>

      {/* Filters & Search */}
      <div className="glass-card p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-400" />
          <input 
            type="text" 
            placeholder="Buscar por nome, email ou telefone..." 
            className="w-full pl-10 pr-4 py-2.5 bg-sand-100 border border-sand-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-green-500 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-sm font-bold text-graphite-700 hover:bg-sand-100 transition-colors">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <select className="px-4 py-2.5 bg-white border border-sand-300 rounded-xl text-sm font-bold text-graphite-700 focus:outline-none">
            <option>Ordenar por: Recentes</option>
            <option>Maior Valor</option>
            <option>Status</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-sand-50 text-[10px] uppercase tracking-widest font-bold text-graphite-600">
              <tr>
                <th className="px-6 py-4">Lead</th>
                <th className="px-6 py-4">Contato</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Valor Estimado</th>
                <th className="px-6 py-4">Última Interação</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-300">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-sand-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sand-300 flex items-center justify-center text-graphite-700 font-bold text-sm">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-graphite-900 group-hover:text-solar-green-900 transition-colors">{lead.name}</p>
                        <p className="text-xs text-graphite-500">ID: #{lead.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-graphite-600">
                        <Mail className="w-3 h-3" />
                        {lead.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-graphite-600">
                        <Phone className="w-3 h-3" />
                        {lead.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      lead.status === 'Novo' ? "bg-blue-50 text-blue-700" :
                      lead.status === 'Qualificado' ? "bg-purple-50 text-purple-700" :
                      lead.status === 'Proposta' ? "bg-amber-50 text-amber-700" :
                      lead.status === 'Fechado' ? "bg-emerald-50 text-emerald-700" :
                      "bg-red-50 text-red-700"
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-mono font-bold text-graphite-900">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lead.value)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs text-graphite-600">
                      <Calendar className="w-3 h-3" />
                      {lead.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-sand-200 rounded-lg transition-colors text-graphite-400 hover:text-graphite-900">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-sand-50 border-t border-sand-300 flex items-center justify-between">
          <p className="text-xs text-graphite-600 font-medium">Mostrando 5 de 142 leads</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-sand-300 rounded-lg text-xs font-bold text-graphite-600 hover:bg-sand-100 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 bg-white border border-sand-300 rounded-lg text-xs font-bold text-graphite-600 hover:bg-sand-100">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};
