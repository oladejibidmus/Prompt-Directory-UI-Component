import React from 'react';
import { PromptCard } from './PromptCard';
export function PromptGallery({
  prompts,
  view,
  onOpenPrompt,
  onToggleFavorite
}) {
  if (prompts.length === 0) {
    return <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <p className="text-xl">No prompts found</p>
        <p className="text-sm mt-2">
          Try adjusting your search or add a new prompt
        </p>
      </div>;
  }
  return <div className={view === 'gallery' ? 'grid-view' : 'list-view'}>
      {view === 'gallery' ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt} view={view} onOpenPrompt={onOpenPrompt} onToggleFavorite={onToggleFavorite} />)}
        </div> : <div className="flex flex-col gap-3">
          {prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt} view={view} onOpenPrompt={onOpenPrompt} onToggleFavorite={onToggleFavorite} />)}
        </div>}
    </div>;
}