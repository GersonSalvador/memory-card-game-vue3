<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <logo></logo>
          </q-avatar>
          Memory Game
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <navigation-menu :menuEntries="menuEntries"></navigation-menu>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar >
        <q-toolbar>
          <div>Created by Gerson Salvador</div>
        </q-toolbar>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue';

import NavigationMenu from '../components/NavigationMenu.vue';
import Logo from '../components/Logo.vue';

const menuEntries = [
  {
    name: 'Play',
    icon: 'videogame_asset',
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
];

export default {
  components: { Logo, NavigationMenu },
  setup() {
    const leftDrawerOpen = ref(false);
    const link = ref('');

    return {
      components: {
        Logo,
        NavigationMenu,
      },
      leftDrawerOpen,
      link,
      menuEntries,
    };
  },
};
</script>
