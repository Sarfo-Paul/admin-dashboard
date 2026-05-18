import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ChevronRight,
  Workflow
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: Workflow, label: 'Projects', active: false },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  return (
    <aside className="border-r border-slate-200 bg-white flex flex-col h-screen sticky top-0" id="sidebar">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10" id="logo-container">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white" id="logo-icon">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-bold tracking-tight text-xl" id="brand-name">Aether.</span>
        </div>

        <nav className="space-y-1" id="nav-container">
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors group ${
                item.active 
                  ? 'bg-slate-100 text-slate-900' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
              id={`nav-item-${idx}`}
            >
              <item.icon size={16} className={item.active ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'} />
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100" id="sidebar-footer">
        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4" id="user-profile">
          <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0" id="user-avatar-placeholder"></div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">Julian Vane</p>
            <p className="text-[10px] text-slate-500 truncate">julian@aether.io</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-wider" id="logout-btn">
          <LogOut size={14} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
