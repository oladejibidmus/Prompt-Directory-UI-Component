import React from 'react';
import { Copy, Star, MessageSquare, Terminal, Code } from 'lucide-react';
export function PromptCard({
  prompt,
  view,
  onOpenPrompt,
  onToggleFavorite
}) {
  const typeIcons = {
    prompt: <MessageSquare size={18} className="text-orange-600" />,
    command: <Terminal size={18} className="text-orange-600" />,
    code: <Code size={18} className="text-orange-600" />
  };
  const handleCopy = e => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
  };
  const handleFavorite = e => {
    e.stopPropagation();
    onToggleFavorite(prompt.id);
  };
  if (view === 'gallery') {
    return <div onClick={() => onOpenPrompt(prompt)} className="bg-white rounded-xl shadow-[0_0_10px_rgba(249,115,22,0.1)] overflow-hidden hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all cursor-pointer group">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-slate-50 rounded-md border border-slate-100">
                {typeIcons[prompt.type]}
              </div>
              <span className="text-xs bg-slate-100 px-2.5 py-1 rounded-full text-slate-600 font-medium">
                {prompt.category}
              </span>
            </div>
            <button onClick={handleFavorite} className="text-slate-400 hover:text-yellow-400 transition-colors p-1">
              <Star size={18} fill={prompt.isFavorite ? 'currentColor' : 'none'} className={prompt.isFavorite ? 'text-yellow-400' : ''} />
            </button>
          </div>
          <h3 className="font-medium mb-2 text-slate-800 group-hover:text-orange-700 transition-colors">
            {prompt.title}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-3">
            {prompt.content}
          </p>
        </div>
        <div className="bg-slate-50 p-4 flex justify-between items-center border-t border-slate-200">
          <span className="text-xs text-slate-500 font-medium">
            {new Date(prompt.dateAdded).toLocaleDateString()}
          </span>
          <button onClick={handleCopy} className="text-slate-500 hover:text-orange-700 p-1.5 bg-white rounded-md border border-slate-200 shadow-sm hover:shadow transition-all">
            <Copy size={14} />
          </button>
        </div>
      </div>;
  } else {
    return <div onClick={() => onOpenPrompt(prompt)} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-all cursor-pointer group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-slate-50 rounded-md border border-slate-100">
              {typeIcons[prompt.type]}
            </div>
            <h3 className="font-medium text-slate-800 group-hover:text-orange-700 transition-colors">
              {prompt.title}
            </h3>
            <span className="text-xs bg-slate-100 px-2.5 py-1 rounded-full text-slate-600 font-medium">
              {prompt.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">
              {new Date(prompt.dateAdded).toLocaleDateString()}
            </span>
            <button onClick={handleFavorite} className="text-slate-400 hover:text-yellow-400 transition-colors p-1">
              <Star size={18} fill={prompt.isFavorite ? 'currentColor' : 'none'} className={prompt.isFavorite ? 'text-yellow-400' : ''} />
            </button>
            <button onClick={handleCopy} className="text-slate-500 hover:text-orange-700 p-1.5 bg-white rounded-md border border-slate-200 shadow-sm hover:shadow transition-all">
              <Copy size={14} />
            </button>
          </div>
        </div>
      </div>;
  }
}