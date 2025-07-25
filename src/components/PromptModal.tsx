import React, { useState } from 'react';
import { X, Copy, Edit, Trash, Star, MessageSquare, Terminal, Code } from 'lucide-react';
import { AddPromptForm } from './AddPromptForm';
export function PromptModal({
  prompt,
  onClose,
  onDelete,
  onEdit,
  onToggleFavorite,
  categories
}) {
  const [isEditing, setIsEditing] = useState(false);
  const typeIcons = {
    prompt: <MessageSquare size={20} className="text-orange-600" />,
    command: <Terminal size={20} className="text-orange-600" />,
    code: <Code size={20} className="text-orange-600" />
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
  };
  const handleSaveEdit = updatedPrompt => {
    onEdit({
      ...updatedPrompt,
      id: prompt.id,
      dateAdded: prompt.dateAdded,
      isFavorite: prompt.isFavorite
    });
    setIsEditing(false);
  };
  if (isEditing) {
    return <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-xl">
          <AddPromptForm onClose={() => setIsEditing(false)} onSave={handleSaveEdit} categories={categories} initialValues={prompt} isEditing={true} />
        </div>
      </div>;
  }
  return <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                {typeIcons[prompt.type]}
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                {prompt.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => onToggleFavorite(prompt.id)} className="p-2 text-slate-400 hover:text-yellow-400 rounded-full hover:bg-slate-100 transition-colors">
                <Star size={20} fill={prompt.isFavorite ? 'currentColor' : 'none'} className={prompt.isFavorite ? 'text-yellow-400' : ''} />
              </button>
              <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-full text-slate-600 font-medium">
              {prompt.category}
            </span>
            <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-full text-slate-600 font-medium">
              {prompt.type}
            </span>
          </div>
          <div className="bg-slate-50 p-5 rounded-lg mb-5 relative border border-slate-200">
            <pre className="whitespace-pre-wrap text-sm text-slate-800 font-mono">
              {prompt.content}
            </pre>
            <button onClick={handleCopy} className="absolute top-3 right-3 p-2 bg-white rounded-md shadow-sm hover:shadow transition-all border border-slate-200" title="Copy to clipboard">
              <Copy size={16} />
            </button>
          </div>
          {prompt.description && <div className="mb-5">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Description
              </h3>
              <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
                {prompt.description}
              </p>
            </div>}
          <div className="text-xs text-slate-500 mb-6 font-medium">
            Added on {new Date(prompt.dateAdded).toLocaleDateString()}
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => onDelete(prompt.id)} className="px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2 transition-colors font-medium">
              <Trash size={16} />
              Delete
            </button>
            <button onClick={() => setIsEditing(true)} className="px-4 py-2.5 bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-lg hover:from-orange-800 hover:to-orange-600 transition-all shadow-sm hover:shadow flex items-center gap-2 font-medium">
              <Edit size={16} />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>;
}