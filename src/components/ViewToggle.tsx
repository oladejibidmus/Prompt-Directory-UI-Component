import React from 'react';
import { Grid, List } from 'lucide-react';
export function ViewToggle({
  view,
  setView
}) {
  return <div className="flex border border-slate-200 rounded-lg overflow-hidden shadow-sm">
      <button onClick={() => setView('gallery')} className={`p-2.5 transition-all ${view === 'gallery' ? 'bg-indigo-50 text-indigo-600' : 'bg-white text-slate-500 hover:bg-slate-50'}`} title="Gallery View">
        <Grid size={16} />
      </button>
      <button onClick={() => setView('list')} className={`p-2.5 transition-all ${view === 'list' ? 'bg-indigo-50 text-indigo-600' : 'bg-white text-slate-500 hover:bg-slate-50'}`} title="List View">
        <List size={16} />
      </button>
    </div>;
}