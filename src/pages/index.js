import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { PromptGallery } from '../components/PromptGallery';
import { AddPromptForm } from '../components/AddPromptForm';
import { PromptModal } from '../components/PromptModal';
import { mockPrompts, mockCategories } from '../utils/data';
import Head from 'next/head';
export default function Home() {
  const [view, setView] = useState('gallery'); // 'gallery' or 'list'
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [prompts, setPrompts] = useState(mockPrompts);
  const [categories, setCategories] = useState(mockCategories);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory || activeCategory === 'favorites' && prompt.isFavorite;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || prompt.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const handleOpenPrompt = prompt => {
    setSelectedPrompt(prompt);
    setIsPromptModalOpen(true);
  };
  const handleToggleFavorite = id => {
    setPrompts(prompts.map(prompt => prompt.id === id ? {
      ...prompt,
      isFavorite: !prompt.isFavorite
    } : prompt));
  };
  const handleAddPrompt = newPrompt => {
    const promptWithId = {
      ...newPrompt,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString(),
      isFavorite: false
    };
    setPrompts([promptWithId, ...prompts]);
    setIsAddModalOpen(false);
  };
  const handleDeletePrompt = id => {
    setPrompts(prompts.filter(prompt => prompt.id !== id));
    setIsPromptModalOpen(false);
  };
  const handleEditPrompt = updatedPrompt => {
    setPrompts(prompts.map(prompt => prompt.id === updatedPrompt.id ? updatedPrompt : prompt));
    setIsPromptModalOpen(false);
  };
  return <>
      <Head>
        <title>Prompt Gallery</title>
        <meta name="description" content="A gallery of useful prompts and commands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} onAddNew={() => setIsAddModalOpen(true)} searchQuery={searchQuery} setSearchQuery={setSearchQuery} view={view} setView={setView}>
        <PromptGallery prompts={filteredPrompts} view={view} onOpenPrompt={handleOpenPrompt} onToggleFavorite={handleToggleFavorite} />
        {isAddModalOpen && <AddPromptForm onClose={() => setIsAddModalOpen(false)} onSave={handleAddPrompt} categories={categories} />}
        {isPromptModalOpen && selectedPrompt && <PromptModal prompt={selectedPrompt} onClose={() => setIsPromptModalOpen(false)} onDelete={handleDeletePrompt} onEdit={handleEditPrompt} onToggleFavorite={handleToggleFavorite} categories={categories} />}
      </Layout>
    </>;
}