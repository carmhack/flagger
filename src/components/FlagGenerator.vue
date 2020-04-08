<template>
  <section class="section has-text-centered">
    <div class="columns">
      <div class="column">
        <b-field grouped>
          <b-field
            label="Flag type"
          >
            <b-switch
              v-model="flag.type"
              disabled
              true-value="Tricolor"
              false-value="Striped"
            >
              {{ flag.type }}
            </b-switch>
          </b-field>
          <b-field label="Orientation">
            <b-switch
              v-model="flag.tricolor.orientation"
              true-value="Vertical"
              false-value="Horizontal"
            >
              {{ flag.tricolor.orientation }}
            </b-switch>
          </b-field>
        </b-field>
      </div>
      <div class="column">
        <b-field grouped v-if="isTricolor">
          <b-field
            v-for="(color, index) in flag.tricolor.bands"
            :key="index"
            :label="`#${index+1} color`"
          >
            <swatches
              :value="color"
              :colors="colors"
              row-length="7"
              show-fallback
              show-border
              @input="updateTricolorBand($event, index)"
              popover-to="right"
            ></swatches>
          </b-field>
        </b-field>
        <p v-if="isTricolor" class="content">
          The colors are divided in three groups: <strong>european</strong>,
          <strong>pan-african</strong> and <strong>pan-slavic</strong>. <br />
          However, you are free to pick up your color by entering an hexadecimal.
        </p>
        <b-field grouped v-if="isStriped">
          <b-field label="Total stripes">
            <b-numberinput
              controls-position="compact"
              :min="1"
              :max="8"
              v-model="flag.striped.stripes.total"
            ></b-numberinput>
          </b-field>
          <b-field label="Stripes color">
            <swatches
              v-model="flag.striped.stripes.color"
              :colors="colors"
              :row-length="7"
              show-border
              show-fallback
              popover-to="right"
            ></swatches>
          </b-field>
          <b-field label="Background color">
            <swatches
              v-model="flag.background"
              :colors="colors"
              :row-length="7"
              show-border
              show-fallback
              popover-to="right"
            ></swatches>
          </b-field>
          <b-field label="Square color">
            <swatches
              v-model="flag.striped.square.color"
              :colors="colors"
              :row-length="7"
              show-border
              show-fallback
              popover-to="right"
            ></swatches>
          </b-field>
        </b-field>
      </div>
      <div class="column">
        <b-field grouped v-if="isTricolor">
          <b-field
            label="Show coat of arms"
          >
            <b-switch
              v-model="flag.tricolor.showCoatOfArms"
              true-value="Show"
              false-value="Don't show"
            >
              {{ flag.tricolor.showCoatOfArms }}
            </b-switch>
          </b-field>
          <b-field v-if="showCoatOfArms" label="Coat of arms">
            <b-select placeholder="Choose one" @input="changeCoat">
              <option
                v-for="(option, index) in images"
                :value="option.name"
                :key="index"
              >
                {{ option.text }}
              </option>
            </b-select>
          </b-field>
        </b-field>
      </div>
      <div class="column">
        <b-button type="is-dark" @click="save">Export to PNG</b-button>
      </div>
    </div>
    <vue-p5 v-on="{ preload, setup, draw }"></vue-p5>
  </section>
</template>

<script>
import VueP5 from 'vue-p5';
import Swatches from 'vue-swatches';

export default {
  name: 'FlagGenerator',
  components: {
    'vue-p5': VueP5,
    Swatches,
  },
  computed: {
    isTricolor() {
      return this.flag.type === 'Tricolor';
    },
    isStriped() {
      return this.flag.type === 'Striped';
    },
    showCoatOfArms() {
      return this.flag.tricolor.showCoatOfArms === 'Show';
    },
  },
  data() {
    return {
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
      currentImageIndex: 0,
      canvas: null,
      sketch: null,
      width: 600,
      height: 300,
      flag: {
        background: '#FCD116',
        striped: {
          square: {
            position: 'top-left',
            color: '#E31C23',
          },
          stripes: {
            total: 5,
            color: '#00843E',
          },
        },
        tricolor: {
          bands: ['#009246', '#F1F2F1', '#CE2B37'],
          coatOfArms: '',
          orientation: 'Vertical',
          showCoatOfArms: 'Show',
        },
        type: 'Tricolor',
      },
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
      this.sketch = sketch;
      const width = this.width;
      const height = this.height;
      this.canvas = sketch.createCanvas(width, height);
    },
    draw(sketch) {
      const flag = this.flag;
      const background = flag.background;
      sketch.background(background);

      this.createFlag(sketch, flag);
    },
    updateTricolorBand(newColor, index) {
      this.$set(this.flag.tricolor.bands, index, newColor);
    },
    changeCoat(value) {
      this.currentImageIndex = this.images.findIndex((image) => image.name === value);
    },
    createFlag(sketch, flag) {
      const width = this.width;
      const height = this.height;

      if (this.isTricolor) {
        this.createTricolorFlag(sketch, flag.tricolor, width, height);
      } else if (this.isStriped) {
        this.createStripedFlag(sketch, flag.striped, width, height);
      }
    },
    createTricolorFlag(sketch, flag, cWidth, cHeight) {
      const bandColors = flag.bands;
      const orientation = flag.orientation;
      const verticalBandWidth = 200;
      const horizontalBandHeight = 100;

      for (let i = 0; i < bandColors.length; i += 1) {
        const color = bandColors[i];
        sketch.fill(color);
        sketch.noStroke();
        if (orientation === 'Vertical') {
          sketch.rect(verticalBandWidth * i, 0, verticalBandWidth, cHeight);
        } else {
          sketch.rect(0, horizontalBandHeight * i, cWidth, horizontalBandHeight);
        }
        if (this.showCoatOfArms) {
          const currentImage = this.images[this.currentImageIndex].src;
          const imgWidth = currentImage.width / 5;
          const imgHeight = currentImage.height / 5;
          sketch.image(
            currentImage,
            cWidth / 2 - imgWidth / 2,
            cHeight / 2 - imgHeight / 2,
            imgWidth,
            imgHeight,
          );
        }
      }
    },
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
    save() {
      this.sketch.saveCanvas(this.canvas, 'myFlag', 'png');
    },
  },
};
</script>

<style lang="scss" scoped>
.column:not(:last-child) {
  border-right: 1px solid #ccc;
}
</style>
