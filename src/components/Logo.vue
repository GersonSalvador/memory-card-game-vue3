<template>
  <img :src="logo" alt="Memory Game"/>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';

export default defineComponent({
  name: 'Logo-component',
  setup() {
    const logo = ref('');
    onMounted(() => {
      const avatar = createAvatar(bottts, {
        seed: 'Felix',
        baseColor: ['F2C037'],
      });
      logo.value = avatar.toDataUriSync('logo.svg');
    });
    return {
      logo,
    };
  },
});
</script>
