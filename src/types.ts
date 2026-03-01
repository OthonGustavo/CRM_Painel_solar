import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Novo' | 'Qualificado' | 'Proposta' | 'Fechado' | 'Perdido';
  value: number;
  date: string;
}

export interface Project {
  id: string;
  customerName: string;
  capacity: number; // kWp
  status: 'Vistoria' | 'Projeto' | 'Instalação' | 'Homologação' | 'Concluído';
  progress: number;
  startDate: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Painel' | 'Inversor' | 'Estrutura' | 'Cabo';
  stock: number;
  unit: string;
  minStock: number;
}
