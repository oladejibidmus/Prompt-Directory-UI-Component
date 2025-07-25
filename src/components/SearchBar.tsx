import React from 'react';
import { Search } from 'lucide-react';
export function SearchBar({
  searchQuery,
  setSearchQuery
}) {
  return <div className="relative w-full sm:w-64">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
        <Search size={16} className="text-slate-400" />
      </div>
      <input type="text" placeholder="Search prompts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white shadow-sm transition-all" />
    </div>;
}