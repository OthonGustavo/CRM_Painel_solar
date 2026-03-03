# SolarControl ERP - Gestão de Energia Renovável
crm-painel-solar.vercel.app
## Desafio de projeto
Para este desafio, você precisará demonstrar competência técnica na estruturação de um sistema de gestão (ERP) moderno, integrando uma interface intuitiva em React com um ecossistema de dados funcional.

## Contexto
O projeto consiste em uma plataforma centralizada para empresas do setor fotovoltaico, focada em resolver a fragmentação de informações entre o comercial e o estoque.

A aplicação permite o controle estratégico de oportunidades de negócio (Leads) e a gestão técnica de componentes de hardware (Inventário), tudo visualizado através de um Dashboard de métricas em tempo real.

O sistema utiliza componentes modulares e um gerenciamento de estado eficiente para alternar entre os módulos operacionais da empresa.

## Métodos esperados
É esperado que a aplicação entregue as seguintes funcionalidades principais:

**Interface e Navegação**

* **Dashboard**: Visualização de indicadores de desempenho e gráficos de saúde do negócio.
* **Gestão de Leads**: Fluxo completo para cadastro e acompanhamento de clientes no funil de vendas.
* **Inventário**: Controle detalhado de painéis solares, inversores e componentes técnicos.
* **Header Inteligente**: Sistema de busca global e notificações integradas para agilidade operacional.

**Tecnologias Utilizadas**

| Componente | Tecnologia | Uso |
| :--- | :--- | :--- |
| **Frontend** | React 19 + TypeScript | Interface declarativa e segurança de tipos. |
| **Estilização** | Tailwind CSS 4 | Design responsivo e sistema de design moderno. |
| **Gráficos** | Recharts | Visualização dinâmica de dados e métricas. |
| **Backend** | Express + Node.js | Gerenciamento de APIs e lógica de servidor. |
| **Persistência** | Better-SQLite3 | Banco de dados relacional para armazenamento local. |
| **IA Ready** | @google/genai | Estrutura preparada para automação inteligente. |

## Solução
O código base já apresenta a arquitetura de rotas e a interface de usuário estruturada. O desafio atual foca na implementação da lógica de persistência, garantindo que os dados inseridos nos módulos de **Leads** e **Estoque** sejam processados corretamente pelo backend e armazenados no banco de dados SQLite, mantendo a integridade das informações em todo o ciclo de vida da aplicação.

Certifique-se de validar as tipagens no `src/types.ts` e configurar o ambiente via `npm install` antes de subir o servidor de desenvolvimento.
