<template>
  <div>
    <Hero />
    <Flagger
      :width="width"
      :height="height"
      :colors="colors"
      :images="images"
    />
    <AppFooter />
  </div>
</template>

<script>
import Flagger from './components/Flagger.vue';
import Hero from './components/Hero.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    Hero,
    Flagger,
  },
  data() {
    return {
      width: 600,
      height: 300,
      colors: [
        ['#009246', '#F1F2F1', '#CE2B37', '#0055A4', '#F77F00', '#002664', '#000000'],
        ['#00843E', '#E31C23', '#FCD116'],
        ['#ff0000', '#ffffff', '#0093dd', '#171796', '#f7db17'],
      ],
      images: [
        {
          name: 'lion-silver',
          text: 'Silver Lion',
          src: null,
        },
        {
          name: 'lion-gold',
          text: 'Gold Lion',
          src: null,
        },
        {
          name: 'wolf',
          text: 'Wolf',
          src: null,
        },
        {
          name: 'unicorn',
          text: 'Unicorn',
          src: null,
        },
        {
          name: 'double-headed-eagle',
          text: 'Double Headed Eagle',
          src: null,
        },
        {
          name: 'dragon',
          text: 'Dragon',
          src: null,
        },
        {
          name: 'urss',
          text: 'URSS',
          src: null,
        },
        {
          name: 'vatican',
          text: 'Vatican',
          src: null,
        },
        {
          name: 'skull',
          text: 'Skull',
          src: null,
        },
        {
          name: 'palm',
          text: 'Palm',
          src: null,
        },
        {
          name: 'moro',
          text: 'Moro',
          src: null,
        },
        {
          name: 'leafs',
          text: 'Leafs',
          src: null,
        },
        {
          name: 'crown',
          text: 'Crown',
          src: null,
        },
      ],
    };
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
