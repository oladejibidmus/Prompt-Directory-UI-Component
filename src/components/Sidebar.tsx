import React from 'react';
import { Home, Star, Settings, Code, Terminal, MessageSquare, Tag } from 'lucide-react';
export function Sidebar({
  activeCategory,
  setActiveCategory,
  categories
}) {
  const mainItems = [{
    id: 'all',
    name: 'All Items',
    icon: <Home size={18} />
  }, {
    id: 'favorites',
    name: 'Favorites',
    icon: <Star size={18} />
  }];
  const typeItems = [{
    id: 'prompt',
    name: 'Prompts',
    icon: <MessageSquare size={18} />
  }, {
    id: 'command',
    name: 'Command Lines',
    icon: <Terminal size={18} />
  }, {
    id: 'code',
    name: 'Code Snippets',
    icon: <Code size={18} />
  }];
  return <aside className="w-64 bg-white border-r border-slate-200 hidden md:block overflow-y-auto shadow-sm">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 text-transparent bg-clip-text">
          Prompt Directory
        </h2>
      </div>
      <nav className="px-4 py-4">
        <div className="mb-6">
          {mainItems.map(item => <button key={item.id} onClick={() => setActiveCategory(item.id)} className={`flex items-center gap-3 w-full p-2.5 rounded-lg mb-1 text-left transition-all ${activeCategory === item.id ? 'bg-indigo-50 text-indigo-600 font-medium shadow-sm' : 'text-slate-700 hover:bg-slate-50'}`}>
              {item.icon}
              <span>{item.name}</span>
            </button>)}
        </div>
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase text-slate-500 mb-3 px-2">
            Types
          </h3>
          {typeItems.map(item => <button key={item.id} onClick={() => setActiveCategory(item.id)} className={`flex items-center gap-3 w-full p-2.5 rounded-lg mb-1 text-left transition-all ${activeCategory === item.id ? 'bg-indigo-50 text-indigo-600 font-medium shadow-sm' : 'text-slate-700 hover:bg-slate-50'}`}>
              {item.icon}
              <span>{item.name}</span>
            </button>)}
        </div>
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase text-slate-500 mb-3 px-2">
            Categories
          </h3>
          {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center gap-3 w-full p-2.5 rounded-lg mb-1 text-left transition-all ${activeCategory === category.id ? 'bg-indigo-50 text-indigo-600 font-medium shadow-sm' : 'text-slate-700 hover:bg-slate-50'}`}>
              <Tag size={18} />
              <span>{category.name}</span>
            </button>)}
        </div>
        <div className="mt-auto pt-6 border-t border-slate-100">
          <button className="flex items-center gap-3 w-full p-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-all mt-2">
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </div>
      </nav>
    </aside>;
}