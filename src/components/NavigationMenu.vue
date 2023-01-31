<template>
  <q-drawer show-if-above side="left" bordered>
    <q-item
      v-for="(menu, index) in menuEntries"
      clickable
      v-ripple
      :active="link === menu.link"
      :key="`menu-${index}`"
      :to="menu.link"
      @click="link = menu.link"
    >
      <q-item-section avatar>
        <q-icon :name="menu.icon"/>
      </q-item-section>
      <q-item-section>{{menu.name}}</q-item-section>
    </q-item>
  </q-drawer>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';

interface MenuEntry {
  name: string;
  icon: string;
  link: string;
}

export default defineComponent({
  name: 'navigation-menu',
  props: {
    menuEntries: {
      type: Array as () => MenuEntry[],
      default: () => [],
    },
  },
  setup() {
    const link = ref('');
    const activeLink = computed(() => link.value);
    return {
      link,
      activeLink,
    };
  },
});
</script>
