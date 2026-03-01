import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownRight,
  Search,
  Plus
} from 'lucide-react';
import { cn } from '../types';

const inventory = [
  { id: '1', name: 'Painel Solar Jinko 550W', category: 'Painel', stock: 124, unit: 'un', minStock: 50 },
  { id: '2', name: 'Inversor Growatt 5kW', category: 'Inversor', stock: 12, unit: 'un', minStock: 15 },
  { id: '3', name: 'Estrutura Alumínio Telhado Cerâmico', category: 'Estrutura', stock: 450, unit: 'm', minStock: 200 },
  { id: '4', name: 'Cabo Solar 6mm Preto', category: 'Cabo', stock: 1200, unit: 'm', minStock: 500 },
  { id: '5', name: 'Conector MC4 Par', category: 'Estrutura', stock: 85, unit: 'par', minStock: 100 },
];

export const Inventory: React.FC = () => {
  return (
    <div className="space-y-6 animate-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-graphite-900 tracking-tight">Controle de Estoque</h2>
          <p className="text-sm text-graphite-600">Gerencie componentes e suprimentos para instalações.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-sand-300 text-graphite-900 px-6 py-3 rounded-xl font-bold hover:bg-sand-50 transition-all">
            Entrada de NF
          </button>
          <button className="flex items-center justify-center gap-2 bg-solar-green-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-solar-green-900/20 hover:bg-solar-green-800 transition-all">
            <Plus className="w-5 h-5" />
            Novo Item
          </button>
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 bg-solar-green-900 text-white">
          <div className="flex items-center justify-between mb-4">
            <Package className="w-8 h-8 opacity-50" />
            <span className="text-[10px] uppercase font-black tracking-widest opacity-70">Total em Estoque</span>
          </div>
          <h4 className="text-3xl font-black mb-1">1.871</h4>
          <p className="text-xs opacity-70">Itens cadastrados em 4 categorias</p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4 text-amber-600">
            <AlertTriangle className="w-8 h-8" />
            <span className="text-[10px] uppercase font-black tracking-widest">Atenção</span>
          </div>
          <h4 className="text-3xl font-black text-graphite-900 mb-1">03</h4>
          <p className="text-xs text-graphite-600">Itens abaixo do estoque mínimo</p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4 text-solar-green-700">
            <ArrowUpRight className="w-8 h-8" />
            <span className="text-[10px] uppercase font-black tracking-widest">Movimentação</span>
          </div>
          <h4 className="text-3xl font-black text-graphite-900 mb-1">+12%</h4>
          <p className="text-xs text-graphite-600">Aumento em relação ao mês anterior</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-sand-300 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-400" />
            <input 
              type="text" 
              placeholder="Buscar item no estoque..." 
              className="w-full pl-10 pr-4 py-2 bg-sand-100 border border-sand-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-green-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-sand-300 rounded-xl text-sm font-bold text-graphite-700">Categoria</button>
            <button className="px-4 py-2 bg-white border border-sand-300 rounded-xl text-sm font-bold text-graphite-700">Status</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-sand-50 text-[10px] uppercase tracking-widest font-bold text-graphite-600">
              <tr>
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Qtd Atual</th>
                <th className="px-6 py-4">Estoque Mín.</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-300">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-sand-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-graphite-900">{item.name}</p>
                    <p className="text-[10px] text-graphite-500 uppercase font-mono tracking-tighter">SKU: SOL-{item.id}00X</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-graphite-600 bg-sand-200 px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-mono font-bold text-graphite-900">{item.stock} {item.unit}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-mono text-graphite-600">{item.minStock} {item.unit}</p>
                  </td>
                  <td className="px-6 py-4">
                    {item.stock <= item.minStock ? (
                      <div className="flex items-center gap-1.5 text-red-600 font-bold text-[10px] uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Reposição Necessária
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                        Ok
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-solar-green-100 text-solar-green-700 rounded-lg transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-100 text-red-700 rounded-lg transition-colors">
                        <ArrowDownRight className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
