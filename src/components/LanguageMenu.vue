<template >
    <div class="locales">
      <a @click="changeLocale('fr')">🇫🇷</a>
      <a @click="changeLocale('en')">🇬🇧</a>
      <a @click="changeLocale('ja')">🇯🇵</a>
    </div>
</template>
<script lang="ts" setup>
import { loadLocaleMessages, setI18nLanguage } from "../i18n";
import { i18n } from "../main";
loadLocaleMessages(i18n, "fr");

const changeLocale = async (locale: string) => {
  await loadLocaleMessages(i18n, locale);
  // set i18n language
  setI18nLanguage(i18n, locale);
};
</script>
<style lang="scss" scoped>
    .locales {
  top: 0;
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;

  a {
    margin: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      scale: 1.2;
    }
  }
}
</style>