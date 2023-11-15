import tabs from './tabs.json';

export const sortedTabs = [...tabs].sort((a, b) => a.order - b.order);