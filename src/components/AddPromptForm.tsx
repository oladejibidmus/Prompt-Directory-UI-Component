import React, { useState } from 'react';
import { X, MessageSquare, Terminal, Code } from 'lucide-react';
export function AddPromptForm({
  onClose,
  onSave,
  categories,
  initialValues = null,
  isEditing = false
}) {
  const [formValues, setFormValues] = useState(initialValues || {
    title: '',
    type: 'prompt',
    category: categories[0]?.id || '',
    content: '',
    description: ''
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSave(formValues);
  };
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-800">
          {isEditing ? 'Edit Prompt' : 'Add New Prompt'}
        </h2>
        <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors">
          <X size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1.5">
            Title
          </label>
          <input type="text" id="title" name="title" value={formValues.title} onChange={handleChange} required className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Enter a descriptive title" />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Type
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
              <input type="radio" name="type" value="prompt" checked={formValues.type === 'prompt'} onChange={handleChange} className="text-orange-600 focus:ring-orange-500" />
              <MessageSquare size={16} className="text-orange-600" />
              <span>Prompt</span>
            </label>
            <label className="flex items-center gap-2 p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
              <input type="radio" name="type" value="command" checked={formValues.type === 'command'} onChange={handleChange} className="text-orange-600 focus:ring-orange-500" />
              <Terminal size={16} className="text-orange-600" />
              <span>Command Line</span>
            </label>
            <label className="flex items-center gap-2 p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
              <input type="radio" name="type" value="code" checked={formValues.type === 'code'} onChange={handleChange} className="text-orange-600 focus:ring-orange-500" />
              <Code size={16} className="text-orange-600" />
              <span>Code Snippet</span>
            </label>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1.5">
            Category
          </label>
          <select id="category" name="category" value={formValues.category} onChange={handleChange} required className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white">
            {categories.map(category => <option key={category.id} value={category.id}>
                {category.name}
              </option>)}
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1.5">
            Content
          </label>
          <textarea id="content" name="content" value={formValues.content} onChange={handleChange} required rows={8} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-mono text-sm" placeholder="Enter your prompt or code snippet here" />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1.5">
            Description (Optional)
          </label>
          <textarea id="description" name="description" value={formValues.description} onChange={handleChange} rows={3} className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Add additional context or usage instructions" />
        </div>
        <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2.5 bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-lg hover:from-orange-800 hover:to-orange-600 transition-all shadow-sm hover:shadow font-medium">
            {isEditing ? 'Save Changes' : 'Save Prompt'}
          </button>
        </div>
      </form>
    </div>;
}