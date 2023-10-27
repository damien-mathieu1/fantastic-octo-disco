<script setup lang="ts">

import BurgerMenu from "./BurgerMenu.vue"
import LanguageMenu from "./LanguageMenu.vue"

</script>

<template lang="">
  <header>
    <BurgerMenu />
    <LanguageMenu />
  </header>
</template>

<style lang="scss" scoped>

header {
  display: flex;
  width: 100%;
  height: 100%;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  z-index: 4;
  position: sticky;
  top: 0;
}

</style>
