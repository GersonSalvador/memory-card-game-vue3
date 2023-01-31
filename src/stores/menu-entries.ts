import { defineStore } from 'pinia';

interface MenuEntry {
  name: string;
  icon: string;
  link: string;
}

export interface MenuEntriesState {
  entries: MenuEntry[];
}

export const menuEntries = defineStore('menuEntries', {
  state: () => ({
    entries: [
      {
        name: 'Play',
        icon: 'play',
        link: '/play',
      },
      {
        name: 'Manage Players',
        icon: 'manage_accounts',
        link: '/players',
      },
      {
        name: 'Score Board',
        icon: 'score',
        link: '/score',
      },
    ],
  }),
});
