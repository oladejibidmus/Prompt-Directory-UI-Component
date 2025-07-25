import React from 'react';
import { Sidebar } from './Sidebar';
import { SearchBar } from './SearchBar';
import { ViewToggle } from './ViewToggle';
import { PlusIcon } from 'lucide-react';
export function Layout({
  children,
  activeCategory,
  setActiveCategory,
  categories,
  onAddNew,
  searchQuery,
  setSearchQuery,
  view,
  setView
}) {
  return <div className="flex h-screen bg-slate-50">
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
      <main className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-2xl font-bold text-slate-800 flex items-center">
              <span className="bg-gradient-to-r from-orange-700 to-orange-500 text-transparent bg-clip-text">
                Prompt Gallery
              </span>
            </h1>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <ViewToggle view={view} setView={setView} />
              <button onClick={onAddNew} className="bg-gradient-to-r from-orange-700 to-orange-500 text-white px-3 py-2 rounded-lg hover:from-orange-800 hover:to-orange-600 transition-all shadow-sm hover:shadow flex items-center gap-2">
                <PlusIcon size={16} />
                <span className="hidden sm:inline font-medium">Add New</span>
              </button>
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>;
}