import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { cn } from '../types';

const data = [
  { name: 'Jan', sales: 4000, projects: 2400 },
  { name: 'Fev', sales: 3000, projects: 1398 },
  { name: 'Mar', sales: 2000, projects: 9800 },
  { name: 'Abr', sales: 2780, projects: 3908 },
  { name: 'Mai', sales: 1890, projects: 4800 },
  { name: 'Jun', sales: 2390, projects: 3800 },
];

const statusData = [
  { name: 'Vistoria', value: 12, color: '#1B6B5A' },
  { name: 'Projeto', value: 8, color: '#268571' },
  { name: 'Instalação', value: 15, color: '#0A3D31' },
  { name: 'Homologação', value: 5, color: '#E8E2D1' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Vendas Mensais" 
          value="R$ 142.500" 
          trend="+12.5%" 
          trendUp={true} 
          icon={TrendingUp} 
        />
        <MetricCard 
          title="Novos Leads" 
          value="48" 
          trend="+5" 
          trendUp={true} 
          icon={Users} 
        />
        <MetricCard 
          title="Potência Instalada" 
          value="1.2 MWp" 
          trend="-2.1%" 
          trendUp={false} 
          icon={Zap} 
        />
        <MetricCard 
          title="Projetos Ativos" 
          value="24" 
          trend="Estável" 
          trendUp={true} 
          icon={CheckCircle2} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-graphite-900">Desempenho Comercial</h3>
              <p className="text-sm text-graphite-600">Volume de vendas vs Projetos iniciados</p>
            </div>
            <select className="bg-sand-100 border border-sand-300 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-solar-green-500">
              <option>Últimos 6 meses</option>
              <option>Este ano</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1B6B5A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1B6B5A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E2D1" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#5F676D', fontSize: 12}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#5F676D', fontSize: 12}} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#FDFCFB', border: '1px solid #E8E2D1', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#1B6B5A" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSales)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-graphite-900 mb-6">Pipeline de Projetos</h3>
          <div className="h-[250px] w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#1A1C1E', fontSize: 12, fontWeight: 600}} 
                  width={100}
                />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {statusData.map((status) => (
              <div key={status.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: status.color}}></div>
                  <span className="text-graphite-600">{status.name}</span>
                </div>
                <span className="font-bold text-graphite-900">{status.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity / Projects */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-sand-300 flex items-center justify-between">
          <h3 className="text-lg font-bold text-graphite-900">Projetos em Destaque</h3>
          <button className="text-sm font-bold text-solar-green-700 hover:text-solar-green-900 transition-colors">Ver todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-sand-50 text-[10px] uppercase tracking-widest font-bold text-graphite-600">
              <tr>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Capacidade</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Progresso</th>
                <th className="px-6 py-4">Data Início</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-300">
              <ProjectRow 
                customer="Residencial Oliveira" 
                capacity="6.4 kWp" 
                status="Instalação" 
                progress={75} 
                date="12/02/2024" 
              />
              <ProjectRow 
                customer="Fazenda Santa Fé" 
                capacity="45.0 kWp" 
                status="Vistoria" 
                progress={15} 
                date="28/02/2024" 
              />
              <ProjectRow 
                customer="Condomínio Solar" 
                capacity="12.8 kWp" 
                status="Homologação" 
                progress={90} 
                date="05/01/2024" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, trend, trendUp, icon: Icon }: any) => (
  <div className="glass-card p-6 flex flex-col justify-between group hover:border-solar-green-500 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="p-2 bg-sand-200 rounded-lg group-hover:bg-solar-green-100 transition-colors">
        <Icon className="w-5 h-5 text-solar-green-700" />
      </div>
      <div className={cn(
        "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
        trendUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
      )}>
        {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {trend}
      </div>
    </div>
    <div>
      <p className="text-xs font-semibold text-graphite-600 uppercase tracking-wider mb-1">{title}</p>
      <h4 className="text-2xl font-black text-graphite-900 tracking-tight">{value}</h4>
    </div>
  </div>
);

const ProjectRow = ({ customer, capacity, status, progress, date }: any) => (
  <tr className="hover:bg-sand-50 transition-colors group cursor-pointer">
    <td className="px-6 py-4">
      <p className="font-bold text-graphite-900 group-hover:text-solar-green-900">{customer}</p>
    </td>
    <td className="px-6 py-4 text-sm text-graphite-600 font-mono">{capacity}</td>
    <td className="px-6 py-4">
      <span className={cn(
        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
        status === 'Instalação' ? "bg-solar-green-100 text-solar-green-900" :
        status === 'Vistoria' ? "bg-sand-300 text-graphite-700" :
        "bg-amber-100 text-amber-900"
      )}>
        {status}
      </span>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-sand-300 rounded-full overflow-hidden">
          <div className="h-full bg-solar-green-700 rounded-full" style={{width: `${progress}%`}}></div>
        </div>
        <span className="text-xs font-bold text-graphite-900">{progress}%</span>
      </div>
    </td>
    <td className="px-6 py-4 text-sm text-graphite-600">{date}</td>
  </tr>
);
