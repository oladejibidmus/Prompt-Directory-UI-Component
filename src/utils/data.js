// Mock data for the prototype
export const mockCategories = [{
  id: 'ai',
  name: 'AI & ML'
}, {
  id: 'dev',
  name: 'Development'
}, {
  id: 'devops',
  name: 'DevOps'
}, {
  id: 'data',
  name: 'Data Science'
}, {
  id: 'productivity',
  name: 'Productivity'
}];
export const mockPrompts = [{
  id: '1',
  title: 'React Component Generator',
  type: 'prompt',
  category: 'dev',
  content: 'Create a React functional component named [NAME] with TypeScript props interface. Include proper JSDoc comments and implement the following features: [FEATURES].',
  description: 'Use this prompt with ChatGPT to quickly generate React components with best practices.',
  dateAdded: '2023-10-15T10:30:00Z',
  isFavorite: true
}, {
  id: '2',
  title: 'Git Reset Hard',
  type: 'command',
  category: 'dev',
  content: 'git reset --hard HEAD~1',
  description: 'Resets the current branch to the commit before HEAD, discarding all changes.',
  dateAdded: '2023-10-12T14:20:00Z',
  isFavorite: false
}, {
  id: '3',
  title: 'Docker Compose Up',
  type: 'command',
  category: 'devops',
  content: 'docker-compose up -d --build',
  description: 'Builds and starts containers in detached mode.',
  dateAdded: '2023-10-10T09:15:00Z',
  isFavorite: true
}, {
  id: '4',
  title: 'React useEffect Cleanup',
  type: 'code',
  category: 'dev',
  content: `useEffect(() => {
  const subscription = someObservable.subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, [someObservable]);`,
  description: 'Pattern for properly cleaning up subscriptions in useEffect.',
  dateAdded: '2023-10-08T16:45:00Z',
  isFavorite: false
}, {
  id: '5',
  title: 'Pandas Data Cleaning',
  type: 'code',
  category: 'data',
  content: `import pandas as pd
# Load data
df = pd.read_csv('data.csv')
# Drop duplicates
df = df.drop_duplicates()
# Fill missing values
df = df.fillna({
    'numeric_col': df['numeric_col'].mean(),
    'categorical_col': 'unknown'
})
# Filter outliers
df = df[(df['value'] > lower_bound) & (df['value'] < upper_bound)]`,
  description: 'Common data cleaning steps with pandas.',
  dateAdded: '2023-10-05T11:30:00Z',
  isFavorite: true
}, {
  id: '6',
  title: 'Content Rewriter',
  type: 'prompt',
  category: 'ai',
  content: 'Rewrite the following text to be more engaging while maintaining the same information and key points: [TEXT]',
  description: 'Use with ChatGPT to improve content readability and engagement.',
  dateAdded: '2023-10-02T13:20:00Z',
  isFavorite: false
}, {
  id: '7',
  title: 'Kubernetes Pod Logs',
  type: 'command',
  category: 'devops',
  content: 'kubectl logs -f pod-name -n namespace',
  description: 'Stream logs from a Kubernetes pod in a specific namespace.',
  dateAdded: '2023-09-28T10:10:00Z',
  isFavorite: false
}, {
  id: '8',
  title: 'Meeting Summarizer',
  type: 'prompt',
  category: 'productivity',
  content: 'Please summarize the following meeting transcript into key points, action items, and decisions made: [TRANSCRIPT]',
  description: 'Extract the important information from meeting notes.',
  dateAdded: '2023-09-25T15:30:00Z',
  isFavorite: true
}];