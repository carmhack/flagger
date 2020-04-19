<template>
  <section class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Flagger
        </h1>
        <h2 class="subtitle">
          Made with love by Adriano Grimaldi aka carmhack
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: 'Flag Generator',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>
