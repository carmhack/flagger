<template>
  <div>
    <Hero title="Flagger" subtitle="Made with love by Adriano Grimaldi aka carmhack" />
    <FlagGenerator />
    <AppFooter />
  </div>
</template>

<script>
import FlagGenerator from './components/FlagGenerator.vue';
import Hero from './components/Hero.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    Hero,
    FlagGenerator,
  },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
