<template>
  <section class="section has-text-centered">
    <FlagParams
      :colors="colors"
      :flag="flag"
      @save="onSave"
    />
    <VueP5 v-on="{ preload, setup, draw }"></VueP5>
  </section>
</template>

<script>
import VueP5 from 'vue-p5';
import { Flag } from '../models/flag';
import { Tricolor } from '../models/tricolor';
import FlagParams from './FlagParams.vue';

export default {
  name: 'Flagger',
  components: {
    VueP5,
    FlagParams,
  },
  props: {
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 300,
    },
    colors: {
      type: Array,
      default: () => [],
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.flag = new Tricolor(this.images);
  },
  data() {
    return {
      canvas: null,
      sketch: null,
      flag: null,
    };
  },
  methods: {
    preload(sketch) {
      const images = this.images;
      for (let i = 0; i < images.length; i += 1) {
        const image = images[i];
        image.src = sketch.loadImage(`assets/${image.name}.png`);
      }
    },
    setup(sketch) {
      const width = this.width;
      const height = this.height;
      this.sketch = sketch;
      this.canvas = sketch.createCanvas(width, height);
    },
    draw(sketch) {
      this.flag.draw(sketch, this.width, this.height);
    },
    onSave() {
      Flag.save(this.sketch, this.canvas);
    },
    /*
    createStripedFlag(sketch, flag, cWidth, cHeight) {
      const { total, color: stripeColor } = flag.stripes;
      const { color: squareColor } = flag.square;
      const stripeHeight = Math.round(cHeight / total);

      for (let i = 0; i < cHeight; i += stripeHeight * 2) {
        sketch.fill(stripeColor);
        sketch.noStroke();
        sketch.rect(0, i, cWidth, stripeHeight);
      }
      const squareWidth = 200;
      const squareHeight = stripeHeight * 3 > cHeight ? cHeight : stripeHeight * 3;
      sketch.fill(squareColor);
      sketch.rect(0, 0, squareWidth, squareHeight);
      sketch.fill(255);
    },
     */
  },
};
</script>
