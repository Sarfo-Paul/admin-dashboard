import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Users, 
  CreditCard, 
  Activity, 
  DollarSign,
  TrendingUp,
  MoreVertical
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Jan', value: 4000, active: 2400 },
  { name: 'Feb', value: 3000, active: 1398 },
  { name: 'Mar', value: 2000, active: 9800 },
  { name: 'Apr', value: 2780, active: 3908 },
  { name: 'May', value: 1890, active: 4800 },
  { name: 'Jun', value: 2390, active: 3800 },
  { name: 'Jul', value: 3490, active: 4300 },
];

const stats = [
  { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', positive: true, icon: DollarSign },
  { label: 'Active Users', value: '+2,350', change: '+180.1%', positive: true, icon: Users },
  { label: 'New Sales', value: '+12,234', change: '+19%', positive: true, icon: CreditCard },
  { label: 'Active Sessions', value: '573', change: '-2.1%', positive: false, icon: Activity },
];

const recentActivity = [
  { user: 'Sarah Wilson', email: 'sarah@example.com', amount: '+$1,900.00', status: 'Approved', date: '2 mins ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { user: 'James Miller', email: 'james@example.com', amount: '+$350.00', status: 'Pending', date: '15 mins ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  { user: 'Alicia Heart', email: 'alicia@example.com', amount: '+$5,200.00', status: 'Approved', date: '1 hour ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alicia' },
  { user: 'Robert Fox', email: 'robert@example.com', amount: '+$120.00', status: 'Rejected', date: '3 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert' },
];

export function DashboardContent() {
  return (
    <main className="p-8 space-y-8 max-w-7xl mx-auto w-full" id="dashboard-content">
      <header className="flex justify-between items-end" id="header-section">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor and manage your operational performance.</p>
        </div>
        <div className="flex gap-2" id="actions">
          <button className="px-4 py-2 border border-slate-200 bg-white rounded-md text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors" id="export-btn">Export Data</button>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-md text-xs font-bold hover:bg-slate-800 transition-all shadow-sm" id="create-btn">+ Add Entry</button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="stats-grid">
        {stats.map((stat, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={stat.label}
            className="card p-5"
            id={`stat-card-${idx}`}
          >
            <p className="label-upper mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <div className={`mt-4 flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full w-max ${
              stat.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
            }`}>
              {stat.positive ? <ArrowUpRight size={10} className="mr-0.5" /> : <ArrowDownRight size={10} className="mr-0.5" />}
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Visual Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="main-visual-section">
        <div className="card lg:col-span-2 flex flex-col" id="main-chart-card">
          <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-sm">Revenue Dynamics</h3>
            <div className="flex gap-2 text-[10px] font-bold">
              <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-500">History</span>
              <span className="px-2 py-1 bg-slate-900 text-white rounded">Real-time</span>
            </div>
          </div>
          
          <div className="p-6 h-[320px] w-full" id="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f172a" stopOpacity={0.05}/>
                    <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#cbd5e1', fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#cbd5e1', fontWeight: 600 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: '1px solid #e2e8f0', 
                    boxShadow: 'none',
                    fontSize: '12px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0f172a" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6" id="side-cards">
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-slate-900/10">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Growth Plan</p>
              <h4 className="text-lg font-bold mt-2 leading-tight">Elevate your operational scale with Aether+ tools.</h4>
            </div>
            <button className="mt-6 w-full py-2 bg-white text-slate-900 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Upgrade Now</button>
          </div>
          
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm mb-4">Node Health</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>API Latency</span>
                    <span className="text-emerald-500">Normal</span>
                  </div>
                  <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-900 w-[85%]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Cache Hit</span>
                    <span>94%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-[94%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Systems Nominal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="card" id="activity-table-card">
        <div className="px-6 py-5 border-b border-slate-50 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-sm">Recent Transactions</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Merchant Ledger</p>
          </div>
          <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest" id="export-csv-btn">Export CSV</button>
        </div>
        <div className="overflow-x-auto" id="table-container">
          <table className="w-full text-left" id="activity-table">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-6 py-4 label-upper">Merchant</th>
                <th className="px-6 py-4 label-upper">Status</th>
                <th className="px-6 py-4 label-upper">Date</th>
                <th className="px-6 py-4 label-upper text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {recentActivity.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors group cursor-default" id={`activity-row-${idx}`}>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-900">{item.user}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight ${
                      item.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' :
                      item.status === 'Pending' ? 'bg-slate-100 text-slate-500' :
                      'bg-rose-50 text-rose-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-400">{item.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 text-right group-hover:pr-8 transition-all">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-50 text-center">
          <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest" id="view-all-btn">View all records</button>
        </div>
      </div>
    </main>
  );
}
